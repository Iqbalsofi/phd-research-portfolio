import React from 'react';
import { UserCheck, Cpu, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react';
import { mainCaseStudy } from '../data/researchData';

export default function FeaturedResearchCaseStudy() {
  const { 
    title, 
    subtitle, 
    dataset, 
    pipelineSpec, 
    attribution, 
    summary, 
    robustnessDataExact, 
    evaluationLimitation, 
    mainConclusion,
    extremeCorruptionNote
  } = mainCaseStudy;

  return (
    <section id="featured-case-study" style={{ padding: '4.5rem 0', borderBottom: '1px solid var(--border-subtle)', background: 'rgba(15, 21, 33, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-label">02 // Primary Research Case Study</div>
        <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: '0.5rem', color: '#fff' }}>
          {title}
        </h2>
        <div style={{ fontSize: '1.15rem', color: 'var(--accent-ginger-text)', fontWeight: 600, marginBottom: '2rem' }}>
          {subtitle}
        </div>

        {/* Attribution Card */}
        <div className="glass-card" style={{ 
          marginBottom: '2rem', 
          borderLeft: '4px solid var(--accent-ginger)',
          background: 'rgba(190, 85, 4, 0.06)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <UserCheck size={18} color="var(--accent-ginger-text)" />
            <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-ginger-text)' }}>
              Project Attribution & Role
            </h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', fontSize: '0.9rem' }}>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>Base Pipeline Development</div>
              <div style={{ color: 'var(--text-muted)' }}>{attribution.baseModels}</div>
            </div>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '4px' }}>My Contributions</div>
              <div style={{ color: 'var(--text-muted)' }}>{attribution.myRole}</div>
            </div>
          </div>
        </div>

        {/* Overview & Key Methodology */}
        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cpu size={20} color="var(--accent-ginger-text)" /> Research Overview & Pipeline Analysis
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
            <div className="subtle-badge">Dataset: {dataset}</div>
            <div className="subtle-badge">Representation: {pipelineSpec}</div>
          </div>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', color: 'var(--text-muted)', fontSize: '0.925rem' }}>
            {summary.map((item, idx) => (
              <li key={idx} style={{ lineHeight: 1.55 }}>
                <strong style={{ color: 'var(--text-main)' }}>{item.split(' ')[0]} {item.split(' ')[1]}</strong> {item.substring(item.indexOf(' ') + 1 + item.split(' ')[1].length)}
              </li>
            ))}
          </ul>
        </div>

        {/* Results & Limitation Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BarChart3 size={20} color="var(--accent-ginger-text)" /> Controlled Robustness Benchmarking
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            
            {/* Table */}
            <div className="glass-card" style={{ padding: '1.25rem', overflowX: 'auto' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                Classification Accuracy Across Context Length & Token Corruption
              </div>
              <table className="research-table">
                <thead>
                  <tr>
                    <th>Context Tokens</th>
                    <th>Missing</th>
                    <th>NanoGPT Cond.</th>
                    <th>MONAI Cond.</th>
                    <th>NanoGPT Uncond.</th>
                    <th>MONAI Uncond.</th>
                  </tr>
                </thead>
                <tbody>
                  {robustnessDataExact.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.context}</td>
                      <td style={{ color: 'var(--accent-ginger-text)', fontWeight: 600 }}>{row.missingPct}</td>
                      <td>{row.ngCond}</td>
                      <td>{row.mCond}</td>
                      <td style={{ color: 'var(--text-dim)' }}>{row.ngUncond}</td>
                      <td style={{ color: 'var(--text-dim)' }}>{row.mUncond}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Evaluation Limitation Box Directly Beside Results */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              <div className="glass-card" style={{ 
                borderLeft: '4px solid var(--accent-amber)', 
                background: 'rgba(245, 158, 11, 0.08)',
                padding: '1.35rem' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  <AlertTriangle size={18} /> Evaluation Limitation Note
                </div>
                <p style={{ fontSize: '0.875rem', color: '#e2e8f0', lineHeight: 1.55 }}>
                  {evaluationLimitation}
                </p>
              </div>

              <div className="glass-card" style={{ 
                borderLeft: '4px solid var(--accent-ginger)', 
                background: 'rgba(190, 85, 4, 0.1)',
                padding: '1.35rem' 
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-ginger-text)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={18} /> Core Finding & Conclusion
                </div>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', lineHeight: 1.45, marginBottom: '0.5rem' }}>
                  &ldquo;{mainConclusion}&rdquo;
                </p>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  {extremeCorruptionNote}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
