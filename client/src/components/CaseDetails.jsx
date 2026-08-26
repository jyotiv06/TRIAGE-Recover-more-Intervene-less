import { useEffect, useState } from 'react';
import { fetchCases, fetchCase, formatINR } from '../api';

export default function CaseDetails() {
  const [cases, setCases] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCases()
      .then((list) => {
        setCases(list);

        if (list.length > 0) {
          setSelectedId(list[0].id);
        }
      })
      .catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    if (!selectedId) return;

    setDetail(null);

    fetchCase(selectedId)
      .then(setDetail)
      .catch((e) => setError(e.message));
  }, [selectedId]);

  if (error) {
    return <div className="error-state">Error: {error}</div>;
  }

  return (
    <div className="case-layout">
      <div className="triage-card case-list">
        <div className="triage-card-header">
          <h3 className="triage-card-title">
            Cases
          </h3>

          <div className="triage-card-subtitle">
            {cases.length} recovery opportunities
          </div>
        </div>

        {cases.map((c) => (
          <button
            key={c.id}
            className={`case-item ${
              c.id === selectedId ? 'selected' : ''
            }`}
            onClick={() => setSelectedId(c.id)}
          >
            <div className="case-amount">
              {formatINR(c.amount)}
            </div>

            <div className="case-reason">
              {c.failureReason} —{' '}
              {c.selectedForIntervention
                ? c.action || 'SELECTED'
                : 'NOT SELECTED'}
            </div>
          </button>
        ))}
      </div>

      <div className="case-detail">
        {!detail ? (
          <div className="loading-state">
            Loading case analysis...
          </div>
        ) : (
          <>
            <div className="detail-summary">
              {detail.summary}
            </div>

            <Stage
              title="Payment Event"
              data={detail.event}
            />

            <Stage
              title="AI Diagnosis"
              data={detail.diagnosis}
            />

            <Stage
              title="Recovery Economics"
              data={{
                naturalRecovery:
                  detail.naturalRecoveryEstimate,
                interventionRecovery:
                  detail.interventionEstimate,
              }}
            />

            <Stage
              title="Incremental Value"
              data={detail.incrementalValue}
            />

            <Stage
              title="Portfolio Optimizer"
              data={detail.optimizer}
            />

            <Stage
              title="Policy Decision"
              data={detail.policy}
            />

            <Stage
              title="Action"
              data={detail.action}
            />

            <Stage
              title="Outcome"
              data={detail.outcome}
            />
          </>
        )}
      </div>
    </div>
  );
}

function Stage({ title, data }) {
  return (
    <div className="detail-stage">
      <div className="detail-stage-title">
        {title}
      </div>

      <pre>
        {JSON.stringify(data ?? {}, null, 2)}
      </pre>
    </div>
  );
}