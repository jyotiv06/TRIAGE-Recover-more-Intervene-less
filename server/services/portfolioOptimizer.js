function optimizePortfolio({ opportunities, capacity }) {
  if (!Array.isArray(opportunities)) {
    throw new Error('opportunities must be an array');
  }
  if (!Number.isInteger(capacity) || capacity < 0) {
    throw new Error('capacity must be a non-negative integer');
  }

  const ranked = [...opportunities].sort((a, b) => {
    const diff = b.expectedIncrementalRevenue - a.expectedIncrementalRevenue;
    if (diff !== 0) return diff;
    return (b.incrementalLift ?? 0) - (a.incrementalLift ?? 0);
  });

  const selected = ranked.slice(0, capacity).map((opp) => ({
    ...opp,
    selected: true,
    reason: reasonForSelection(opp),
  }));

  const rejected = ranked.slice(capacity).map((opp) => ({
    ...opp,
    selected: false,
    reason: reasonForRejection(opp),
  }));

  const totalAvailableIncrementalRevenue = ranked.reduce(
    (sum, o) => sum + o.expectedIncrementalRevenue,
    0
  );
  const capturedIncrementalRevenue = selected.reduce(
    (sum, o) => sum + o.expectedIncrementalRevenue,
    0
  );

  return {
    capacity,
    totalOpportunities: ranked.length,
    selected,
    rejected,
    totalAvailableIncrementalRevenue,
    capturedIncrementalRevenue,
    captureRate:
      totalAvailableIncrementalRevenue > 0
        ? capturedIncrementalRevenue / totalAvailableIncrementalRevenue
        : 0,
  };
}

function reasonForSelection(opp) {
  return 'highest incremental opportunity';
}

function reasonForRejection(opp) {
  if ((opp.naturalRecoveryProbability ?? 0) >= 0.7) {
    return 'likely to recover naturally';
  }
  if (opp.expectedIncrementalRevenue <= 0) {
    return 'no incremental lift from intervention';
  }
  return 'below capacity threshold';
}

module.exports = {
  optimizePortfolio,
};