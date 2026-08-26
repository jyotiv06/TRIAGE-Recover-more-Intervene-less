const express = require('express');
const cors = require('cors');

const {
  processPaymentEvent,
  ValidationError,
} = require('./services/eventPipeline');

const dashboardRoutes = require('./routes/dashboard');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/dashboard', dashboardRoutes);

app.post('/webhook/razorpay', async (req, res) => {
  try {
    const result = await processPaymentEvent(req.body);

    if (result.duplicate) {
      return res.status(200).json({
        status: 'duplicate_ignored',
      });
    }

    return res.status(200).json({
      status: 'processed',
      eventId: result.event.eventId,
    });
  } catch (err) {
    if (err instanceof ValidationError) {
      return res.status(400).json({
        error: err.message,
      });
    }

    console.error(err);

    return res.status(500).json({
      error: 'internal_error',
    });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});