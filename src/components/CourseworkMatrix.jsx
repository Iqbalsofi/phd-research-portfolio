import React, { useState } from 'react';
import { Award, GraduationCap, Search, CheckCircle, Sparkles, FileSpreadsheet } from 'lucide-react';
import { courseworkData, personalInfo } from '../data/researchData';

export default function CourseworkMatrix() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Research Focus', 'Core AI', 'Statistics', 'Systems', 'Analytics'];

  const filteredCourses = courseworkData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="coursework" style={{ padding: '4.5rem 0', background: 'rgba(10, 16, 29, 0.5)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', gap: '1rem' }}>
          <div>
            <div className="subtle-badge" style={{ marginBottom: '0.5rem' }}>
              <GraduationCap size={14} /> Rowan University Transcript Matrix
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>
              Graduate Coursework & <span className="gradient-text">Academic Performance</span>
            </h2>
          </div>

          {/* Academic Stats Box */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div className="glass-card" style={{ padding: '0.75rem 1.25rem', textAlign: 'center', borderLeft: '3px solid var(--accent-cyan)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>
                {personalInfo.gpa}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>M.S. Cumulative GPA</div>
            </div>
            <div className="glass-card" style={{ padding: '0.75rem 1.25rem', textAlign: 'center', borderLeft: '3px solid var(--accent-emerald)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-heading)' }}>
                31.0
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Completed Credits</div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Search Box */}
          <div style={{ position: 'relative', flex: '1', minWidth: '240px' }}>
            <Search size={16} color="var(--text-dim)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Search course title or code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px 8px 36px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(9, 13, 22, 0.8)',
                border: '1px solid var(--border-subtle)',
                color: '#fff',
                fontSize: '0.875rem'
              }}
            />
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: selectedCategory === cat ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  background: selectedCategory === cat ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                  color: selectedCategory === cat ? '#fff' : 'var(--text-muted)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Transcript Table */}
        <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'rgba(15, 23, 42, 0.9)', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-muted)' }}>
                  <th style={thStyle}>Course Code</th>
                  <th style={thStyle}>Course Title</th>
                  <th style={thStyle}>Term</th>
                  <th style={thStyle}>Category</th>
                  <th style={{ ...thStyle, textAlign: 'center' }}>Credits</th>
                  <th style={{ ...thStyle, textAlign: 'center' }}>Grade</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((c, idx) => {
                  const isIndependentStudy = c.code === 'CS 07695';
                  return (
                    <tr 
                      key={idx} 
                      style={{ 
                        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                        background: isIndependentStudy ? 'rgba(56, 189, 248, 0.06)' : 'transparent',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      <td style={{ ...tdStyle, fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                        {c.code}
                      </td>
                      <td style={{ ...tdStyle, color: '#fff', fontWeight: isIndependentStudy ? 700 : 500 }}>
                        {c.title}
                        {isIndependentStudy && (
                          <span style={{ marginLeft: '8px', fontSize: '0.7rem', background: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-emerald)', padding: '2px 6px', borderRadius: '4px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                            Research Focus
                          </span>
                        )}
                      </td>
                      <td style={{ ...tdStyle, color: 'var(--text-dim)' }}>
                        {c.term}
                      </td>
                      <td style={tdStyle}>
                        <span style={{ fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-muted)' }}>
                          {c.category}
                        </span>
                      </td>
                      <td style={{ ...tdStyle, textAlign: 'center', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        {c.credits.toFixed(1)}
                      </td>
                      <td style={{ ...tdStyle, textAlign: 'center' }}>
                        <span style={{
                          display: 'inline-block',
                          padding: '3px 10px',
                          borderRadius: '4px',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          fontFamily: 'var(--font-mono)',
                          background: c.grade === 'A' || c.grade === 'A-' ? 'rgba(16, 185, 129, 0.15)' : c.grade.startsWith('B') ? 'rgba(56, 189, 248, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                          color: c.grade === 'A' || c.grade === 'A-' ? 'var(--accent-emerald)' : c.grade.startsWith('B') ? 'var(--accent-cyan)' : 'var(--accent-amber)',
                          border: c.grade === 'A' ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)'
                        }}>
                          {c.grade}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

const thStyle = {
  padding: '12px 16px',
  fontWeight: 600,
  fontSize: '0.8rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const tdStyle = {
  padding: '14px 16px',
  fontSize: '0.875rem'
};
