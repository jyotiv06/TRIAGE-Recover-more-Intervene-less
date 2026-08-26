import { useState } from 'react';

import CommandCenter from './components/CommandCenter';
import RecoveryPortfolio from './components/RecoveryPortfolio';
import CaseDetails from './components/CaseDetails';
import BaselineVsTriage from './components/BaselineVsTriage';

import './App.css';

const TABS = [
  {
    id: 'command',
    label: 'Command Center',
    icon: '⌂',
  },
  {
    id: 'portfolio',
    label: 'Recovery Portfolio',
    icon: '◇',
  },
  {
    id: 'cases',
    label: 'Case Explorer',
    icon: '⌕',
  },
  {
    id: 'baseline',
    label: 'Baseline vs Triage',
    icon: '⇄',
  },
];

const descriptions = {
  command: 'Revenue recovery intelligence at a glance.',
  portfolio: 'Every opportunity prioritized by recovery value.',
  cases: 'Trace each case from failure to resolution.',
  baseline: 'Measure what intelligent intervention is actually worth.',
};

function renderPage(tab) {
  switch (tab) {
    case 'command':
      return <CommandCenter />;

    case 'portfolio':
      return <RecoveryPortfolio />;

    case 'cases':
      return <CaseDetails />;

    case 'baseline':
      return <BaselineVsTriage />;

    default:
      return <CommandCenter />;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState('command');

  const activeTabInfo =
    TABS.find((tab) => tab.id === activeTab) || TABS[0];

  return (
    <div className="triage-app">

      {/* ================= SIDEBAR ================= */}

      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">
            ✦
          </div>

          <div>
            <div className="brand-name">
              TRIAGE
            </div>

            <div className="brand-subtitle">
              Recover More, Intervene Less
            </div>
          </div>
        </div>

        <div className="sidebar-section-title">
          RECOVERY ENGINE
        </div>

        <nav className="sidebar-nav">
          {TABS.map((tab) => {
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                className={`nav-item ${
                  active ? 'active' : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="nav-icon">
                  {tab.icon}
                </span>

                <span>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">

          <div className="ai-card">

            <div className="ai-card-title">
              <span className="live-dot" />
              AI DIAGNOSIS ACTIVE
            </div>

            <p>
              AI provides recovery intelligence while
              deterministic policy controls every intervention.
            </p>

          </div>

          <div className="engine-status">
            <span className="heartbeat">
              〰
            </span>

            Recovery engine operational
          </div>

        </div>

      </aside>

      {/* ================= MAIN ================= */}

      <main className="main-area">

        <header className="page-header">

          <div>

            <div className="eyebrow">
              TRIAGE / RECOVERY
            </div>

            <h1>
              {activeTabInfo.label}
            </h1>

            <p>
              {descriptions[activeTab]}
            </p>

          </div>

          <div className="live-badge">
            <span className="live-dot" />
            LIVE
          </div>

        </header>

        <section className="page-content">

          {renderPage(activeTab)}

        </section>

      </main>

    </div>
  );
}