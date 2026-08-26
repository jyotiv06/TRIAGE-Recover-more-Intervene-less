const { PrismaClient } = require('../prisma/generated/client');
const { simulatePortfolio } = require('../services/actionSimulator');

const prisma = new PrismaClient();

async function main() {
  const raw = await prisma.opportunity.findMany({
    where: { selectedForIntervention: true },
  });

  const opportunities = raw.map((o) => ({
    ...o,
    amount: Number(o.amount),
    naturalRecoveryProbability: Number(o.naturalRecoveryProbability),
    recoveryWithInterventionProbability: Number(o.recoveryWithInterventionProbability),
    expectedIncrementalRevenue: Number(o.expectedIncrementalRevenue),
  }));

  console.log(`Simulating actions + outcomes for ${opportunities.length} opportunities...\n`);

  const result = simulatePortfolio(opportunities);

  console.log('=== REVIVE Action + Outcome Simulation ===');
  console.log(`Total processed:      ${result.total}`);
  console.log(`Interventions used:   ${result.interventionsUsed}`);
  console.log(`Recovered:            ${result.recoveredCount}`);
  console.log(`Total amount recovered: ₹${result.totalRecovered.toFixed(2)}\n`);

  console.log('Action breakdown:');
  ['RETRY', 'PAYMENT_LINK', 'REMINDER', 'DO_NOTHING', 'ESCALATE'].forEach((a) => {
    const count = result.results.filter((r) => r.action === a).length;
    console.log(`  ${a}: ${count}`);
  });

  await Promise.all(
    result.results.map((o) =>
      prisma.opportunity.update({
        where: { id: o.id },
        data: {
          action: o.action,
          recovered: o.recovered,
          amountRecovered: o.amountRecovered,
          interventionUsed: o.interventionUsed,
        },
      })
    )
  );

  console.log('\nAction + outcome data persisted. ✅');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());