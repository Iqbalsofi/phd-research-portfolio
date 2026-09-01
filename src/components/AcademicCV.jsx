import React from 'react';
import { GraduationCap, Briefcase, BookOpen, Check } from 'lucide-react';
import { educationHistory, experienceHistory, selectedGraduateCoursework } from '../data/researchData';

export default function AcademicCV() {
  return (
    <section id="education-experience" style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-subtle)', background: 'rgba(15, 21, 33, 0.3)' }}>
      <div className="container">
        
        <div className="section-label">04 // Background & Credentials</div>
        <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '2.5rem' }}>
          Education & Professional Experience
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Education Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <GraduationCap size={22} color="var(--accent-ginger-text)" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Education</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {educationHistory.map((edu, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.35rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{edu.institution}</h4>
                    <span style={{ fontSize: '0.825rem', color: 'var(--accent-ginger-text)', fontFamily: 'var(--font-mono)' }}>{edu.period}</span>
                  </div>
                  <div style={{ fontSize: '0.925rem', color: 'var(--text-muted)', fontWeight: 500, marginTop: '2px' }}>
                    {edu.degree}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                    {edu.location}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Graduate Coursework */}
            <div className="glass-card" style={{ padding: '1.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
                <BookOpen size={18} color="var(--accent-ginger-text)" />
                <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Selected Graduate Coursework</h4>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.5rem' }}>
                {selectedGraduateCoursework.map((course, cidx) => (
                  <div key={cidx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                    <Check size={12} color="var(--accent-ginger-text)" style={{ flexShrink: 0 }} />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <Briefcase size={22} color="var(--accent-ginger-text)" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>Professional Experience</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {experienceHistory.map((exp, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '1.35rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{exp.company}</h4>
                    <span style={{ fontSize: '0.825rem', color: 'var(--accent-ginger-text)', fontFamily: 'var(--font-mono)' }}>{exp.period}</span>
                  </div>
                  <div style={{ fontSize: '0.925rem', color: 'var(--text-muted)', fontWeight: 600, marginTop: '2px', marginBottom: '0.75rem' }}>
                    {exp.role}
                  </div>
                  <ul style={{ paddingLeft: '1.15rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    {exp.bullets.map((b, bidx) => (
                      <li key={bidx} style={{ lineHeight: 1.5 }}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
