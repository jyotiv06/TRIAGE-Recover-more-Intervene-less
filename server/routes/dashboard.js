const express = require('express');
const { PrismaClient } = require('../prisma/generated/client');
const { buildAuditTrail, summarizeTrail } = require('../services/auditTrail');

const router = express.Router();
const prisma = new PrismaClient();

function toNumbers(o) {
  return {
    ...o,
    amount: Number(o.amount),
    naturalRecoveryProbability: Number(o.naturalRecoveryProbability),
    aiRecoveryWithInterventionProbability: Number(o.aiRecoveryWithInterventionProbability),
    incrementalLift: Number(o.incrementalLift),
    expectedIncrementalRevenue: Number(o.expectedIncrementalRevenue),
    amountRecovered: o.amountRecovered != null ? Number(o.amountRecovered) : 0,
  };
}

router.get('/summary', async (req, res) => {
  try {
    const raw = await prisma.opportunity.findMany();
    const all = raw.map(toNumbers);

    const revenueAtRisk = all.reduce(
      (sum, o) => sum + o.amount,
      0
    );

    const naturalRecovery = all.reduce(
      (sum, o) =>
        sum + o.amount * o.naturalRecoveryProbability,
      0
    );

    const actedOn = all.filter(
      (o) =>
        o.selectedForIntervention &&
        o.policyAllowed &&
        o.interventionUsed
    );

    const incrementalRevenue = actedOn.reduce(
      (sum, o) => sum + o.expectedIncrementalRevenue,
      0
    );

    const triageRecovery =
      naturalRecovery + incrementalRevenue;

    const interventionsUsed = actedOn.length;

    res.json({
      totalOpportunities: all.length,
      revenueAtRisk,
      naturalRecovery,
      triageRecovery,
      incrementalRevenue,
      interventionsUsed,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Failed to compute summary',
    });
  }
});

router.get('/portfolio', async (req, res) => {
  try {
    const raw = await prisma.opportunity.findMany();
    const all = raw.map(toNumbers);
    const selected = all.filter((o) => o.selectedForIntervention);
    const rejected = all.filter((o) => !o.selectedForIntervention);

    res.json({
      totalOpportunities: all.length,
      selectedCount: selected.length,
      selected: selected
        .sort((a, b) => b.expectedIncrementalRevenue - a.expectedIncrementalRevenue)
        .map((o) => ({
          id: o.id,
          amount: o.amount,
          expectedIncrementalRevenue: o.expectedIncrementalRevenue,
          action: o.action,
          policyAllowed: o.policyAllowed,
        })),
      rejectedSample: rejected
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 10)
        .map((o) => ({
          id: o.id,
          amount: o.amount,
          expectedIncrementalRevenue: o.expectedIncrementalRevenue,
          selectionReason: o.selectionReason,
        })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load portfolio' });
  }
});

router.get('/case/:id', async (req, res) => {
  try {
    const raw = await prisma.opportunity.findUnique({ where: { id: req.params.id } });
    if (!raw) return res.status(404).json({ error: 'Case not found' });

    const o = toNumbers(raw);
    const trail = buildAuditTrail({
      ...o,
      interventionEstimate: o.aiRecoveryWithInterventionProbability, 
    });
    const fullTrail = buildAuditTrail(o);
    res.json({ ...fullTrail, summary: summarizeTrail(fullTrail) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load case' });
  }
});

router.get('/cases', async (req, res) => {
  try {
    const raw = await prisma.opportunity.findMany({
      select: {
        id: true,
        amount: true,
        failureReason: true,
        selectedForIntervention: true,
        action: true,
        expectedIncrementalRevenue: true,
      },
      orderBy: { expectedIncrementalRevenue: 'desc' },
    });
    res.json(raw.map((o) => ({ ...o, amount: Number(o.amount), expectedIncrementalRevenue: Number(o.expectedIncrementalRevenue) })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load cases' });
  }
});

router.get('/baseline-vs-revive', async (req, res) => {
  try {
    const raw = await prisma.opportunity.findMany();
    const all = raw.map(toNumbers);
    const CAPACITY = 50;

    const baselineSelected = [...all]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, CAPACITY);

    const baselineIncremental = baselineSelected.reduce(
      (sum, o) => sum + o.expectedIncrementalRevenue,
      0
    );

    const baselineNaturalRecovery = all.reduce(
      (sum, o) =>
        sum + o.amount * o.naturalRecoveryProbability,
      0
    );

    const baselineRecovered =
      baselineNaturalRecovery + baselineIncremental;

    const triageSelected = all.filter(
      (o) => o.selectedForIntervention
    );

    const triageActedOn = triageSelected.filter(
      (o) => o.policyAllowed && o.interventionUsed
    );

    const triageIncremental = triageActedOn.reduce(
      (sum, o) => sum + o.expectedIncrementalRevenue,
      0
    );

    const triageNaturalRecovery = all.reduce(
      (sum, o) =>
        sum + o.amount * o.naturalRecoveryProbability,
      0
    );

const triageRecovered =
  triageNaturalRecovery + triageIncremental;

    res.json({
      capacity: CAPACITY,

      baseline: {
        recovered: baselineRecovered,
        incremental: baselineIncremental,
        interventions: CAPACITY,
      },

      triage: {
        recovered: triageRecovered,
        incremental: triageIncremental,
        interventions: triageActedOn.length,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to compute comparison' });
  }
});

module.exports = router;