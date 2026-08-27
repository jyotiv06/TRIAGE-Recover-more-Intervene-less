const { PrismaClient } = require('../prisma/generated/client');
const { runRecoveryPipeline } = require('./recoveryPipeline');
const prisma = new PrismaClient();

const SUPPORTED_EVENTS = ['payment.failed', 'payment.authorized', 'payment.captured'];

const EVENT_TO_PAYMENT_STATUS = {
  'payment.failed': 'FAILED',
  'payment.authorized': 'AUTHORIZED',
  'payment.captured': 'SUCCESS',
};

class ValidationError extends Error {}

function validateEvent(raw) {
  if (!raw || typeof raw !== 'object') {
    throw new ValidationError('Event body must be an object');
  }
  if (!raw.id) {
    throw new ValidationError('Missing event id (required for deduplication)');
  }
  if (!SUPPORTED_EVENTS.includes(raw.event)) {
    throw new ValidationError(`Unsupported event type: ${raw.event}`);
  }
  const entity = raw.payload?.payment?.entity;
  if (!entity || !entity.id || typeof entity.amount !== 'number') {
    throw new ValidationError('Missing or malformed payload.payment.entity');
  }
  return true;
}

function normalizeEvent(raw) {
  const entity = raw.payload.payment.entity;
  return {
    eventId: raw.id,
    eventType: raw.event,
    razorpayPaymentId: entity.id,
    amount: entity.amount / 100, // Razorpay sends amount in paise
    currency: entity.currency || 'INR',
    occurredAt: raw.created_at ? new Date(raw.created_at * 1000) : new Date(),
    raw,
  };
}

async function getOrCreateDemoCustomer() {
  const existing = await prisma.customer.findFirst({ where: { email: 'demo_webhook@example.com' } });
  if (existing) return existing.id;
  const created = await prisma.customer.create({
    data: { email: 'demo_webhook@example.com', name: 'Demo Webhook Customer' },
  });
  return created.id;
}

async function processPaymentEvent(rawEvent) {
  validateEvent(rawEvent);
  const normalized = normalizeEvent(rawEvent);

  try {
    const stored = await prisma.paymentEvent.create({
      data: {
        eventId: normalized.eventId,
        paymentId: payment.id,
        eventType: normalized.eventType,
        metadata: normalized.raw,
      },
    });

    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        status: EVENT_TO_PAYMENT_STATUS[normalized.eventType],
      },
    });

    const opportunity = await prisma.opportunity.upsert({
      where: {
        paymentId: payment.id,
      },
      create: {
        paymentId: payment.id,
        customerId: payment.customerId,

        amount: payment.amount,
        currency: payment.currency,

        customerSegment: 'NEW',
        previousSuccessCount: 0,
        previousFailureCount: 0,
        daysSinceLastSuccess: null,

        attemptCount: 1,
        failureReason: 'OTHER',
        opportunityStatus: 'FAILED',

        hoursSinceFailure: 0,
        checkoutAbandoned: false,
        lateAuthorization: false,
        alreadyRecovered: false,

        naturalRecoveryProbability: 0,
        recoveredNaturally: false,
      },

      update: {
        amount: payment.amount,
        currency: payment.currency,
        opportunityStatus: 'FAILED',
        attemptCount: {
          increment: 1,
        },
        hoursSinceFailure: 0,
      },
    });

    await runRecoveryPipeline(opportunity.id);

    return {
      duplicate: false,
      event: stored,
    };

  } catch (err) {
    if (err.code === 'P2002') {
      console.log(`Duplicate event ignored: ${normalized.eventId}`);
      return { duplicate: true, event: null };
    }

    throw err;
  }
}

module.exports = { processPaymentEvent, validateEvent, normalizeEvent, ValidationError };