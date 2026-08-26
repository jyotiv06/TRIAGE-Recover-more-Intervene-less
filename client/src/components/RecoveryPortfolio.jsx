import { useEffect, useState } from 'react';
import { fetchPortfolio, formatINR } from '../api';

function PolicyTag({ allowed }) {
  return (
    <span
      className={`tag ${
        allowed ? 'tag-stable' : 'tag-critical'
      }`}
    >
      {allowed ? 'ALLOWED' : 'BLOCKED'}
    </span>
  );
}

export default function RecoveryPortfolio() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPortfolio()
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  if (error) {
    return <div className="error-state">Error: {error}</div>;
  }

  if (!data) {
    return <div className="loading-state">Loading portfolio...</div>;
  }

  return (
    <div>
      <div className="triage-card">
        <div className="triage-card-header">
          <h3 className="triage-card-title">
            Recovery Portfolio
          </h3>

          <div className="triage-card-subtitle">
            {data.totalOpportunities} opportunities →{' '}
            {data.selectedCount} selected
          </div>
        </div>

        <div className="triage-table-wrapper">
          <table className="triage-table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Incremental Value</th>
                <th>Action</th>
                <th>Policy</th>
              </tr>
            </thead>

            <tbody>
              {data.selected.map((o) => (
                <tr key={o.id}>
                  <td className="money">
                    {formatINR(o.amount)}
                  </td>

                  <td className="green-value">
                    {formatINR(o.expectedIncrementalRevenue)}
                  </td>

                  <td>{o.action || '—'}</td>

                  <td>
                    <PolicyTag allowed={o.policyAllowed} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="triage-card"
        style={{ marginTop: 18 }}
      >
        <div className="triage-card-header">
          <h3 className="triage-card-title">
            Rejected Opportunities
          </h3>

          <div className="triage-card-subtitle">
            Highest-value rejected cases and why they were excluded
          </div>
        </div>

        <div className="triage-table-wrapper">
          <table className="triage-table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Incremental Value</th>
                <th>Reason</th>
              </tr>
            </thead>

            <tbody>
              {data.rejectedSample.map((o) => (
                <tr key={o.id}>
                  <td className="money">
                    {formatINR(o.amount)}
                  </td>

                  <td>
                    {formatINR(o.expectedIncrementalRevenue)}
                  </td>

                  <td>{o.selectionReason || 'Below threshold'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}