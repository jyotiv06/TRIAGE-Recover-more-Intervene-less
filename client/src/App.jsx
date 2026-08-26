import { useState } from 'react';
import CommandCenter from './components/CommandCenter';
import RecoveryPortfolio from './components/RecoveryPortfolio';
import CaseDetails from './components/CaseDetails';
import BaselineVsTriage from './components/BaselineVsTriage';
import './App.css';

const TABS = [
  { id: 'command', label: 'Command Center', component: CommandCenter },
  { id: 'portfolio', label: 'Recovery Portfolio', component: RecoveryPortfolio },
  { id: 'cases', label: 'Case Details', component: CaseDetails },
  { id: 'baseline', label: 'Baseline vs Triage', component: BaselineVsTriage },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('command');

  const Active = TABS.find((t) => t.id === activeTab).component;

  return (
    <div className="app-shell">

      <header className="app-header">
        <div className="brand">
          <div className="brand-mark">T</div>

          <div>
            <div className="brand-name">TRIAGE</div>
            <div className="brand-subtitle">
              Recover More - Intervene Less
            </div>
          </div>
        </div>

        <div className="system-status">
          <span className="status-dot" />
          System Operational
        </div>
      </header>

      <nav className="nav-bar">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`nav-button ${
              activeTab === tab.id ? 'active' : ''
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="main-content">
        <Active />
      </main>

    </div>
  );
}