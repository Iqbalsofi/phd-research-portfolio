import React from 'react';
import { Compass, Radio, Box, Brain, Activity } from 'lucide-react';
import { researchAtAGlance } from '../data/researchData';

export default function ResearchAtAGlance() {
  const icons = [<Radio size={20} color="var(--accent-cyan)" />, <Box size={20} color="var(--accent-purple)" />, <Brain size={20} color="var(--accent-emerald)" />, <Activity size={20} color="var(--accent-amber)" />];

  return (
    <section id="research-glance" style={{ padding: '3.5rem 0', background: 'rgba(10, 16, 29, 0.6)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="subtle-badge" style={{ marginBottom: '0.5rem' }}>
            <Compass size={14} /> Research Overview
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>
            {researchAtAGlance.title}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.35rem', maxWidth: '760px' }}>
            {researchAtAGlance.summary}
          </p>
        </div>

        {/* 4 Compact Themes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
          {researchAtAGlance.themes.map((theme, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.35rem', background: 'rgba(16, 24, 40, 0.7)' }}>
              <div style={{ marginBottom: '0.75rem' }}>{icons[idx]}</div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>
                {theme.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                {theme.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
