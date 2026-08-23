import React, { useState } from 'react';
import { Layers, ArrowRight, Database, Cpu, Radio, Sparkles, Check, Info } from 'lucide-react';

export default function InteractivePipelineDiagram() {
  const [activeStage, setActiveStage] = useState(2); // Default on channel/DoT

  const stages = [
    {
      id: 0,
      title: '1. Input Point Cloud',
      subtitle: 'ModelNet40 (3D Geometry)',
      icon: '🧊',
      badge: 'Continuous Manifold',
      details: 'Raw 3D point cloud $X \\in \\mathbb{R}^{N \\times 3}$ sampled from ModelNet40 shapes (40 target object categories).',
      codeSnippet: '# Input point cloud tensor\npoints = sample_point_cloud(modelnet40_dataset, num_points=4096)'
    },
    {
      id: 1,
      title: '2. MaskedVQVAE3D Encode',
      subtitle: 'Discrete Tokenizer',
      icon: '📦',
      badge: '4096 Tokens / Vocab 297',
      details: 'Quantizes 3D spatial geometry into a discrete token sequence of length 4096. Vocabulary size 256 base tokens + 41 special/class tokens (BOS=256, Classes 257–296).',
      codeSnippet: '# Discrete Latent Quantization\ntokens = masked_vqvae3d.encode(points)  # shape: (B, 4096)\ntokens = add_class_conditioning(tokens, class_id)  # Extended vocab'
    },
    {
      id: 2,
      title: '3. Channel Loss & Noise',
      subtitle: 'Truncation & Puncturing',
      icon: '⚡',
      badge: 'Up to 99.2% Token Loss',
      details: 'Simulates physical wireless channel degradation. Truncation loss handled via Diffusion-on-Tokens (DoT); puncturing loss handled via SEDD.',
      codeSnippet: '# Severe token loss simulation (e.g. 99.2% missing -> 32 tokens remaining)\ncorrupted_tokens = mask_tokens(tokens, missing_pct=0.992)'
    },
    {
      id: 3,
      title: '4. MONAI DoT Denoising',
      subtitle: 'Discrete Token Diffusion',
      icon: '🧠',
      badge: 'TransformerMonai.py',
      details: 'Autoregressively or iteratively reconstructs corrupted token sequences. Conditional class prompting maintains 59.5% accuracy even at 99.2% token loss.',
      codeSnippet: '# Denoising via MONAI DoT (v2)\nreconstructed_tokens = monai_dot.denoise(corrupted_tokens, class_cond=class_id)'
    },
    {
      id: 4,
      title: '5. Decode & Classification',
      subtitle: 'PointMAE / Occupancy Grid',
      icon: '🎯',
      badge: '67.9% Clean / 59.5% Corrupted',
      details: 'Decodes tokens back into 3D sparse occupancy via stage3_decode.py or classifies reconstructed token streams.',
      codeSnippet: '# 3D Shape Decoding & Classification\noccupancy_grid = stage3_decode(reconstructed_tokens)\npred_class = pointmae_classifier(occupancy_grid)'
    }
  ];

  const current = stages[activeStage];

  return (
    <section style={{ padding: '4rem 0', background: 'rgba(6, 9, 19, 0.9)' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="subtle-badge" style={{ marginBottom: '0.75rem' }}>
            <Layers size={14} /> Interactive Pipeline Flowchart
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>
            3D Semantic Communication <span className="gradient-text">Architecture Pipeline</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            Click on any stage below to inspect the mathematical operations, neural architecture, and empirical token dynamics.
          </p>
        </div>

        {/* Pipeline Flowchart Buttons */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '2rem'
        }}>
          {stages.map((stg) => {
            const isActive = activeStage === stg.id;
            return (
              <button
                key={stg.id}
                onClick={() => setActiveStage(stg.id)}
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: isActive ? '2px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  background: isActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(16, 24, 40, 0.6)',
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.25s ease',
                  position: 'relative'
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '4px' }}>{stg.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: isActive ? '#fff' : '#cbd5e1' }}>
                  {stg.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '2px' }}>
                  {stg.subtitle}
                </div>

                <div style={{
                  fontSize: '0.65rem',
                  marginTop: '8px',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: 'var(--accent-cyan)',
                  fontWeight: 600,
                  display: 'inline-block'
                }}>
                  {stg.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-cyan)', padding: '1.75rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '2rem' }}>{current.icon}</span>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff' }}>
                  {current.title} — <span style={{ color: 'var(--accent-cyan)' }}>{current.subtitle}</span>
                </h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                  Stage {current.id + 1} of 5 in Discernment 3D Pipeline
                </span>
              </div>
            </div>

            <div style={{
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.825rem',
              color: 'var(--accent-cyan)',
              fontWeight: 600
            }}>
              {current.badge}
            </div>
          </div>

          <p style={{ fontSize: '1rem', color: '#e2e8f0', lineHeight: 1.6, marginBottom: '1.25rem' }}>
            {current.details}
          </p>

          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '4px', textTransform: 'uppercase' }}>
              PyTorch Code Spec:
            </div>
            <pre className="math-block" style={{ margin: 0, fontSize: '0.85rem' }}>
              <code>{current.codeSnippet}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
}
