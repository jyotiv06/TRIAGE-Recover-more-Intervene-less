import { useState } from 'react';
import CommandCenter from './components/CommandCenter';
import RecoveryPortfolio from './components/RecoveryPortfolio';
import CaseDetails from './components/CaseDetails';
import BaselineVsTriage from './components/BaselineVsTriage';

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
    <div style={{ minHeight: '100vh', background: '#0f0f0f', color: '#fff', fontFamily: 'sans-serif' }}>
      <div style={{ borderBottom: '1px solid #222', padding: '16px 24px' }}>
        <h1 style={{ margin: 0, fontSize: 20 }}>TRIAGE — Recover More - Intervene Less</h1>
      </div>
      <div style={{ display: 'flex', borderBottom: '1px solid #222' }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              padding: '12px 20px',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === t.id ? '2px solid #4ade80' : '2px solid transparent',
              color: activeTab === t.id ? '#fff' : '#999',
              cursor: 'pointer',
              fontSize: 14,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div style={{ padding: 24 }}>
        <Active />
      </div>
    </div>
  );
}