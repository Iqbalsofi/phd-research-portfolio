import React from 'react';
import { Briefcase, Calendar, MapPin, School, FileText, CheckCircle2 } from 'lucide-react';
import { experienceTimeline, groupedSkills, personalInfo } from '../data/researchData';

export default function AcademicCV({ onOpenCV }) {
  return (
    <section id="experience" style={{ padding: '4.5rem 0 3.5rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="subtle-badge" style={{ marginBottom: '0.5rem' }}>
            <Briefcase size={14} /> Background & Technical Capabilities
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>
            Experience, Education & Skills
          </h2>
        </div>

        {/* Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Column 1: Professional Experience */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
              <School size={18} color="var(--accent-cyan)" /> Experience Timeline
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {experienceTimeline.map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.25rem 1.5rem', borderLeft: idx === 0 ? '4px solid var(--accent-cyan)' : '1px solid var(--border-subtle)' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-cyan)', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                      {item.type}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} /> {item.period}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', margin: '4px 0 2px' }}>
                    {item.role}
                  </h4>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <strong style={{ color: '#e2e8f0' }}>{item.org}</strong> • <MapPin size={12} /> {item.location}
                  </div>

                  <ul style={{ paddingLeft: '1.1rem', margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {item.bullets.map((bullet, i) => (
                      <li key={i} style={{ lineHeight: 1.5 }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Grouped Skills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Education Card */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                <School size={18} color="var(--accent-purple)" /> Higher Education
              </h3>

              <div style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong style={{ color: '#fff', fontSize: '1.05rem' }}>M.S. in Data Science</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>GPA 3.45</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '2px 0 4px' }}>
                  Rowan University, Glassboro, NJ (Aug 2024 – Jul 2026)
                </div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-dim)' }}>
                  Graduate Research Focus: <em>Semantic Communication & 3D Point Clouds</em>
                </div>
              </div>

              <div>
                <strong style={{ color: '#fff', fontSize: '0.975rem' }}>B.Tech in Computer Science & Engineering</strong>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Amity University, India (Aug 2017 – Aug 2021)
                </div>
              </div>
            </div>

            {/* Grouped Skills Card */}
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
                Grouped Technical Capabilities
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                <div>
                  <div style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Research & ML
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {groupedSkills.researchML.map((s, i) => (
                      <span key={i} style={skillPillStyle}>{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    ML Engineering
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {groupedSkills.mlEngineering.map((s, i) => (
                      <span key={i} style={skillPillStyle}>{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Data & Languages
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {groupedSkills.data.map((s, i) => (
                      <span key={i} style={skillPillStyle}>{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.775rem', fontWeight: 700, color: 'var(--text-dim)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Platforms & Tools
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {groupedSkills.tools.map((s, i) => (
                      <span key={i} style={skillPillStyle}>{s}</span>
                    ))}
                  </div>
                </div>

              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <button 
                  onClick={onOpenCV}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <FileText size={16} /> View Résumé / CV
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

const skillPillStyle = {
  fontSize: '0.775rem',
  padding: '4px 10px',
  borderRadius: '4px',
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  color: '#e2e8f0'
};
