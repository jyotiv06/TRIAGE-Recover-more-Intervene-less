const { PrismaClient } = require('../prisma/generated/client');
const { evaluatePortfolio, DEFAULT_POLICY } = require('../services/policyEngine');

const prisma = new PrismaClient();

async function main() {
  const raw = await prisma.opportunity.findMany({
    where: { selectedForIntervention: true },
  });

  const selected = raw.map((o) => ({
    ...o,
    amount: Number(o.amount),
    expectedIncrementalRevenue: Number(o.expectedIncrementalRevenue),
  }));

  console.log(`Evaluating ${selected.length} optimizer-selected opportunities against policy...\n`);

  const result = evaluatePortfolio(selected, DEFAULT_POLICY);

  console.log('=== REVIVE Policy Engine ===');
  console.log(`Optimizer selected:   ${result.total}`);
  console.log(`Policy approved:      ${result.approved}`);
  console.log(`Policy blocked:       ${result.blocked}`);
  console.log(`Flagged for escalation: ${result.escalated}\n`);

  console.log('Blocked cases (optimizer wanted them, policy said no):');
  result.results
    .filter((o) => !o.allowed)
    .slice(0, 10)
    .forEach((o) => {
      console.log(`  Opportunity ${o.id} — ₹${o.amount} — ${o.reason}`);
    });

  await Promise.all(
    result.results.map((o) =>
      prisma.opportunity.update({
        where: { id: o.id },
        data: {
          policyAllowed: o.allowed,
          policyReason: o.reason,
          policyEscalate: Boolean(o.escalate),
        },
      })
    )
  );

  console.log('\nPolicy decisions persisted. ✅');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());