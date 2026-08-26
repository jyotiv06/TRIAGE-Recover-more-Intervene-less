function buildAuditTrail(opportunity) {
  const diagnosis =
    opportunity.diagnosis ||
    getFallbackDiagnosis(opportunity.failureReason);

  const reasoning =
    opportunity.diagnosisReasoning ||
    getFallbackReasoning(opportunity.failureReason);

  return {
    id: opportunity.id,

    event: {
      failureReason: opportunity.failureReason,
      amount: opportunity.amount,
      attemptCount: opportunity.attemptCount ?? null,
      hoursSinceFailure: opportunity.hoursSinceFailure ?? null,
    },

    diagnosis: {
      diagnosis,
      reasoning,
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

function getFallbackDiagnosis(reason) {
  switch (reason) {
    case 'EXPIRED_CARD':
      return 'Payment method expired';

    case 'INSUFFICIENT_FUNDS':
      return 'Insufficient customer balance';

    case 'BANK_DECLINE':
      return 'Issuer declined the payment';

    case 'NETWORK_ERROR':
      return 'Transient payment network failure';

    case 'OTHER':
      return 'Unclassified payment failure';

    default:
      return 'Payment failure detected';
  }
}

function summarizeTrail(trail) {
  if (!trail.optimizer.selected) {
    return 'Not selected — capacity/ranking cutoff.';
  }

  if (!trail.policy.allowed) {
    return `Selected but blocked by policy: ${trail.policy.reason}.`;
  }

  if (trail.action.chosen === 'DO_NOTHING') {
    return `No intervention — natural recovery probability (${trail.naturalRecoveryEstimate.probability}) already sufficient.`;
  }

  if (trail.action.chosen === 'ESCALATE') {
    return 'Escalated for human review — high-value case.';
  }

  const result = trail.outcome.recovered
    ? 'recovered'
    : 'not recovered';

  return `Intervened with ${trail.action.chosen} — ${result}.`;
}

function buildFullAuditReport(opportunities) {
  return opportunities.map((o) => {
    const trail = buildAuditTrail(o);
    return {
      ...trail,
      summary: summarizeTrail(trail),
    };
  });
}

function getFallbackReasoning(reason) {
  switch (reason) {
    case 'EXPIRED_CARD':
      return 'The payment method is expired and is unlikely to succeed without a new payment method.';

    case 'INSUFFICIENT_FUNDS':
      return 'The payment may succeed later if sufficient funds become available.';

    case 'BANK_DECLINE':
      return 'The issuing bank declined the payment and another attempt may or may not succeed.';

    case 'NETWORK_ERROR':
      return 'A transient connectivity failure may resolve without customer intervention.';

    case 'OTHER':
      return 'The available payment signals do not identify a more specific failure cause.';

    default:
      return 'The payment was identified as requiring recovery analysis.';
  }
}

module.exports = {
  buildAuditTrail,
  summarizeTrail,
  buildFullAuditReport,
};