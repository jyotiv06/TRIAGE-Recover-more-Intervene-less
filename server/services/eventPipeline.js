const { PrismaClient } = require('../prisma/generated/client');
const prisma = new PrismaClient();

const SUPPORTED_EVENTS = ['payment.failed', 'payment.authorized', 'payment.captured'];

const EVENT_TO_PAYMENT_STATUS = {
  'payment.failed': 'FAILED',
  'payment.authorized': 'AUTHORIZED',
  'payment.captured': 'SUCCESS',
};

class ValidationError extends Error {}

// ---- 1. validate ----
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

// ---- 2. normalize ----
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

// ---- 3 & 4. deduplicate + store ----
async function processPaymentEvent(rawEvent) {
  validateEvent(rawEvent);
  const normalized = normalizeEvent(rawEvent);

  // Find or create the Payment this event refers to. In production this row would
  // already exist (created at checkout, before any webhook fires); for the demo we
  // create it on first sight so the pipeline is runnable standalone.
  let payment = await prisma.payment.findFirst({ where: { id: normalized.razorpayPaymentId } });

  if (!payment) {
    payment = await prisma.payment.create({
      data: {
        id: normalized.razorpayPaymentId,
        amount: normalized.amount,
        currency: normalized.currency,
        status: EVENT_TO_PAYMENT_STATUS[normalized.eventType],
        customerId: await getOrCreateDemoCustomer(),
      },
    });
  }

  try {
    const stored = await prisma.paymentEvent.create({
      data: {
        eventId: normalized.eventId,
        paymentId: payment.id,
        eventType: normalized.eventType,
        metadata: normalized.raw,
      },
    });

    // Only advance payment status if this event was actually new (we only reach here
    // if the create above succeeded, i.e. it wasn't a duplicate).
    await prisma.payment.update({
      where: { id: payment.id },
      data: { status: EVENT_TO_PAYMENT_STATUS[normalized.eventType] },
    });

    return { duplicate: false, event: stored };
  } catch (err) {
    if (err.code === 'P2002') {
      console.log(`Duplicate event ignored: ${normalized.eventId}`);
      return { duplicate: true, event: null };
    }
    throw err;
  }
}

module.exports = { processPaymentEvent, validateEvent, normalizeEvent, ValidationError };