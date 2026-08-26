const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  'http://localhost:4000';

async function request(path) {
  const response = await fetch(`${API_BASE}${path}`);

  if (!response.ok) {
    const body = await response.text();

    throw new Error(
      body || `Request failed: ${response.status}`
    );
  }

  return response.json();
}

export function fetchSummary() {
  return request('/api/dashboard/summary');
}

export function fetchPortfolio() {
  return request('/api/dashboard/portfolio');
}

export function fetchCases() {
  return request('/api/dashboard/cases');
}

export function fetchCase(id) {
  return request(
    `/api/dashboard/case/${encodeURIComponent(id)}`
  );
}

export function fetchBaselineVsRevive() {
  return request('/api/dashboard/baseline-vs-revive');
}

export function formatINR(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}