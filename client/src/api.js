const BASE = '/api/dashboard';

export async function fetchSummary() {
  const res = await fetch(`${BASE}/summary`);
  if (!res.ok) throw new Error('Failed to fetch summary');
  return res.json();
}

export async function fetchPortfolio() {
  const res = await fetch(`${BASE}/portfolio`);
  if (!res.ok) throw new Error('Failed to fetch portfolio');
  return res.json();
}

export async function fetchCases() {
  const res = await fetch(`${BASE}/cases`);
  if (!res.ok) throw new Error('Failed to fetch cases');
  return res.json();
}

export async function fetchCase(id) {
  const res = await fetch(`${BASE}/case/${id}`);
  if (!res.ok) throw new Error('Failed to fetch case');
  return res.json();
}

export async function fetchBaselineVsRevive() {
  const res = await fetch(`${BASE}/baseline-vs-revive`);
  if (!res.ok) throw new Error('Failed to fetch comparison');
  return res.json();
}

export function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}