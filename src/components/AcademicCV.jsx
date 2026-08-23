import React from 'react';
import { Briefcase, Calendar, MapPin, School, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { experienceTimeline, technicalSkills, personalInfo } from '../data/researchData';

export default function AcademicCV({ onOpenCV }) {
  return (
    <section id="experience" style={{ padding: '4.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="subtle-badge" style={{ marginBottom: '0.75rem' }}>
            <Briefcase size={14} /> Professional & Research Trajectory
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>
            Academic Experience & <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            Combining rigorous 3D deep learning research at Rowan University with 3+ years of enterprise-scale data & software engineering at Accenture & DXC Technology.
          </p>
        </div>

        {/* Two Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          
          {/* Column 1: Experience Timeline */}
          <div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <School size={20} color="var(--accent-cyan)" /> Research & Engineering History
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
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

                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: '4px 0 2px' }}>
                    {item.role}
                  </h4>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <strong style={{ color: '#e2e8f0' }}>{item.org}</strong> • <MapPin size={12} /> {item.location}
                  </div>

                  <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
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

          {/* Column 2: Technical Skills Matrix & Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Education Card */}
            <div className="glass-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <School size={20} color="var(--accent-purple)" /> Higher Education
              </h3>

              <div style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong style={{ color: '#fff', fontSize: '1.05rem' }}>M.S. in Data Science</strong>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>GPA 3.45</span>
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '2px 0 6px' }}>
                  Rowan University, Glassboro, NJ (Aug 2024 – Jul 2026)
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  Thesis Research: <em>3D Point Cloud Reconstruction over Noisy Channels</em>
                </div>
              </div>

              <div>
                <strong style={{ color: '#fff', fontSize: '1rem' }}>B.Tech in Computer Science & Engineering</strong>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Amity University, India (Aug 2017 – Aug 2021)
                </div>
              </div>
            </div>

            {/* Skills Taxonomy Card */}
            <div className="glass-card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
                Technical Taxonomy
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Deep Learning & AI
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {technicalSkills.deepLearning.map((s, i) => (
                      <span key={i} style={skillPillStyle}>{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-emerald)', marginBottom: '6px', textTransform: 'uppercase' }}>
                    3D Vision & Geometry
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {technicalSkills.computerVision.map((s, i) => (
                      <span key={i} style={skillPillStyle}>{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-purple)', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Programming & Tools
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {technicalSkills.programming.map((s, i) => (
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
                  <FileText size={16} /> Open Full Academic CV Modal
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
  fontSize: '0.75rem',
  padding: '4px 10px',
  borderRadius: '4px',
  background: 'rgba(255, 255, 255, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  color: 'var(--text-muted)'
};
