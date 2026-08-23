import React, { useState } from 'react';
import { BookOpen, Layers, CheckCircle2, AlertTriangle, Cpu, ArrowRight, ShieldCheck, FileText, Bug, Database, Info, Activity, ChevronDown, ChevronUp } from 'lucide-react';
import { mainProjectDetails, ongoingResearch, myContributions } from '../data/researchData';

export default function FeaturedResearchCaseStudy() {
  const [activeTab, setActiveTab] = useState('rq3');
  const [showTechDetails, setShowTechDetails] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const { problemStatement, baselineFindings, researchQuestions, robustnessData, techSpecs, attribution, corruptionConcepts } = mainProjectDetails;

  return (
    <section id="featured-research" style={{ padding: '4.5rem 0 3.5rem' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="subtle-badge" style={{ marginBottom: '0.75rem' }}>
            <BookOpen size={14} /> Featured Research Investigation
          </div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 800, lineHeight: 1.25 }}>
            {mainProjectDetails.title}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '840px' }}>
            Investigating semantic communication framework extensions (arXiv:2602.13556), discrete diffusion architectures, shape decoding, and channel loss robustness on ModelNet40.
          </p>
        </div>

        {/* 1. Research Problem (Simple Explanation First) */}
        <div className="glass-card" style={{ marginBottom: '2.5rem', padding: '1.75rem', borderLeft: '4px solid var(--accent-cyan)' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
            Research Problem Overview
          </h3>

          <p style={{ fontSize: '1.1rem', color: '#f8fafc', fontWeight: 600, lineHeight: 1.6, marginBottom: '0.75rem', background: 'rgba(56, 189, 248, 0.08)', padding: '12px 16px', borderRadius: 'var(--radius-sm)' }}>
            "{problemStatement.simple}"
          </p>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
            {problemStatement.technical}
          </p>
        </div>

        {/* 2. Pipeline Visualization */}
        <div className="glass-card" style={{ marginBottom: '2.5rem', padding: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
              <Layers size={18} color="var(--accent-cyan)" /> 3D Semantic Communication Pipeline
            </h3>
            
            <button
              onClick={() => setShowTechDetails(!showTechDetails)}
              className="btn-secondary"
              style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem' }}
            >
              {showTechDetails ? 'Hide Technical Parameters' : 'View Technical Parameters'} {showTechDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          {/* Research Block Diagram */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))', 
            gap: '8px', 
            alignItems: 'center',
            marginBottom: showTechDetails ? '1.5rem' : 0
          }}>
            {[
              { label: '3D Point Cloud', sub: 'ModelNet40', phase: 'Encoding' },
              { label: 'MaskedVQVAE3D', sub: 'Encode & Quantize', phase: 'Encoding' },
              { label: '4096 Tokens', sub: 'Sequence L=4096', phase: 'Encoding' },
              { label: 'Channel Loss', sub: 'Truncation / Puncturing', phase: 'Corruption' },
              { label: 'SEDD / DoT', sub: 'Semantic Denoising', phase: 'Reconstruction' },
              { label: 'VQ-VAE Decoder', sub: 'Sparse Occupancy', phase: 'Decoding' },
              { label: '3D Geometry', sub: 'Reconstructed Shape', phase: 'Decoding' },
              { label: 'Classification', sub: 'ModelNet40 Evaluation', phase: 'Evaluation' }
            ].map((step, i) => (
              <div key={i} style={{
                background: step.phase === 'Corruption' ? 'rgba(239, 68, 68, 0.1)' : step.phase === 'Reconstruction' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(9, 13, 22, 0.85)',
                border: step.phase === 'Corruption' ? '1px solid rgba(239, 68, 68, 0.3)' : step.phase === 'Reconstruction' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-sm)',
                padding: '10px 6px',
                textAlign: 'center',
                minHeight: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '0.65rem', fontWeight: 600, color: step.phase === 'Corruption' ? '#ef4444' : step.phase === 'Reconstruction' ? 'var(--accent-emerald)' : 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '2px' }}>
                  {step.phase}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.775rem', color: '#fff' }}>{step.label}</div>
                <div style={{ fontSize: '0.675rem', color: 'var(--text-dim)' }}>{step.sub}</div>
              </div>
            ))}
          </div>

          {/* Expandable Technical Details Area */}
          {showTechDetails && (
            <div style={{ 
              background: 'rgba(9, 13, 22, 0.9)', 
              border: '1px solid rgba(255, 255, 255, 0.06)', 
              borderRadius: 'var(--radius-sm)',
              padding: '1.25rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              fontSize: '0.85rem'
            }}>
              <div>
                <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>Dataset</span>
                <strong style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>{techSpecs.dataset}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>Quantizer Model</span>
                <strong style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{techSpecs.model}</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>Token Sequence Length</span>
                <strong style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>{techSpecs.sequenceLength} Tokens</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>VQ Codebook Vocab</span>
                <strong style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>{techSpecs.vqVocab} (mask_id = {techSpecs.maskId})</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>Extended Vocabulary</span>
                <strong style={{ color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>{techSpecs.extendedVocab} Tokens</strong>
              </div>
              <div>
                <span style={{ color: 'var(--text-dim)', display: 'block', fontSize: '0.75rem' }}>Class Conditioning Tokens</span>
                <strong style={{ color: 'var(--accent-purple)', fontFamily: 'var(--font-mono)' }}>BOS={techSpecs.bosToken}, Range: {techSpecs.classTokensRange}</strong>
              </div>
            </div>
          )}

        </div>

        {/* 3. SEDD vs DoT Conceptual Visuals */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>
              {corruptionConcepts.sedd.title}
            </h4>
            <div style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '1.1rem', 
              letterSpacing: '0.15em', 
              color: '#38bdf8', 
              background: 'rgba(9, 13, 22, 0.8)', 
              padding: '10px', 
              borderRadius: 'var(--radius-sm)',
              textAlign: 'center',
              marginBottom: '0.75rem'
            }}>
              {corruptionConcepts.sedd.pattern}
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              {corruptionConcepts.sedd.desc}
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>
              {corruptionConcepts.dot.title}
            </h4>
            <div style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '1.1rem', 
              letterSpacing: '0.15em', 
              color: '#a855f7', 
              background: 'rgba(9, 13, 22, 0.8)', 
              padding: '10px', 
              borderRadius: 'var(--radius-sm)',
              textAlign: 'center',
              marginBottom: '0.75rem'
            }}>
              {corruptionConcepts.dot.pattern}
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              {corruptionConcepts.dot.desc}
            </p>
          </div>
        </div>

        {/* 4. Research Attribution Box */}
        <div className="glass-card" style={{ 
          marginBottom: '2.5rem', 
          borderLeft: '4px solid var(--accent-purple)',
          background: 'rgba(16, 24, 40, 0.85)',
          padding: '1.5rem 1.75rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-purple)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>
            <ShieldCheck size={18} /> Research Attribution & Collaborative Scope
          </div>
          <div style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <p>
              <strong style={{ color: '#fff' }}>Base Architecture & Pipeline:</strong> {attribution.baseModels}
            </p>
            <p>
              <strong style={{ color: '#fff' }}>My Specific Scope & Contribution:</strong> {attribution.myRole}
            </p>
          </div>
        </div>

        {/* 5. Baseline Results Context */}
        <div className="glass-card" style={{ marginBottom: '2.5rem', padding: '1.5rem 1.75rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>
            Baseline 3D Pipeline Findings (Rudhra Joshi)
          </h3>

          <div style={{
            background: 'rgba(56, 189, 248, 0.06)',
            borderLeft: '3px solid var(--accent-cyan)',
            padding: '10px 14px',
            borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
            fontSize: '0.85rem',
            color: '#e2e8f0',
            marginBottom: '1rem'
          }}>
            <strong>Important Methodology Distinction:</strong> {baselineFindings.note}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', fontSize: '0.875rem' }}>
            <div style={{ background: 'rgba(9, 13, 22, 0.6)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Clean Raw-Token Accuracy</div>
              <strong style={{ fontSize: '1.2rem', color: '#fff', fontFamily: 'var(--font-mono)' }}>{baselineFindings.cleanAcc}</strong>
            </div>
            <div style={{ background: 'rgba(9, 13, 22, 0.6)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Conditional SEDD</div>
              <div style={{ color: 'var(--accent-emerald)', fontWeight: 600, fontSize: '0.85rem', marginTop: '2px' }}>{baselineFindings.condSEDD}</div>
            </div>
            <div style={{ background: 'rgba(9, 13, 22, 0.6)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Conditional DoT</div>
              <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, fontSize: '0.85rem', marginTop: '2px' }}>{baselineFindings.condDoT}</div>
            </div>
            <div style={{ background: 'rgba(9, 13, 22, 0.6)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Unconditional Baselines</div>
              <div style={{ color: 'var(--accent-amber)', fontSize: '0.8rem', marginTop: '2px' }}>{baselineFindings.fullGen}</div>
            </div>
          </div>
        </div>

        {/* 6. Three Research Questions Tabs */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {researchQuestions.map((rq) => (
              <button
                key={rq.id}
                onClick={() => setActiveTab(rq.id)}
                style={{
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-sm)',
                  border: activeTab === rq.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  background: activeTab === rq.id ? 'rgba(56, 189, 248, 0.15)' : 'rgba(16, 24, 40, 0.6)',
                  color: activeTab === rq.id ? '#fff' : 'var(--text-muted)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {rq.number}
              </button>
            ))}
          </div>

          {/* Research Question Content */}
          {researchQuestions.map((rq) => {
            if (rq.id !== activeTab) return null;
            return (
              <div key={rq.id} className="glass-card" style={{ borderLeft: '4px solid var(--accent-cyan)', padding: '2rem' }}>
                
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
                  {rq.number}
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', marginBottom: '1rem', lineHeight: 1.3 }}>
                  {rq.question}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {rq.investigation}
                </p>

                {/* Status Badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.825rem',
                  fontWeight: 600,
                  background: rq.id === 'rq3' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                  border: rq.id === 'rq3' ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(245, 158, 11, 0.4)',
                  color: rq.id === 'rq3' ? 'var(--accent-emerald)' : 'var(--accent-amber)',
                  marginBottom: '1.5rem'
                }}>
                  <Info size={15} /> Status: {rq.status}
                </div>

                {/* RQ1 Specific Content */}
                {rq.id === 'rq1' && (
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                      Decode-to-3D Pipeline Path: <code style={{ color: 'var(--accent-cyan)' }}>{rq.pipelineSteps}</code>
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.925rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {rq.findings.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* RQ2 Specific Content */}
                {rq.id === 'rq2' && (
                  <div>
                    <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.925rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {rq.findings.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* RQ3 Specific Content (Quantitative Centerpiece) */}
                {rq.id === 'rq3' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    
                    {/* Research Engineering & Debugging */}
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Bug size={18} color="var(--accent-amber)" /> Research Engineering & Debugging Contributions
                      </h4>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        {rq.debugging.map((bug, i) => (
                          <div key={i} style={{ background: 'rgba(9, 13, 22, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                              {bug.title}
                            </div>
                            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '8px' }}>
                              Component: {bug.file}
                            </div>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                              {bug.details}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Validation Loss Parity */}
                    <div style={{ background: 'rgba(9, 13, 22, 0.6)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                        Model Training Validation Loss Comparison (Epoch 99)
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
                        {rq.trainingLoss.note}
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div style={{ background: 'rgba(15, 23, 42, 0.9)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Conditional Val Loss</span>
                          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                            MONAI: {rq.trainingLoss.conditional.monai} vs NanoGPT: {rq.trainingLoss.conditional.nanoGPT}
                          </div>
                        </div>
                        <div style={{ background: 'rgba(15, 23, 42, 0.9)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Unconditional Val Loss</span>
                          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                            MONAI: {rq.trainingLoss.unconditional.monai} vs NanoGPT: {rq.trainingLoss.unconditional.nanoGPT}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Robustness Line Chart Visualization */}
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                        Channel Corruption Robustness Curves (Classification Accuracy vs % Tokens Missing)
                      </h4>

                      {/* SVG Line Chart */}
                      <div style={{ 
                        background: 'rgba(6, 9, 19, 0.95)', 
                        border: '1px solid rgba(255, 255, 255, 0.08)', 
                        borderRadius: 'var(--radius-md)', 
                        padding: '1.5rem',
                        marginBottom: '1.5rem',
                        overflowX: 'auto'
                      }}>
                        <div style={{ minWidth: '550px' }}>
                          <svg viewBox="0 0 600 240" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
                            {/* Grid Lines */}
                            {[0, 25, 50, 75, 100].map((val) => {
                              const y = 200 - (val / 100) * 170;
                              return (
                                <g key={val}>
                                  <line x1="45" y1={y} x2="580" y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                                  <text x="35" y={y + 4} fill="#64748b" fontSize="10" textAnchor="end" fontFamily="var(--font-mono)">{val}%</text>
                                </g>
                              );
                            })}

                            {/* X Axis Labels */}
                            {[
                              { label: '0%', x: 50 },
                              { label: '50%', x: 182.5 },
                              { label: '87.5%', x: 315 },
                              { label: '96.9%', x: 447.5 },
                              { label: '99.2%', x: 570 }
                            ].map((tick, i) => (
                              <g key={i}>
                                <line x1={tick.x} y1="30" x2={tick.x} y2="200" stroke="rgba(255,255,255,0.04)" />
                                <text x={tick.x} y="218" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="var(--font-mono)">{tick.label} Missing</text>
                              </g>
                            ))}

                            {/* Lines */}
                            {/* NanoGPT Cond (Cyan Solid) */}
                            <path d="M 50,41 L 182.5,56.35 L 315,79.3 L 447.5,102.25 L 570,98.85" fill="none" stroke="#38bdf8" strokeWidth="3" />
                            {/* MONAI Cond (Emerald Solid) */}
                            <path d="M 50,41 L 182.5,66.55 L 315,100.55 L 447.5,114.15 L 570,113.3" fill="none" stroke="#10b981" strokeWidth="3" />
                            {/* NanoGPT Uncond (Purple Dashed) */}
                            <path d="M 50,41 L 182.5,98 L 315,192.35 L 447.5,171.95 L 570,191.5" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" />
                            {/* MONAI Uncond (Amber Dashed) */}
                            <path d="M 50,41 L 182.5,72.5 L 315,188.95 L 447.5,187.25 L 570,198.3" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />

                            {/* Data points for NanoGPT Cond */}
                            {[[50, 41], [182.5, 56.35], [315, 79.3], [447.5, 102.25], [570, 98.85]].map((pt, i) => (
                              <circle key={i} cx={pt[0]} cy={pt[1]} r="4" fill="#38bdf8" />
                            ))}
                            {/* Data points for MONAI Cond */}
                            {[[50, 41], [182.5, 66.55], [315, 100.55], [447.5, 114.15], [570, 113.3]].map((pt, i) => (
                              <circle key={i} cx={pt[0]} cy={pt[1]} r="4" fill="#10b981" />
                            ))}
                          </svg>

                          {/* Legend */}
                          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginTop: '1rem', fontSize: '0.8rem' }}>
                            <span style={{ color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ width: '12px', height: '3px', background: '#38bdf8', borderRadius: '2px' }} /> NanoGPT — Conditional (Solid)
                            </span>
                            <span style={{ color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ width: '12px', height: '3px', background: '#10b981', borderRadius: '2px' }} /> MONAI — Conditional (Solid)
                            </span>
                            <span style={{ color: '#a855f7', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ width: '12px', height: '3px', background: '#a855f7', borderRadius: '2px' }} /> NanoGPT — Unconditional (Dashed)
                            </span>
                            <span style={{ color: '#f59e0b', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span style={{ width: '12px', height: '3px', background: '#f59e0b', borderRadius: '2px' }} /> MONAI — Unconditional (Dashed)
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Exact Numerical Table */}
                      <div style={{ overflowX: 'auto', background: 'rgba(9, 13, 22, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-sm)', padding: '10px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'center' }}>
                          <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--text-muted)' }}>
                              <th style={{ padding: '8px' }}>Context Length</th>
                              <th style={{ padding: '8px' }}>Tokens Missing (%)</th>
                              <th style={{ padding: '8px', color: 'var(--accent-cyan)' }}>NanoGPT Cond (%)</th>
                              <th style={{ padding: '8px', color: 'var(--accent-emerald)' }}>MONAI Cond (%)</th>
                              <th style={{ padding: '8px', color: 'var(--accent-purple)' }}>NanoGPT Uncond (%)</th>
                              <th style={{ padding: '8px', color: 'var(--accent-amber)' }}>MONAI Uncond (%)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {robustnessData.map((row, idx) => (
                              <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                                <td style={{ padding: '8px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>{row.context}</td>
                                <td style={{ padding: '8px', fontWeight: 600, color: '#fff' }}>{row.missingPct}%</td>
                                <td style={{ padding: '8px', fontWeight: 700, color: 'var(--accent-cyan)' }}>{row.ngCond.toFixed(1)}</td>
                                <td style={{ padding: '8px', fontWeight: 700, color: 'var(--accent-emerald)' }}>{row.mCond.toFixed(1)}</td>
                                <td style={{ padding: '8px', color: 'var(--text-muted)' }}>{row.ngUncond.toFixed(1)}</td>
                                <td style={{ padding: '8px', color: 'var(--text-muted)' }}>{row.mUncond.toFixed(1)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Extreme Corruption Callout */}
                    <div style={{
                      background: 'rgba(15, 23, 42, 0.9)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase' }}>
                          Extreme Corruption Behavior
                        </div>
                        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginTop: '2px' }}>
                          {rq.extremeCorruptionCallout.missingPct} Tokens Missing ({rq.extremeCorruptionCallout.tokensRetained} Retained)
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>NanoGPT Cond</span>
                          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                            {rq.extremeCorruptionCallout.ngCondAcc}
                          </div>
                        </div>
                        <div>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>MONAI Cond</span>
                          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-emerald)', fontFamily: 'var(--font-mono)' }}>
                            {rq.extremeCorruptionCallout.monaiCondAcc}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main Scientific Finding Callout Box */}
                    <div style={{
                      background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.5rem'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Primary Scientific Conclusion
                        </div>
                        <div style={{ background: 'rgba(56, 189, 248, 0.2)', color: '#fff', fontWeight: 800, padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem' }}>
                          {rq.takeaway}
                        </div>
                      </div>
                      <p style={{ fontSize: '0.975rem', color: '#e2e8f0', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
                        "{rq.mainFinding}"
                      </p>
                    </div>

                    {/* Evaluation Limitation Note */}
                    <div style={{
                      background: 'rgba(245, 158, 11, 0.08)',
                      border: '1px solid rgba(245, 158, 11, 0.25)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '1.25rem',
                      fontSize: '0.875rem',
                      color: '#cbd5e1'
                    }}>
                      <div style={{ fontWeight: 700, color: 'var(--accent-amber)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <AlertTriangle size={16} /> Evaluation Note & Methodological Limitation
                      </div>
                      <p style={{ margin: 0, lineHeight: 1.5 }}>
                        {rq.limitation}
                      </p>
                    </div>

                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* 7. Beyond Token-Space Evaluation (Ongoing Research) */}
        <div className="glass-card" style={{ marginBottom: '3rem', padding: '1.75rem', borderLeft: '4px solid var(--accent-purple)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
              {ongoingResearch.title} — <span style={{ color: 'var(--accent-purple)' }}>{ongoingResearch.subtitle}</span>
            </h3>
            <span style={{ background: 'rgba(168, 85, 247, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)', color: 'var(--accent-purple)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 600 }}>
              {ongoingResearch.status}
            </span>
          </div>

          <p style={{ fontSize: '1.05rem', color: '#f8fafc', fontWeight: 600, marginBottom: '0.75rem' }}>
            "{ongoingResearch.question}"
          </p>

          <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', background: 'rgba(9, 13, 22, 0.8)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', marginBottom: '1rem' }}>
            {ongoingResearch.pipeline}
          </div>

          <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {ongoingResearch.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>

        {/* 8. My Contribution Section */}
        <div id="my-contribution" className="glass-card" style={{ marginBottom: '3rem', padding: '2rem', borderLeft: '4px solid var(--accent-emerald)' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={22} color="var(--accent-emerald)" /> My Contribution
          </h3>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-dim)', marginBottom: '1.25rem' }}>
            Research contribution: analysis, verification, debugging, MONAI implementation, experimentation, and evaluation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
            {myContributions.map((contrib, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '10px', background: 'rgba(9, 13, 22, 0.6)', padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 800 }}>•</span>
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.5 }}>{contrib}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
