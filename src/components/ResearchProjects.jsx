import React, { useState } from 'react';
import { BookOpen, Code, FileText, Copy, ExternalLink, ChevronDown, ChevronUp, Sparkles, Check } from 'lucide-react';
import { researchHighlights } from '../data/researchData';

export default function ResearchProjects({ onOpenBibtex }) {
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState('3d-point-cloud-jscc');
  const [copiedId, setCopiedId] = useState(null);

  const categories = ['All', '3D & Computer Vision', 'Deep Learning & Quantization', 'Audio & Speech'];

  const filteredHighlights = researchHighlights.filter(item => {
    if (filter === 'All') return true;
    if (filter === '3D & Computer Vision') return item.keywords.includes('3D Point Clouds') || item.keywords.includes('Computer Vision');
    if (filter === 'Deep Learning & Quantization') return item.keywords.includes('VQ-VAE') || item.keywords.includes('Vision Transformers');
    if (filter === 'Audio & Speech') return item.keywords.includes('Audio Processing');
    return true;
  });

  const handleCopyBibtex = (item) => {
    if (navigator.clipboard && item.links.bibtex) {
      navigator.clipboard.writeText(item.links.bibtex);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    } else {
      onOpenBibtex(item);
    }
  };

  return (
    <section id="research" style={{ padding: '4.5rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', gap: '1rem' }}>
          <div>
            <div className="subtle-badge" style={{ marginBottom: '0.5rem' }}>
              <BookOpen size={14} /> Academic Research & Manuscripts
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>
              Featured Research <span className="gradient-text">Publications & Projects</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: filter === cat ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  background: filter === cat ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                  color: filter === cat ? '#fff' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Research List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredHighlights.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div 
                key={item.id} 
                className="glass-card"
                style={{
                  borderLeft: isExpanded ? '4px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Header row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ flex: 1, minWidth: '280px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-cyan)', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 10px', borderRadius: '4px' }}>
                        {item.role}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                        {item.venue} ({item.period})
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Quick Metrics */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {item.metrics.map((m, idx) => (
                      <div 
                        key={idx}
                        style={{
                          background: 'rgba(9, 13, 22, 0.8)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '6px 12px',
                          borderRadius: 'var(--radius-sm)',
                          textAlign: 'center'
                        }}
                      >
                        <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                          {m.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Abstract Preview */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: '0.75rem 0' }}>
                  {item.abstract}
                </p>

                {/* Keywords Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '0.75rem 0 1.25rem' }}>
                  {item.keywords.map((kw, i) => (
                    <span 
                      key={i} 
                      style={{
                        fontSize: '0.75rem',
                        padding: '3px 10px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        color: 'var(--text-muted)'
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>

                {/* Mathematical Formulation & Code / BibTeX Drawer */}
                {isExpanded && (
                  <div style={{ 
                    marginTop: '1.25rem', 
                    paddingTop: '1.25rem', 
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    {item.benchmarkTable && (
                      <div style={{ margin: '0.5rem 0' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '8px' }}>
                          Channel Degradation Robustness Benchmark (ModelNet40 / 4096 Tokens):
                        </div>
                        <div style={{ overflowX: 'auto', background: 'rgba(9, 13, 22, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-sm)', padding: '8px' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.825rem', textAlign: 'center' }}>
                            <thead>
                              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--text-muted)' }}>
                                <th style={{ padding: '6px' }}>% Missing Tokens</th>
                                <th style={{ padding: '6px' }}>Context Tokens</th>
                                <th style={{ padding: '6px', color: 'var(--accent-cyan)' }}>NanoGPT Cond</th>
                                <th style={{ padding: '6px', color: 'var(--accent-emerald)' }}>MONAI Cond</th>
                                <th style={{ padding: '6px', color: 'var(--accent-purple)' }}>NanoGPT Uncond</th>
                                <th style={{ padding: '6px', color: 'var(--accent-amber)' }}>MONAI Uncond</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.benchmarkTable.map((row, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                                  <td style={{ padding: '6px', fontWeight: 600, color: '#fff' }}>{row.missing}</td>
                                  <td style={{ padding: '6px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{row.tokens}</td>
                                  <td style={{ padding: '6px', fontWeight: 700, color: 'var(--accent-cyan)' }}>{row.ngCond}</td>
                                  <td style={{ padding: '6px', fontWeight: 700, color: 'var(--accent-emerald)' }}>{row.mCond}</td>
                                  <td style={{ padding: '6px', color: 'var(--text-muted)' }}>{row.ngUncond}</td>
                                  <td style={{ padding: '6px', color: 'var(--text-muted)' }}>{row.mUncond}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {item.math && (
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                          Mathematical Formulation & Evaluation Criteria:
                        </div>
                        {Object.entries(item.math).map(([key, formula], idx) => (
                          <div key={idx} className="math-block">
                            {formula}
                          </div>
                        ))}
                      </div>
                    )}

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginTop: '0.5rem' }}>
                      <a 
                        href={item.links.code} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn-primary"
                        style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
                      >
                        <Code size={15} /> Open Research Codebase
                      </a>

                      <button
                        onClick={() => handleCopyBibtex(item)}
                        className="btn-secondary"
                        style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
                      >
                        {copiedId === item.id ? <Check size={15} color="var(--accent-emerald)" /> : <Copy size={15} />}
                        {copiedId === item.id ? 'BibTeX Copied!' : 'Copy BibTeX Citation'}
                      </button>
                    </div>
                  </div>
                )}

                {/* Toggle details button */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: '0.75rem',
                    padding: 0
                  }}
                >
                  {isExpanded ? <>Hide Math & Details <ChevronUp size={16} /></> : <>View Math & Citation Details <ChevronDown size={16} /></>}
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
