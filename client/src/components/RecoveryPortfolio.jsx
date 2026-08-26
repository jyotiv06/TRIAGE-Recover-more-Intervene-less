import { useEffect, useState } from 'react';
import { fetchPortfolio, formatINR } from '../api';

export default function RecoveryPortfolio() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolio().then(setData).catch((e) => setError(e.message));
  }, []);

  if (error) return <div style={{ color: '#f87171' }}>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Recovery Portfolio</h2>
      <p style={{ color: '#999', marginBottom: 20 }}>
        {data.totalOpportunities} opportunities → {data.selectedCount} selected
      </p>

      <h3>Selected ({data.selected.length})</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 30 }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #333', textAlign: 'left' }}>
            <th style={{ padding: 8 }}>Amount</th>
            <th style={{ padding: 8 }}>Incremental Value</th>
            <th style={{ padding: 8 }}>Action</th>
            <th style={{ padding: 8 }}>Policy Allowed</th>
          </tr>
        </thead>
        <tbody>
          {data.selected.map((o) => (
            <tr key={o.id} style={{ borderBottom: '1px solid #222' }}>
              <td style={{ padding: 8 }}>{formatINR(o.amount)}</td>
              <td style={{ padding: 8, color: '#4ade80' }}>
                {formatINR(o.expectedIncrementalRevenue)}
              </td>
              <td style={{ padding: 8 }}>{o.action ?? '—'}</td>
              <td style={{ padding: 8 }}>{o.policyAllowed ? '✅' : '❌'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Sample Rejected — highest amount, not selected</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #333', textAlign: 'left' }}>
            <th style={{ padding: 8 }}>Amount</th>
            <th style={{ padding: 8 }}>Incremental Value</th>
            <th style={{ padding: 8 }}>Reason</th>
          </tr>
        </thead>
        <tbody>
          {data.rejectedSample.map((o) => (
            <tr key={o.id} style={{ borderBottom: '1px solid #222' }}>
              <td style={{ padding: 8 }}>{formatINR(o.amount)}</td>
              <td style={{ padding: 8, color: '#f87171' }}>
                {formatINR(o.expectedIncrementalRevenue)}
              </td>
              <td style={{ padding: 8, color: '#999' }}>{o.selectionReason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}