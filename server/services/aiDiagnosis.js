const { GoogleGenAI, Type } = require('@google/genai');
const { PrismaClient } = require('../prisma/generated/client');

const prisma = new PrismaClient();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const MODEL = 'gemini-3.1-flash-lite';

const SYSTEM_PROMPT = `You are a payment recovery diagnosis engine for an Indian fintech platform.
Given details about a failed or at-risk payment, diagnose what likely happened and estimate
recovery probabilities. You are an ADVISORY system only — you never decide or trigger any
action, you only report intelligence for a downstream decision system to use.

Respond with ONLY a JSON object, no other text, in exactly this shape:
{
  "diagnosis": "<short phrase, e.g. 'Temporary issuer failure'>",
  "reasoning": "<one sentence explaining why>",
  "confidence": <number 0-1, how confident you are in this diagnosis>,
  "naturalRecoveryProbability": <number 0-1, probability this recovers with ZERO intervention>,
  "recoveryWithInterventionProbability": <number 0-1, probability this recovers IF a recovery action (retry prompt, reminder, etc.) is sent>
}
recoveryWithInterventionProbability should always be >= naturalRecoveryProbability.`;

function buildFeatures(opportunity) {
  return {
    amount: opportunity.amount,
    currency: opportunity.currency,
    customerSegment: opportunity.customerSegment,
    previousSuccessCount: opportunity.previousSuccessCount,
    previousFailureCount: opportunity.previousFailureCount,
    daysSinceLastSuccess: opportunity.daysSinceLastSuccess,
    attemptCount: opportunity.attemptCount,
    failureReason: opportunity.failureReason,
    opportunityStatus: opportunity.opportunityStatus,
    hoursSinceFailure: opportunity.hoursSinceFailure,
    checkoutAbandoned: opportunity.checkoutAbandoned,
    lateAuthorization: opportunity.lateAuthorization,
  };
}

function parseModelResponse(text) {
  let cleaned = text.replace(/```json|```/g, '').trim();
  const jsonMatch = cleaned.match(/\{[\s\S]*\}/);
  if (jsonMatch) cleaned = jsonMatch[0];

  const parsed = JSON.parse(cleaned);

  const required = ['diagnosis', 'confidence', 'naturalRecoveryProbability', 'recoveryWithInterventionProbability'];
  for (const key of required) {
    if (parsed[key] === undefined) throw new Error(`Model response missing "${key}"`);
  }
  const clip = (v) => Math.max(0, Math.min(1, Number(v)));
  parsed.confidence = clip(parsed.confidence);
  parsed.naturalRecoveryProbability = clip(parsed.naturalRecoveryProbability);
  parsed.recoveryWithInterventionProbability = clip(parsed.recoveryWithInterventionProbability);
  return parsed;
}

async function diagnoseOpportunity(opportunityId) {
  const opportunity = await prisma.opportunity.findUniqueOrThrow({ where: { id: opportunityId } });
  const features = buildFeatures(opportunity);

  const response = await ai.models.generateContent({
    model: MODEL,
    contents: [{ role: 'user', parts: [{ text: JSON.stringify(features) }] }],
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0, 
      maxOutputTokens: 800,
      thinkingConfig: { thinkingLevel: 'low' },
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          diagnosis: { type: Type.STRING },
          reasoning: { type: Type.STRING },
          confidence: { type: Type.NUMBER },
          naturalRecoveryProbability: { type: Type.NUMBER },
          recoveryWithInterventionProbability: { type: Type.NUMBER },
        },
        required: [
          'diagnosis',
          'reasoning',
          'confidence',
          'naturalRecoveryProbability',
          'recoveryWithInterventionProbability',
        ],
      },
    },
  });

  const text = response.text || '';
  let result;
  try {
    result = parseModelResponse(text);
  } catch (err) {
    console.error(`  Raw response that failed to parse: ${text.slice(0, 200)}`);
    throw err;
  }

  await prisma.opportunity.update({
    where: { id: opportunity.id },
    data: {
      diagnosis: result.diagnosis,
      diagnosisConfidence: result.confidence,
      aiNaturalRecoveryProbability: result.naturalRecoveryProbability,
      aiRecoveryWithInterventionProbability: result.recoveryWithInterventionProbability,
      diagnosedAt: new Date(),
    },
  });

  return result;
}

async function diagnoseBatch(limit = 50, delayMs = 4500) {
  const pending = await prisma.opportunity.findMany({
    where: { diagnosedAt: null },
    take: limit,
  });

  console.log(`Diagnosing ${pending.length} opportunities...`);
  let done = 0;
  for (const opp of pending) {
    try {
      await diagnoseOpportunity(opp.id);
      done++;
      if (done % 10 === 0) console.log(`  ${done}/${pending.length} done`);
    } catch (err) {
      console.error(`Failed to diagnose ${opp.id}: ${err.message}`);
    }
    await new Promise((r) => setTimeout(r, delayMs));
  }
  console.log(`Diagnosis complete: ${done}/${pending.length} succeeded.`);
  return done;
}

module.exports = { diagnoseOpportunity, diagnoseBatch, buildFeatures, parseModelResponse };