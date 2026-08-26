import { useEffect, useState } from 'react';
import { fetchSummary, formatINR } from '../api';

function StatCard({ label, value, highlight }) {
  return (
    <div
      style={{
        border: '1px solid #333',
        borderRadius: 8,
        padding: '20px',
        flex: '1 1 200px',
        background: highlight ? '#1a2e1a' : '#1a1a1a',
      }}
    >
      <div style={{ fontSize: 13, color: '#999', marginBottom: 8 }}>
        {label}
      </div>

      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: highlight ? '#4ade80' : '#fff',
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default function CommandCenter() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSummary()
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  if (error) {
    return <div style={{ color: '#f87171' }}>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 style={{ marginBottom: 20 }}>Command Center</h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <StatCard
          label="Revenue at Risk"
          value={formatINR(data.revenueAtRisk)}
        />

        <StatCard
          label="Natural Recovery"
          value={formatINR(data.naturalRecovery)}
        />

        <StatCard
          label="Triage Recovery"
          value={formatINR(data.triageRecovery)}
          highlight
        />

        <StatCard
          label="Incremental Revenue"
          value={formatINR(data.incrementalRevenue)}
          highlight
        />

        <StatCard
          label="Interventions Used"
          value={data.interventionsUsed}
        />
      </div>

      <div
        style={{
          marginTop: 16,
          color: '#666',
          fontSize: 13,
        }}
      >
        {data.totalOpportunities} total opportunities evaluated
      </div>
    </div>
  );
}