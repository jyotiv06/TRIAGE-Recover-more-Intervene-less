function buildAuditTrail(opportunity) {
  return {
    id: opportunity.id,
    event: {
      failureReason: opportunity.failureReason,
      amount: opportunity.amount,
      attemptCount: opportunity.attemptCount ?? null,
    },
    diagnosis: {
      confidence: opportunity.diagnosisConfidence ?? null,
    },
    naturalRecoveryEstimate: {
      probability: opportunity.naturalRecoveryProbability,
    },
    interventionEstimate: {
        probability: opportunity.aiRecoveryWithInterventionProbability,
    },
    incrementalValue: {
      lift: opportunity.incrementalLift,
      expectedIncrementalRevenue: opportunity.expectedIncrementalRevenue,
    },
    optimizer: {
      selected: opportunity.selectedForIntervention,
      reason: opportunity.selectionReason,
    },
    policy: {
      allowed: opportunity.policyAllowed,
      reason: opportunity.policyReason,
      escalate: opportunity.policyEscalate,
    },
    action: {
      chosen: opportunity.action ?? null,
      interventionUsed: opportunity.interventionUsed ?? false,
    },
    outcome: {
      recovered: opportunity.recovered ?? null,
      amountRecovered: opportunity.amountRecovered ?? 0,
    },
  };
}

function summarizeTrail(trail) {
  if (!trail.optimizer.selected) {
    return `Not selected — capacity/ranking cutoff.`;
  }
  if (!trail.policy.allowed) {
    return `Selected but blocked by policy: ${trail.policy.reason}.`;
  }
  if (trail.action.chosen === 'DO_NOTHING') {
    return `No intervention — natural recovery probability (${trail.naturalRecoveryEstimate.probability}) already sufficient.`;
  }
  if (trail.action.chosen === 'ESCALATE') {
    return `Escalated for human review — high-value case.`;
  }
  const result = trail.outcome.recovered ? 'recovered' : 'not recovered';
  return `Intervened with ${trail.action.chosen} — ${result}.`;
}

function buildFullAuditReport(opportunities) {
  return opportunities.map((o) => {
    const trail = buildAuditTrail(o);
    return { ...trail, summary: summarizeTrail(trail) };
  });
}

module.exports = {
  buildAuditTrail,
  summarizeTrail,
  buildFullAuditReport,
};