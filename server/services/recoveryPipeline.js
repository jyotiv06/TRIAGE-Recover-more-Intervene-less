const { PrismaClient } = require('../prisma/generated/client');

const { diagnoseOpportunity } = require('./aiDiagnosis');
const { calculateIncrementalValue } = require('./incrementalValue');
const { optimizePortfolio } = require('./portfolioOptimizer');
const { evaluatePolicy } = require('./policyEngine');
const { chooseAction, simulateOutcome } = require('./actionSimulator');
const { buildAuditTrail } = require('./auditTrail');

const prisma = new PrismaClient();

const PORTFOLIO_CAPACITY = 50;

async function runRecoveryPipeline(opportunityId) {
  let opportunity = await prisma.opportunity.findUniqueOrThrow({
    where: { id: opportunityId },
  });

  const diagnosis = await diagnoseOpportunity(opportunity.id);

  opportunity = await prisma.opportunity.findUniqueOrThrow({
    where: { id: opportunityId },
  });

  const incremental = calculateIncrementalValue({
    amount: opportunity.amount,
    naturalRecoveryProbability:
      opportunity.aiNaturalRecoveryProbability ??
      opportunity.naturalRecoveryProbability,
    recoveryWithInterventionProbability:
      opportunity.aiRecoveryWithInterventionProbability,
  });

  await prisma.opportunity.update({
    where: { id: opportunity.id },
    data: {
      incrementalLift: incremental.incrementalLift,
      expectedIncrementalRevenue:
        incremental.expectedIncrementalRevenue,
    },
  });

  opportunity = await prisma.opportunity.findUniqueOrThrow({
    where: { id: opportunityId },
  });

  const candidates = await prisma.opportunity.findMany({
    where: {
      diagnosedAt: { not: null },
      expectedIncrementalRevenue: { not: null },
    },
  });

  const optimizationInput = candidates.map((o) => ({
    ...o,
    expectedIncrementalRevenue:
      Number(o.expectedIncrementalRevenue),
    incrementalLift: Number(o.incrementalLift ?? 0),
    naturalRecoveryProbability:
      Number(
        o.aiNaturalRecoveryProbability ??
        o.naturalRecoveryProbability ??
        0
      ),
  }));

  const portfolio = optimizePortfolio({
    opportunities: optimizationInput,
    capacity: PORTFOLIO_CAPACITY,
  });

  const selectedOpportunity = portfolio.selected.find(
    (o) => o.id === opportunity.id
  );

  const rejectedOpportunity = portfolio.rejected.find(
    (o) => o.id === opportunity.id
  );

  const selected = Boolean(selectedOpportunity);

  const selectionReason =
    selectedOpportunity?.reason ??
    rejectedOpportunity?.reason ??
    'not selected';

  await prisma.opportunity.update({
    where: { id: opportunity.id },
    data: {
      selectedForIntervention: selected,
      selectionReason,
    },
  });

  opportunity = await prisma.opportunity.findUniqueOrThrow({
    where: { id: opportunityId },
  });

  const policyDecision = evaluatePolicy({
    ...opportunity,
    currentStatus: opportunity.opportunityStatus,
    diagnosisConfidence: opportunity.diagnosisConfidence,
  });

  await prisma.opportunity.update({
    where: { id: opportunity.id },
    data: {
      policyAllowed: policyDecision.allowed,
      policyReason: policyDecision.reason,
      policyEscalate: policyDecision.escalate ?? false,
    },
  });

  opportunity = await prisma.opportunity.findUniqueOrThrow({
    where: { id: opportunityId },
  });

  const action = chooseAction({
    ...opportunity,
    policyAllowed: opportunity.policyAllowed,
    policyEscalate: opportunity.policyEscalate,
    expectedIncrementalRevenue:
      Number(opportunity.expectedIncrementalRevenue ?? 0),
  });

  await prisma.opportunity.update({
    where: { id: opportunity.id },
    data: {
      action,
      interventionUsed:
        action !== 'DO_NOTHING' &&
        action !== 'ESCALATE',
    },
  });

  opportunity = await prisma.opportunity.findUniqueOrThrow({
    where: { id: opportunityId },
  });

  const outcome = simulateOutcome(
    {
      ...opportunity,
      amount: Number(opportunity.amount),
      naturalRecoveryProbability:
        Number(
          opportunity.aiNaturalRecoveryProbability ??
          opportunity.naturalRecoveryProbability ??
          0
        ),
      recoveryWithInterventionProbability:
        Number(
          opportunity.aiRecoveryWithInterventionProbability ?? 0
        ),
    },
    action
  );

  await prisma.opportunity.update({
    where: { id: opportunity.id },
    data: {
      recovered: outcome.recovered,
      amountRecovered: outcome.amountRecovered,
      interventionUsed: outcome.interventionUsed,
    },
  });

  const finalOpportunity =
    await prisma.opportunity.findUniqueOrThrow({
      where: { id: opportunityId },
    });

  const auditTrail = buildAuditTrail({
    ...finalOpportunity,
    amount: Number(finalOpportunity.amount),
    expectedIncrementalRevenue:
      Number(
        finalOpportunity.expectedIncrementalRevenue ?? 0
      ),
    incrementalLift:
      Number(finalOpportunity.incrementalLift ?? 0),
    naturalRecoveryProbability:
      Number(
        finalOpportunity.aiNaturalRecoveryProbability ??
        finalOpportunity.naturalRecoveryProbability ??
        0
      ),
    aiRecoveryWithInterventionProbability:
      Number(
        finalOpportunity.aiRecoveryWithInterventionProbability ?? 0
      ),
  });

  return {
    opportunityId: opportunity.id,
    diagnosis,
    incremental,
    optimizer: {
      selected,
      reason: selectionReason,
    },
    policy: policyDecision,
    action,
    outcome,
    auditTrail,
  };
}

module.exports = {
  runRecoveryPipeline,
};