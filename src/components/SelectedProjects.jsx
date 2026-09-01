import React from 'react';
import { Database, Disc, Layers } from 'lucide-react';
import { selectedProjects } from '../data/researchData';

export default function SelectedProjects() {
  const getIcon = (index) => {
    const props = { size: 22, color: 'var(--accent-ginger-text)' };
    switch (index % 3) {
      case 0: return <Database {...props} />;
      case 1: return <Disc {...props} />;
      case 2: return <Layers {...props} />;
      default: return <Database {...props} />;
    }
  };

  return (
    <section id="projects" style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        <div className="section-label">03 // Selected Projects</div>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '0.5rem' }}>
          Machine Learning & Data Pipelines
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '680px' }}>
          Reproducible machine learning pipelines, generative audio models, and coursework experiments.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {selectedProjects.map((project, idx) => (
            <div key={project.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'var(--accent-ginger-subtle)',
                    border: '1px solid var(--accent-ginger-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getIcon(idx)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{project.title}</h3>
                    <div style={{ fontSize: '0.775rem', color: 'var(--accent-ginger-text)', fontFamily: 'var(--font-mono)' }}>
                      {project.focus}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {project.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                {project.tech.map((t, tidx) => (
                  <span key={tidx} style={{
                    fontSize: '0.75rem',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
