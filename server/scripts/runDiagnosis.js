const { diagnoseBatch } = require('../services/aiDiagnosis');
const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

async function main() {
  const count = Number(process.argv[2]) || 20;
  await diagnoseBatch(count);

  const samples = await prisma.opportunity.findMany({
    where: { diagnosedAt: { not: null } },
    take: 3,
    orderBy: { diagnosedAt: 'desc' },
  });

  for (const s of samples) {
    console.log('\n---');
    console.log(`Payment: ₹${s.amount}`);
    console.log(`Diagnosis: ${s.diagnosis}`);
    console.log(`Confidence: ${s.diagnosisConfidence}`);
    console.log(`Natural recovery probability: ${s.aiNaturalRecoveryProbability}`);
    console.log(`Recovery with intervention: ${s.aiRecoveryWithInterventionProbability}`);
  }

  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});