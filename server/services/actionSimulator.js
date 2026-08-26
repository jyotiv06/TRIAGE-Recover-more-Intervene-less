const ACTIONS = {
  RETRY: 'RETRY',
  PAYMENT_LINK: 'PAYMENT_LINK',
  REMINDER: 'REMINDER',
  DO_NOTHING: 'DO_NOTHING',
  ESCALATE: 'ESCALATE',
};

function chooseAction(opportunity) {
  if (!opportunity.policyAllowed) {
    return ACTIONS.DO_NOTHING;
  }

  if (opportunity.policyEscalate) {
    return ACTIONS.ESCALATE;
  }

  if (opportunity.expectedIncrementalRevenue <= 0) {
    return ACTIONS.DO_NOTHING;
  }

    switch (opportunity.failureReason) {
        case 'INSUFFICIENT_FUNDS':
            return ACTIONS.REMINDER; 
        case 'EXPIRED_CARD':
            return ACTIONS.PAYMENT_LINK; 
        case 'BANK_DECLINE':
        case 'NETWORK_ERROR':
            return ACTIONS.RETRY;
        case 'OTHER':
            return ACTIONS.PAYMENT_LINK; 
        default:
            return ACTIONS.PAYMENT_LINK;
    }
}

function simulateOutcome(opportunity, action) {
  if (action === ACTIONS.DO_NOTHING) {
    const recovered = Math.random() < (opportunity.naturalRecoveryProbability ?? 0);
    return {
      action,
      recovered,
      amountRecovered: recovered ? opportunity.amount : 0,
      interventionUsed: false,
    };
  }

  if (action === ACTIONS.ESCALATE) {
    return {
      action,
      recovered: null,
      amountRecovered: 0,
      interventionUsed: false,
    };
  }

  const recovered =
    Math.random() < (opportunity.recoveryWithInterventionProbability ?? 0);
  return {
    action,
    recovered,
    amountRecovered: recovered ? opportunity.amount : 0,
    interventionUsed: true,
  };
}

function simulateOpportunity(opportunity) {
  const action = chooseAction(opportunity);
  const outcome = simulateOutcome(opportunity, action);
  return { ...opportunity, ...outcome };
}

function simulatePortfolio(opportunities) {
  const results = opportunities.map(simulateOpportunity);

  const recovered = results.filter((r) => r.recovered === true);
  const totalRecovered = recovered.reduce((sum, r) => sum + r.amountRecovered, 0);
  const interventionsUsed = results.filter((r) => r.interventionUsed).length;

  return {
    total: results.length,
    recoveredCount: recovered.length,
    totalRecovered,
    interventionsUsed,
    results,
  };
}

module.exports = {
  ACTIONS,
  chooseAction,
  simulateOutcome,
  simulateOpportunity,
  simulatePortfolio,
};