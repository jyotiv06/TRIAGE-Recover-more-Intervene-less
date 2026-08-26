import { useEffect, useState } from 'react';
import { fetchSummary, formatINR } from '../api';

function StatCard({ label, value, highlight, meta }) {
  return (
    <div className={`card kpi-card ${highlight ? 'highlight' : ''}`}>
      <div className="kpi-label">{label}</div>

      <div className="kpi-value">
        {value}
      </div>

      {meta && (
        <div className="kpi-meta">
          {meta}
        </div>
      )}
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
      <div className="page-header">
        <h2 className="page-title">
          Command Center
        </h2>

        <p className="page-description">
          Recovery intelligence across the payment portfolio
        </p>
      </div>

      <div className="kpi-grid">

        <StatCard
          label="Revenue at Risk"
          value={formatINR(data.revenueAtRisk)}
          meta={`${data.totalOpportunities} payment opportunities`}
        />

        <StatCard
          label="Natural Recovery"
          value={formatINR(data.naturalRecovery)}
          meta="Expected without intervention"
        />

        <StatCard
          label="Triage Recovery"
          value={formatINR(data.triageRecovery)}
          highlight
          meta="Expected portfolio recovery"
        />

        <StatCard
          label="Incremental Revenue"
          value={formatINR(data.incrementalRevenue)}
          highlight
          meta="Value created by intervention"
        />

      </div>

      <div className="card section">
        <div className="section-title">
          Intervention Capacity
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 10,
            marginTop: 12,
          }}
        >
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {data.interventionsUsed}
          </span>

          <span
            style={{
              color: 'var(--text-muted)',
              fontSize: 13,
            }}
          >
            interventions executed
          </span>
        </div>

        <div
          style={{
            marginTop: 14,
            height: 5,
            background: '#20252a',
            borderRadius: 10,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${Math.min(
                (data.interventionsUsed / 50) * 100,
                100
              )}%`,
              height: '100%',
              background: 'var(--green)',
            }}
          />
        </div>

        <div
          style={{
            marginTop: 7,
            color: 'var(--text-muted)',
            fontSize: 11,
          }}
        >
          {data.interventionsUsed} of 50 maximum daily interventions
        </div>
      </div>
    </div>
  );
}