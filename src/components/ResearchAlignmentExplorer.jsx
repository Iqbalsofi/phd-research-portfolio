import React, { useState } from 'react';
import { Compass, CheckCircle } from 'lucide-react';
import { personalInfo, courseworkData, mainProjectDetails } from '../data/researchData';

export default function ResearchAlignmentExplorer() {
  const [selectedTrack, setSelectedTrack] = useState('3d_vision');

  const tracks = [
    {
      id: '3d_vision',
      title: '3D Vision & Geometric Deep Learning',
      icon: '📐',
      pitch: 'Relevant for labs working on 3D Point Clouds, Masked Latent Tokenization, Implicit Representations, and Discrete Transformers.',
      keyMath: ['d_{CD}(P_1, P_2) = \\sum_{x \\in P_1} \\min_{y \\in P_2} \\|x - y\\|_2^2 + \\sum_{y \\in P_2} \\min_{x \\in P_1} \\|x - y\\|_2^2'],
      relevantCoursework: ['CS 07695 (Independent Study - Grade A)', 'CS 07559 (Adv Models of Deep Learning)', 'CS 02505 (Data Mining I - Grade A-)'],
      skills: ['MaskedVQVAE3D', 'PyTorch', 'PointNet++', 'ModelNet40', 'Chamfer Distance (CD)', 'Earth Mover\'s Distance (EMD)']
    },
    {
      id: 'semantic_comm',
      title: 'Semantic Communication & Wireless AI (JSCC / 6G)',
      icon: '📡',
      pitch: 'Targeted for research groups building Neural Joint Source-Channel Coding, Robust Semantic Transceivers, and Channel Noise Degradation Resilience.',
      keyMath: ['\\text{Channel Loss: } Z \\in \\{0..255\\}^{4096} \\xrightarrow{99.2\\% \\text{ Loss}} \\hat{Z} \\xrightarrow{\\text{DoT/SEDD}} \\tilde{Z}'],
      relevantCoursework: ['CS 07695 (Independent Study - Grade A)', 'CS 02516 (Big Data Tools & Tech)', 'DA 03511 (Patient Data Privacy & Ethics)'],
      skills: ['Discrete Diffusion (DoT)', 'SEDD', 'Channel Corruption Benchmarking', 'Class Conditioning Robustness']
    },
    {
      id: 'generative_quant',
      title: 'Generative AI & Discrete Quantization (VQ-VAE / Transformers)',
      icon: '⚡',
      pitch: 'Perfect for researchers focusing on Discrete Latent Quantization, MONAI-style Transformer Architectures, and Robust Latent Codebooks.',
      keyMath: ['\\mathcal{L}_{VQ} = \\|z_e(x) - e\\|_2^2 + \\beta \\|z_e(x) - sg[e]\\|_2^2 + \\mathcal{L}_{DoT}(\\theta)'],
      relevantCoursework: ['CS 07559 (Adv Models of Deep Learning)', 'CS 02630 (Adv Topics in Database Systems)', 'DS 02510 (Visual Analytics - Grade A)'],
      skills: ['MaskedVQVAE3D Codebooks', 'TransformerMonai.py', 'Discrete Diffusion', 'Multi-Head Attention']
    }
  ];

  const currentTrack = tracks.find(t => t.id === selectedTrack) || tracks[0];

  return (
    <section id="prof-alignment" style={{ padding: '4.5rem 0', background: 'linear-gradient(180deg, rgba(9, 13, 22, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="subtle-badge" style={{ marginBottom: '0.75rem', background: 'rgba(168, 85, 247, 0.12)', borderColor: 'rgba(168, 85, 247, 0.3)', color: 'var(--accent-purple)' }}>
            <Compass size={14} /> Interactive Faculty Alignment
          </div>
          <h2 style={{ fontSize: '2.3rem', fontWeight: 800 }}>
            Research Track <span className="gradient-text">Alignment Explorer</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0.5rem auto 0', fontSize: '1rem' }}>
            Select your lab's research domain to view a tailored synthesis of my research contributions, mathematical background, code experience, and graduate coursework.
          </p>
        </div>

        {/* Domain Selector Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {tracks.map((track) => {
            const isSelected = selectedTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '2px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                  background: isSelected ? 'rgba(56, 189, 248, 0.12)' : 'rgba(16, 24, 40, 0.6)',
                  backdropFilter: 'blur(12px)',
                  color: isSelected ? '#fff' : 'var(--text-muted)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isSelected ? '0 8px 25px rgba(56, 189, 248, 0.2)' : 'none'
                }}
              >
                <div style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{track.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: isSelected ? '#fff' : '#e2e8f0', marginBottom: '4px' }}>
                  {track.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.4 }}>
                  {track.pitch.slice(0, 75)}...
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Alignment Result Box */}
        <div className="glass-card" style={{ borderLeft: '4px solid var(--accent-cyan)', padding: '2rem' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Tailored Research Alignment
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginTop: '2px' }}>
                {currentTrack.title}
              </h3>
            </div>

            <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '6px 14px', borderRadius: 'var(--radius-full)', border: '1px solid rgba(56, 189, 248, 0.25)', fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
              Direct Research Background Fit
            </div>
          </div>

          <p style={{ fontSize: '1rem', color: '#e2e8f0', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            {currentTrack.pitch}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            
            {/* Direct Skills & Tools */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-cyan)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                Target Skills & Tools
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {currentTrack.skills.map((skill, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', padding: '4px 12px', borderRadius: 'var(--radius-sm)', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', color: '#fff', fontWeight: 500 }}>
                    <CheckCircle size={12} color="var(--accent-cyan)" style={{ display: 'inline', marginRight: '4px' }} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-emerald)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                Verified Graduate Coursework
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {currentTrack.relevantCoursework.map((course, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-emerald)' }}>✓</span> {course}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Mathematical Snippet */}
          {currentTrack.keyMath && (
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-purple)', marginBottom: '4px' }}>
                Core Mathematical & Architectural Formulation:
              </div>
              <div className="math-block" style={{ margin: 0 }}>
                {currentTrack.keyMath[0]}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
