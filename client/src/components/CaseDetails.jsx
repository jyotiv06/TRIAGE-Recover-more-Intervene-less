import { useEffect, useState } from 'react';
import {
  fetchCases,
  fetchCase,
  formatINR,
} from '../api';

export default function CaseDetails() {
  const [cases, setCases] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [detail, setDetail] = useState(null);

  const [loadingCases, setLoadingCases] = useState(true);
  const [loadingDetail, setLoadingDetail] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function loadCases() {
      try {
        setLoadingCases(true);
        setError(null);

        const list = await fetchCases();

        if (!mounted) return;

        const normalizedList = Array.isArray(list)
          ? list
          : [];

        setCases(normalizedList);

        if (normalizedList.length > 0) {
          setSelectedId(normalizedList[0].id);
        }
      } catch (err) {
        if (!mounted) return;
        setError(err.message || 'Failed to load cases');
      } finally {
        if (mounted) {
          setLoadingCases(false);
        }
      }
    }

    loadCases();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!selectedId) {
      setDetail(null);
      return;
    }

    let mounted = true;

    async function loadCase() {
      try {
        setLoadingDetail(true);
        setError(null);
        setDetail(null);

        const result = await fetchCase(selectedId);

        if (!mounted) return;

        setDetail(result);
      } catch (err) {
        if (!mounted) return;

        setError(
          err.message || 'Failed to load case details'
        );
      } finally {
        if (mounted) {
          setLoadingDetail(false);
        }
      }
    }

    loadCase();

    return () => {
      mounted = false;
    };
  }, [selectedId]);

  if (error && cases.length === 0) {
    return (
      <div className="error-state">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="case-layout">

      {/* ================= CASE LIST ================= */}
      <div className="triage-card case-list">

        <div className="triage-card-header">
          <h3 className="triage-card-title">
            Cases
          </h3>

          <div className="triage-card-subtitle">
            {loadingCases
              ? 'Loading recovery opportunities...'
              : `${cases.length} recovery opportunities`}
          </div>
        </div>

        {loadingCases ? (
          <div className="loading-state">
            Loading cases...
          </div>
        ) : cases.length === 0 ? (
          <div className="loading-state">
            No recovery cases available.
          </div>
        ) : (
          cases.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`case-item ${
                c.id === selectedId ? 'selected' : ''
              }`}
              onClick={() => setSelectedId(c.id)}
            >
              <div className="case-amount">
                {formatINR(c.amount)}
              </div>

              <div className="case-reason">
                {c.failureReason || 'UNKNOWN'}
                {' — '}

                {c.action ||
                  (c.selectedForIntervention
                    ? 'SELECTED'
                    : 'NOT SELECTED')}
              </div>
            </button>
          ))
        )}
      </div>

      {/* ================= CASE DETAILS ================= */}
      <div className="case-detail">

        {loadingDetail ? (
          <div className="loading-state">
            Loading case analysis...
          </div>
        ) : !detail ? (
          <div className="loading-state">
            Select a case to view its recovery analysis.
          </div>
        ) : (
          <>
            {/* Summary */}
            {detail.summary && (
              <div className="detail-summary">
                {detail.summary}
              </div>
            )}

            {/* Payment Event */}
            <Stage
              title="Payment Event"
              data={detail.event}
            />

            {/* AI Diagnosis */}
            <Stage
              title="AI Diagnosis"
              data={detail.diagnosis}
            />

            {/* Recovery Economics */}
            <Stage
              title="Recovery Economics"
              data={{
                naturalRecovery:
                  detail.naturalRecoveryEstimate,

                interventionRecovery:
                  detail.interventionEstimate,
              }}
            />

            {/* Incremental Value */}
            <Stage
              title="Incremental Value"
              data={detail.incrementalValue}
            />

            {/* Portfolio Optimizer */}
            <Stage
              title="Portfolio Optimizer"
              data={detail.optimizer}
            />

            {/* Policy Decision */}
            <Stage
              title="Policy Decision"
              data={detail.policy}
            />

            {/* Action */}
            <Stage
              title="Action"
              data={detail.action}
            />

            {/* Outcome */}
            <Stage
              title="Outcome"
              data={detail.outcome}
            />
          </>
        )}
      </div>

      {/* Error while loading selected case */}
      {error && cases.length > 0 && (
        <div className="error-state">
          Error: {error}
        </div>
      )}
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