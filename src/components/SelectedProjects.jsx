import React from 'react';
import { BookOpen, Code2 } from 'lucide-react';
import { selectedProjects } from '../data/researchData';

export default function SelectedProjects() {
  return (
    <section id="projects" style={{ padding: '3.5rem 0', background: 'rgba(10, 16, 29, 0.5)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="subtle-badge" style={{ marginBottom: '0.5rem' }}>
            <BookOpen size={14} /> Additional Projects
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>
            Selected Deep Learning Projects
          </h2>
        </div>

        {/* Selected Project Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {selectedProjects.map((proj) => (
            <div key={proj.id} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                  {proj.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                  <div>
                    <strong style={{ color: 'var(--accent-cyan)' }}>Problem: </strong>
                    <span style={{ color: '#cbd5e1' }}>{proj.problem}</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--accent-purple)' }}>Approach: </strong>
                    <span style={{ color: '#cbd5e1' }}>{proj.approach}</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--accent-emerald)' }}>Result: </strong>
                    <span style={{ color: '#cbd5e1' }}>{proj.result}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                {proj.tech.map((t, i) => (
                  <span key={i} style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-muted)' }}>
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
