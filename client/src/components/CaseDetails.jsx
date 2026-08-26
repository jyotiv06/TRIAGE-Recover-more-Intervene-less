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
        if (list.length > 0) setSelectedId(list[0].id);
      })
      .catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    if (!selectedId) return;
    fetchCase(selectedId).then(setDetail).catch((e) => setError(e.message));
  }, [selectedId]);

  if (error) return <div style={{ color: '#f87171' }}>Error: {error}</div>;

  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{ width: 300, maxHeight: 600, overflowY: 'auto' }}>
        <h3>Cases</h3>
        {cases.map((c) => (
          <div
            key={c.id}
            onClick={() => setSelectedId(c.id)}
            style={{
              padding: 10,
              cursor: 'pointer',
              background: c.id === selectedId ? '#2a2a2a' : 'transparent',
              borderBottom: '1px solid #222',
            }}
          >
            <div>{formatINR(c.amount)}</div>
            <div style={{ fontSize: 12, color: '#999' }}>
              {c.failureReason} — {c.selectedForIntervention ? c.action ?? 'selected' : 'not selected'}
            </div>
          </div>
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <h3>Case Details</h3>
        {!detail ? (
          <div>Select a case</div>
        ) : (
          <div>
            <p style={{ fontSize: 16, marginBottom: 16 }}>{detail.summary}</p>
            <CaseSection
              title="Payment Event"
              rows={[
                ['Failure reason', detail.event.failureReason],
                ['Amount', formatINR(detail.event.amount)],
                ['Attempt count', detail.event.attemptCount],
                ['Hours since failure', detail.event.hoursSinceFailure],
              ]}
            />

            <CaseSection
              title="AI Diagnosis"
              rows={[
                ['Diagnosis', detail.diagnosis.diagnosis],
                ['Reasoning', detail.diagnosis.reasoning],
                ['Confidence', formatProbability(detail.diagnosis.confidence)],
              ]}
            />

            <CaseSection
              title="Recovery Economics"
              rows={[
                ['Natural recovery', formatProbability(detail.naturalRecoveryEstimate.probability)],
                ['Recovery with intervention', formatProbability(detail.interventionEstimate.probability)],
                ['Incremental lift', formatProbability(detail.incrementalValue.lift)],
                ['Expected incremental revenue', formatINR(detail.incrementalValue.expectedIncrementalRevenue)],
              ]}
            />

            <CaseSection
              title="Portfolio Decision"
              rows={[
                ['Selected', detail.optimizer.selected ? 'YES' : 'NO'],
                ['Reason', detail.optimizer.reason],
              ]}
            />

            <CaseSection
              title="Policy Decision"
              rows={[
                ['Allowed', detail.policy.allowed ? 'YES' : 'NO'],
                ['Reason', detail.policy.reason],
                ['Escalation', detail.policy.escalate ? 'REQUIRED' : 'NO'],
              ]}
            />

            <CaseSection
              title="Recovery Action"
              rows={[
                ['Action', detail.action.chosen || 'NONE'],
                ['Intervention used', detail.action.interventionUsed ? 'YES' : 'NO'],
              ]}
            />

            <CaseSection
              title="Outcome"
              rows={[
                ['Recovered', detail.outcome.recovered === null
                  ? 'PENDING'
                  : detail.outcome.recovered ? 'YES' : 'NO'],
                ['Amount recovered', formatINR(detail.outcome.amountRecovered)],
              ]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function CaseSection({ title, rows }) {
  return (
    <div
      style={{
        marginBottom: 14,
        padding: 16,
        border: '1px solid #222',
        borderRadius: 8,
        background: '#111',
      }}
    >
      <div
        style={{
          fontSize: 13,
          color: '#999',
          marginBottom: 12,
          fontWeight: 600,
        }}
      >
        {title}
      </div>

      {rows.map(([label, value]) => (
        <div
          key={label}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 30,
            padding: '8px 0',
            borderBottom: '1px solid #1d1d1d',
          }}
        >
          <span style={{ color: '#888' }}>{label}</span>

          <span
            style={{
              color: '#eee',
              textAlign: 'right',
              maxWidth: '65%',
            }}
          >
            {value ?? 'N/A'}
          </span>
        </div>
      ))}
    </div>
  );
}

function formatProbability(value) {
  if (value === null || value === undefined) return 'N/A';
  return `${(Number(value) * 100).toFixed(1)}%`;
}