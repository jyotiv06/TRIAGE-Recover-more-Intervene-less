function calculateIncrementalValue({
  amount,
  naturalRecoveryProbability,
  recoveryWithInterventionProbability,
}) {
  const paymentAmount = Number(amount);
  const natural = Number(naturalRecoveryProbability);
  const intervention = Number(recoveryWithInterventionProbability);

  if (!Number.isFinite(paymentAmount) || paymentAmount < 0) {
    throw new Error('Invalid payment amount');
  }

  if (!Number.isFinite(natural) || !Number.isFinite(intervention)) {
    throw new Error('Invalid recovery probabilities');
  }

  const incrementalLift = Math.max(0, intervention - natural);

  const expectedIncrementalRevenue =
    paymentAmount * incrementalLift;

  return {
    incrementalLift,
    expectedIncrementalRevenue,
  };
}

module.exports = {
  calculateIncrementalValue,
};