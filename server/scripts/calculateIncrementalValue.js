const {
  calculateIncrementalValue,
} = require('../services/incrementalValue');

const { PrismaClient } = require('../prisma/generated/client');

const prisma = new PrismaClient();

async function main() {
  const opportunities = await prisma.opportunity.findMany({
    where: {
      diagnosedAt: { not: null },
      aiNaturalRecoveryProbability: { not: null },
      aiRecoveryWithInterventionProbability: { not: null },
    },
  });

  console.log(
    `Calculating incremental value for ${opportunities.length} opportunities...`
  );

  let updated = 0;

  for (const opportunity of opportunities) {
    const result = calculateIncrementalValue({
      amount: opportunity.amount,
      naturalRecoveryProbability:
        opportunity.aiNaturalRecoveryProbability,
      recoveryWithInterventionProbability:
        opportunity.aiRecoveryWithInterventionProbability,
    });

    await prisma.opportunity.update({
      where: { id: opportunity.id },
      data: {
        incrementalLift: result.incrementalLift,
        expectedIncrementalRevenue:
          result.expectedIncrementalRevenue,
      },
    });

    updated++;
  }

  const summary = await prisma.opportunity.aggregate({
    where: {
      expectedIncrementalRevenue: { not: null },
    },
    _sum: {
      expectedIncrementalRevenue: true,
    },
  });

  console.log('');
  console.log('=== REVIVE Incremental Recovery Analysis ===');
  console.log(`Opportunities analyzed: ${updated}`);
  console.log(
    `Total expected incremental revenue: ₹${summary._sum.expectedIncrementalRevenue ?? 0}`
  );

  await prisma.$disconnect();
}

main().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});