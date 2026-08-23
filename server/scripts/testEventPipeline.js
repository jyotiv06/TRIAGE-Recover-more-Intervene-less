const { processPaymentEvent } = require('../services/eventPipeline');

const sampleEvent = {
  id: 'evt_demo_dedup_001',
  event: 'payment.failed',
  created_at: Math.floor(Date.now() / 1000),
  payload: {
    payment: {
      entity: {
        id: 'pay_demo_dedup_001',
        amount: 500000, // paise -> 5000.00 INR
        currency: 'INR',
        status: 'failed',
      },
    },
  },
};

async function main() {
  console.log('--- First delivery ---');
  const first = await processPaymentEvent(sampleEvent);
  console.log(first.duplicate ? 'Ignored (unexpected!)' : 'Stored ✔');

  console.log('--- Same event delivered again (simulating a webhook retry) ---');
  const second = await processPaymentEvent(sampleEvent);
  console.log(second.duplicate ? 'Ignored as duplicate ✔' : 'Stored again — BUG!');

  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});