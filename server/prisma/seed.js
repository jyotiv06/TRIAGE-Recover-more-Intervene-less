const { PrismaClient } = require('./generated/client');
const prisma = new PrismaClient();

const COUNT = 400;
const SEGMENTS = ['NEW', 'RETURNING', 'VIP'];
const FAILURE_REASONS = ['INSUFFICIENT_FUNDS', 'BANK_DECLINE', 'EXPIRED_CARD', 'NETWORK_ERROR', 'OTHER'];

function rand(min, max) { return Math.random() * (max - min) + min; }
function randInt(min, max) { return Math.floor(rand(min, max + 1)); }
function clip(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function pick(arr, weights) {
  if (!weights) return arr[randInt(0, arr.length - 1)];
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < arr.length; i++) {
    r -= weights[i];
    if (r <= 0) return arr[i];
  }
  return arr[arr.length - 1];
}

function generateFeatures() {
  const segment = pick(SEGMENTS, [0.45, 0.4, 0.15]);
  const previousSuccessCount = segment === 'VIP' ? randInt(8, 40)
                              : segment === 'RETURNING' ? randInt(1, 10)
                              : 0;
  const previousFailureCount = randInt(0, previousSuccessCount > 5 ? 2 : 5);
  const failureReason = pick(FAILURE_REASONS, [0.28, 0.27, 0.15, 0.15, 0.15]);

  const rareRoll = Math.random();
  const alreadyRecovered = rareRoll < 0.06;
  const lateAuthorization = !alreadyRecovered && rareRoll < 0.11;
  const checkoutAbandoned = !alreadyRecovered && !lateAuthorization && Math.random() < 0.12;

  const attemptCount = failureReason === 'OTHER' ? randInt(1, 2) : randInt(1, 4);
  const amount = Math.round(clip(Math.exp(rand(Math.log(200), Math.log(150000))), 150, 500000));
  const hoursSinceFailure = checkoutAbandoned ? rand(0.1, 6) : rand(0.1, 72);
  const daysSinceLastSuccess = previousSuccessCount > 0 ? randInt(1, 180) : null;

  let p = 0.32;
  p += segment === 'VIP' ? 0.25 : segment === 'RETURNING' ? 0.12 : 0;
  p += Math.min(previousSuccessCount * 0.025, 0.22);
  p -= Math.min(previousFailureCount * 0.035, 0.15);
  p += { INSUFFICIENT_FUNDS: -0.10, BANK_DECLINE: -0.04, EXPIRED_CARD: -0.22, NETWORK_ERROR: 0.16, OTHER: 0 }[failureReason];
  p += Math.min(hoursSinceFailure * 0.006, 0.15);
  p -= Math.min((attemptCount - 1) * 0.06, 0.22);
  p -= Math.min(amount / 400000, 0.15);
  if (checkoutAbandoned) p -= 0.08;
  if (lateAuthorization) p += 0.35;
  p = clip(p + rand(-0.05, 0.05), 0.02, 0.95);

  const naturalRecoveryProbability = alreadyRecovered ? 1 : Number(p.toFixed(3));
  const recoveredNaturally = alreadyRecovered ? true : Math.random() < naturalRecoveryProbability;

  const opportunityStatus = alreadyRecovered ? 'ALREADY_RECOVERED'
                           : lateAuthorization ? 'LATE_AUTH'
                           : checkoutAbandoned ? 'ABANDONED'
                           : 'FAILED';

  return {
    amount, segment, previousSuccessCount, previousFailureCount, daysSinceLastSuccess,
    attemptCount, failureReason, opportunityStatus, hoursSinceFailure,
    checkoutAbandoned, lateAuthorization, alreadyRecovered,
    naturalRecoveryProbability, recoveredNaturally,
  };
}

async function main() {
  console.log(`Generating ${COUNT} synthetic recovery opportunities...`);

  // clean slate — order matters because of FKs
  await prisma.opportunity.deleteMany({});
  await prisma.paymentEvent.deleteMany({});
  await prisma.payment.deleteMany({});
  await prisma.customer.deleteMany({ where: { email: { startsWith: 'synth_' } } });

  const numCustomers = Math.floor(COUNT * 0.6);
  const customers = [];
  for (let i = 0; i < numCustomers; i++) {
    const c = await prisma.customer.create({
      data: { email: `synth_${i}@example.com`, name: `Synthetic Customer ${i}` },
    });
    customers.push(c);
  }

  let recoveredCount = 0;
  const statusBreakdown = {};

  for (let i = 0; i < COUNT; i++) {
    const f = generateFeatures();
    const customer = customers[randInt(0, customers.length - 1)];

    const payment = await prisma.payment.create({
      data: {
        amount: f.amount,
        currency: 'INR',
        status: f.opportunityStatus === 'ALREADY_RECOVERED' ? 'SUCCESS' : 'FAILED',
        customerId: customer.id,
      },
    });

    await prisma.paymentEvent.create({
      data: {
        eventId: `synthetic_${payment.id}`,
        paymentId: payment.id,
        eventType: 'PAYMENT_FAILED',
        metadata: { synthetic: true },
      },
    });

    await prisma.opportunity.create({
      data: {
        paymentId: payment.id,
        customerId: customer.id,
        amount: f.amount,
        currency: 'INR',
        customerSegment: f.segment,
        previousSuccessCount: f.previousSuccessCount,
        previousFailureCount: f.previousFailureCount,
        daysSinceLastSuccess: f.daysSinceLastSuccess,
        attemptCount: f.attemptCount,
        failureReason: f.failureReason,
        opportunityStatus: f.opportunityStatus,
        hoursSinceFailure: Number(f.hoursSinceFailure.toFixed(2)),
        checkoutAbandoned: f.checkoutAbandoned,
        lateAuthorization: f.lateAuthorization,
        alreadyRecovered: f.alreadyRecovered,
        naturalRecoveryProbability: f.naturalRecoveryProbability,
        recoveredNaturally: f.recoveredNaturally,
      },
    });

    if (f.recoveredNaturally) recoveredCount++;
    statusBreakdown[f.opportunityStatus] = (statusBreakdown[f.opportunityStatus] || 0) + 1;
  }

  console.log(`Done. ${COUNT} opportunities inserted across ${numCustomers} customers.`);
  console.log(`Natural recovery rate: ${(recoveredCount / COUNT * 100).toFixed(1)}%`);
  console.log('Status breakdown:', statusBreakdown);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });