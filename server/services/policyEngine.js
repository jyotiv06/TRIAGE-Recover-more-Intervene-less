const DEFAULT_POLICY = {
  maxRetries: 3,
  dailyInterventionCapacity: 50,
  cooldownHours: 24,
  highValueThreshold: 100000, 
  minConfidence: 0.6,
};

function evaluatePolicy(opportunity, policy = DEFAULT_POLICY) {

  if (opportunity.currentStatus === 'CAPTURED') {
    return { allowed: false, reason: 'payment already captured' };
  }

  if (opportunity.currentStatus === 'RECOVERED') {
    return { allowed: false, reason: 'already recovered' };
  }

  if ((opportunity.attemptCount ?? 0) >= policy.maxRetries) {
    return { allowed: false, reason: `max retries (${policy.maxRetries}) exceeded` };
  }

  if (
    opportunity.lastAttemptAt &&
    hoursSince(opportunity.lastAttemptAt) < policy.cooldownHours
  ) {
    return {
      allowed: false,
      reason: `within cooldown window (${policy.cooldownHours}h)`,
    };
  }

  if ((opportunity.diagnosisConfidence ?? 1) < policy.minConfidence) {
    return {
      allowed: false,
      reason: `diagnosis confidence below threshold (${policy.minConfidence})`,
    };
  }

  if (opportunity.amount >= policy.highValueThreshold) {
    return {
      allowed: true,
      reason: 'high-value case — requires escalation, not auto-action',
      escalate: true,
    };
  }

  return { allowed: true, reason: 'passes all policy checks' };
}

function hoursSince(date) {
  return (Date.now() - new Date(date).getTime()) / (1000 * 60 * 60);
}

function evaluatePortfolio(selectedOpportunities, policy = DEFAULT_POLICY) {
  let approvedCount = 0;

  const evaluated = selectedOpportunities.map((opp) => {
    const decision = evaluatePolicy(opp, policy);
    if (decision.allowed && !decision.escalate) approvedCount++;
    return { ...opp, ...decision };
  });

  let withinCapacity = 0;
  const final = evaluated.map((opp) => {
    if (!opp.allowed) return opp;
    withinCapacity++;
    if (withinCapacity > policy.dailyInterventionCapacity) {
      return {
        ...opp,
        allowed: false,
        reason: `exceeds daily intervention capacity (${policy.dailyInterventionCapacity})`,
      };
    }
    return opp;
  });

  return {
    policy,
    total: final.length,
    approved: final.filter((o) => o.allowed).length,
    blocked: final.filter((o) => !o.allowed).length,
    escalated: final.filter((o) => o.escalate).length,
    results: final,
  };
}

module.exports = {
  evaluatePolicy,
  evaluatePortfolio,
  DEFAULT_POLICY,
};