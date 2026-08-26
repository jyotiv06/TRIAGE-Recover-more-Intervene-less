import { useEffect, useState } from 'react';
import { fetchBaselineVsRevive, formatINR } from '../api';

export default function BaselineVsRevive() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBaselineVsRevive()
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  if (error) {
    return <div style={{ color: '#f87171' }}>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const row = (label, baseline, triage, highlight) => (
    <tr style={{ borderBottom: '1px solid #222' }}>
      <td style={{ padding: 10, color: '#999' }}>
        {label}
      </td>

      <td style={{ padding: 10 }}>
        {baseline}
      </td>

      <td
        style={{
          padding: 10,
          color: highlight ? '#4ade80' : '#fff',
          fontWeight: highlight ? 700 : 400,
        }}
      >
        {triage}
      </td>
    </tr>
  );

  return (
    <div>
      <h2>Baseline vs Triage</h2><br></br>

      <table
        style={{
          width: '100%',
          maxWidth: 600,
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr
            style={{
              borderBottom: '1px solid #333',
              textAlign: 'left',
            }}
          >
            <th style={{ padding: 10 }}></th>

            <th style={{ padding: 10 }}>
              Baseline (biggest payments)
            </th>

            <th style={{ padding: 10 }}>
              Triage
            </th>
          </tr>
        </thead>

        <tbody>
          {row(
            'Expected Recovery',
            formatINR(data.baseline.recovered),
            formatINR(data.triage.recovered),
            true
          )}

          {row(
            'Incremental',
            formatINR(data.baseline.incremental),
            formatINR(data.triage.incremental),
            true
          )}

          {row(
            'Interventions',
            data.baseline.interventions,
            data.triage.interventions
          )}
        </tbody>
      </table>
    </div>
  );
}