import { useEffect, useState } from 'react';
import { fetchSummary, formatINR } from '../api';

function KpiCard({ label, value, description }) {
  return (
    <div className="kpi-card">
      <div className="kpi-label">{label}</div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-description">{description}</div>
    </div>
  );
}

function RecoveryMetric({ label, value, max }) {
  const percentage =
    max > 0 ? Math.min((value / max) * 100, 100) : 0;

  return (
    <div className="metric-row">
      <div className="metric-heading">
        <span>{label}</span>
        <span>{formatINR(value)}</span>
      </div>

      <div className="metric-track">
        <div
          className="metric-fill"
          style={{ width: `${percentage}%` }}
        />
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
    return <div className="error-state">Error: {error}</div>;
  }

  if (!data) {
    return <div className="loading-state">Loading recovery engine...</div>;
  }

  return (
    <div>
      <div className="kpi-grid">
        <KpiCard
          label="Revenue at Risk"
          value={formatINR(data.revenueAtRisk)}
          description={`${data.totalOpportunities} payment opportunities`}
        />

        <KpiCard
          label="Natural Recovery"
          value={formatINR(data.naturalRecovery)}
          description="Expected without intervention"
        />

        <KpiCard
          label="Triage Recovery"
          value={formatINR(data.triageRecovery)}
          description="Expected portfolio recovery"
        />

        <KpiCard
          label="Incremental Revenue"
          value={formatINR(data.incrementalRevenue)}
          description="Value created by intervention"
        />
      </div>

      <div className="recovery-grid">
        <div className="triage-card">
          <div className="triage-card-header">
            <h3 className="triage-card-title">
              Recovery Economics
            </h3>

            <div className="triage-card-subtitle">
              Natural recovery vs intervention-assisted recovery
            </div>
          </div>

          <div className="recovery-bars">
            <RecoveryMetric
              label="Natural recovery"
              value={data.naturalRecovery}
              max={data.revenueAtRisk}
            />

            <RecoveryMetric
              label="Triage recovery"
              value={data.triageRecovery}
              max={data.revenueAtRisk}
            />

            <RecoveryMetric
              label="Incremental revenue"
              value={data.incrementalRevenue}
              max={data.revenueAtRisk}
            />
          </div>
        </div>

        <div className="triage-card">
          <div className="triage-card-header">
            <h3 className="triage-card-title">
              Intervention Discipline
            </h3>

            <div className="triage-card-subtitle">
              The system intervenes only when policy permits.
            </div>
          </div>

          <div className="recovery-bars">
            <div className="metric-row">
              <div className="metric-heading">
                <span>Total opportunities</span>
                <span>{data.totalOpportunities}</span>
              </div>
            </div>

            <div className="metric-row">
              <div className="metric-heading">
                <span>Interventions used</span>
                <span>{data.interventionsUsed}</span>
              </div>

              <div className="metric-track">
                <div
                  className="metric-fill"
                  style={{
                    width: `${
                      data.totalOpportunities
                        ? (data.interventionsUsed /
                            data.totalOpportunities) *
                          100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

            <div className="metric-row">
              <div className="metric-heading">
                <span>Intervention rate</span>
                <span>
                  {data.totalOpportunities
                    ? (
                        (data.interventionsUsed /
                          data.totalOpportunities) *
                        100
                      ).toFixed(1)
                    : '0.0'}
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="triage-card">
        <div className="triage-card-header">
          <h3 className="triage-card-title">
            Recovery Engine Summary
          </h3>

          <div className="triage-card-subtitle">
            Current portfolio economics from the live database
          </div>
        </div>

        <div className="triage-table-wrapper">
          <table className="triage-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Interpretation</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Revenue at risk</td>
                <td className="money">
                  {formatINR(data.revenueAtRisk)}
                </td>
                <td>Gross payment value requiring recovery analysis</td>
              </tr>

              <tr>
                <td>Natural recovery</td>
                <td className="money">
                  {formatINR(data.naturalRecovery)}
                </td>
                <td>Expected recovery without intervention</td>
              </tr>

              <tr>
                <td>Triage recovery</td>
                <td className="green-value">
                  {formatINR(data.triageRecovery)}
                </td>
                <td>Expected recovery after intelligent intervention</td>
              </tr>

              <tr>
                <td>Incremental revenue</td>
                <td className="green-value">
                  {formatINR(data.incrementalRevenue)}
                </td>
                <td>Additional value attributable to intervention</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}