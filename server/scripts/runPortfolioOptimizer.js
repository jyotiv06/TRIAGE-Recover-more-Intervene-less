const { PrismaClient } = require('../prisma/generated/client');
const { optimizePortfolio } = require('../services/portfolioOptimizer');

const prisma = new PrismaClient();

const CAPACITY = Number(process.argv[2]) || 50;

async function main() {
    const rawOpportunities = await prisma.opportunity.findMany();

    const opportunities = rawOpportunities.map((o) => ({
        ...o,
        amount: Number(o.amount),
        naturalRecoveryProbability: Number(o.naturalRecoveryProbability),
        recoveryWithInterventionProbability: Number(o.recoveryWithInterventionProbability),
        incrementalLift: Number(o.incrementalLift),
        expectedIncrementalRevenue: Number(o.expectedIncrementalRevenue),
    }));

  console.log(
    `Running portfolio optimizer on ${opportunities.length} opportunities, capacity = ${CAPACITY}...\n`
  );

  const result = optimizePortfolio({ opportunities, capacity: CAPACITY });

  console.log('=== REVIVE Recovery Portfolio Optimizer ===');
  console.log(`Total opportunities:              ${result.totalOpportunities}`);
  console.log(`Intervention capacity:            ${result.capacity}`);
  console.log(
    `Total available incremental value: ₹${result.totalAvailableIncrementalRevenue.toFixed(2)}`
  );
  console.log(
    `Captured incremental value:        ₹${result.capturedIncrementalRevenue.toFixed(2)}`
  );
  console.log(
    `Capture rate:                      ${(result.captureRate * 100).toFixed(1)}%\n`
  );

  console.log('Top 5 selected:');
  result.selected.slice(0, 5).forEach((o, i) => {
    console.log(
      `  #${i + 1} Opportunity ${o.id} — ₹${o.amount} — incremental ₹${o.expectedIncrementalRevenue.toFixed(2)} — ${o.reason}`
    );
  });

  console.log('\nSample rejected (highest amount, not selected):');
  result.rejected
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5)
    .forEach((o) => {
      console.log(
        `  Opportunity ${o.id} — ₹${o.amount} — incremental ₹${o.expectedIncrementalRevenue.toFixed(2)} — ${o.reason}`
      );
    });

  // Persist selection back to the DB so the audit trail / dashboard
  // (Pieces 10-11) can read it directly.
  await Promise.all(
    result.selected.map((o) =>
      prisma.opportunity.update({
        where: { id: o.id },
        data: { selectedForIntervention: true, selectionReason: o.reason },
      })
    )
  );
  await Promise.all(
    result.rejected.map((o) =>
      prisma.opportunity.update({
        where: { id: o.id },
        data: { selectedForIntervention: false, selectionReason: o.reason },
      })
    )
  );

  console.log('\nSelection persisted to database. ✅');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());