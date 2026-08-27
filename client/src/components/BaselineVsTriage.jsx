import { useEffect, useState } from 'react';
import {
  fetchBaselineVsTriage,
  formatINR,
} from '../api';

export default function BaselineVsTriage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBaselineVsTriage()
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  if (error) {
    return <div className="error-state">Error: {error}</div>;
  }

  if (!data) {
    return (
      <div className="loading-state">
        Loading comparison...
      </div>
    );
  }

  return (
    <div className="triage-card">
      <div className="triage-card-header">
        <h3 className="triage-card-title">
          Baseline vs Triage
        </h3>

        <div className="triage-card-subtitle">
          Both strategies evaluated on the same {data.totalOpportunities} opportunities
          with the same intervention capacity of {data.capacity}.
        </div>
      </div>

      <div className="triage-table-wrapper">
        <table className="comparison-table">
          <thead>
            <tr>
              <th></th>

              <th>
                Baseline — Biggest Payments
              </th>

              <th>
                Triage — Highest Incremental Value
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Expected Recovery</td>

              <td>
                {formatINR(data.baseline.expectedRecovery)}
              </td>

              <td className="triage-column">
                {formatINR(data.triage.expectedRecovery)}
              </td>
            </tr>

            <tr>
              <td>Incremental Revenue</td>

              <td>
                {formatINR(data.baseline.incrementalRevenue)}
              </td>

              <td className="triage-column">
                {formatINR(data.triage.incrementalRevenue)}
              </td>
            </tr>

            <tr>
              <td>Interventions</td>

              <td>
                {data.baseline.interventions}
              </td>

              <td className="triage-column">
                {data.triage.interventions}
              </td>
            </tr>

            <tr>
              <td>Incremental / Intervention</td>

              <td>
                {formatINR(
                  data.baseline.incrementalRevenuePerIntervention
                )}
              </td>

              <td className="triage-column">
                {formatINR(
                  data.triage.incrementalRevenuePerIntervention
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}