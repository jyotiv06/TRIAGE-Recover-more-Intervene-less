const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('../prisma/generated/client');
const { buildFullAuditReport } = require('../services/auditTrail');

const prisma = new PrismaClient();

async function main() {
  const raw = await prisma.opportunity.findMany();

    const opportunities = raw.map((o) => ({
        ...o,
        amount: Number(o.amount),
        naturalRecoveryProbability: Number(o.naturalRecoveryProbability),
        aiRecoveryWithInterventionProbability: Number(o.aiRecoveryWithInterventionProbability),
        incrementalLift: Number(o.incrementalLift),
        expectedIncrementalRevenue: Number(o.expectedIncrementalRevenue),
        amountRecovered: o.amountRecovered != null ? Number(o.amountRecovered) : 0,
    }));    

  console.log(`Building audit trail for ${opportunities.length} opportunities...\n`);

  const report = buildFullAuditReport(opportunities);
  const selected = report.filter((r) => r.optimizer.selected);
  const blocked = report.filter((r) => r.optimizer.selected && !r.policy.allowed);
  const doNothing = report.filter((r) => r.action.chosen === 'DO_NOTHING' && r.optimizer.selected);

  console.log(`Selected: ${selected.length} | Policy-blocked: ${blocked.length} | Do-nothing among selected: ${doNothing.length}\n`);

  console.log('Sample trail (first selected case):');
  console.log(JSON.stringify(selected[0], null, 2));

  const outPath = path.join(__dirname, '..', 'audit-trail.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`\nFull audit trail written to ${outPath} ✅`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());