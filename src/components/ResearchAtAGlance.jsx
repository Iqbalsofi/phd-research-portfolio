import React from 'react';
import { ShieldCheck, Sparkles, Radio, Box, Activity } from 'lucide-react';
import { researchInterests } from '../data/researchData';

export default function ResearchAtAGlance() {
  const getIcon = (index) => {
    const props = { size: 22, color: 'var(--accent-ginger-text)' };
    switch (index % 5) {
      case 0: return <ShieldCheck {...props} />;
      case 1: return <Sparkles {...props} />;
      case 2: return <Radio {...props} />;
      case 3: return <Box {...props} />;
      case 4: return <Activity {...props} />;
      default: return <ShieldCheck {...props} />;
    }
  };

  return (
    <section id="research-focus" style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div className="section-label">01 // Research Interests</div>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Areas of Research Focus
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '680px' }}>
          Key domains of investigation for PhD research in machine learning and trustworthy AI systems.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem'
        }}>
          {researchInterests.map((item, index) => (
            <div key={index} className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                background: 'var(--accent-ginger-subtle)',
                border: '1px solid var(--accent-ginger-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                {getIcon(index)}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
