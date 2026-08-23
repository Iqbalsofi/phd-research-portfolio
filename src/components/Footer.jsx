import React from 'react';
import { Mail, MapPin, School, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/researchData';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'rgba(5, 8, 15, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '4rem 0 2rem',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Contact Banner */}
        <div className="glass-card" style={{
          padding: '2.5rem',
          marginBottom: '3.5rem',
          background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1.5rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
              Interested in PhD Collaboration or Research Alignment?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', maxWidth: '650px' }}>
              I am actively seeking PhD opportunities in Deep Learning, 3D Computer Vision, Joint Source-Channel Coding, and Responsible AI starting 2026/2027.
            </p>
          </div>

          <a href={`mailto:${personalInfo.email}`} className="btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
            <Mail size={18} /> Send Academic Email
          </a>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem' }}>
          
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>
              {personalInfo.name}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', maxWidth: '320px', lineHeight: 1.6 }}>
              Graduate Research Assistant @ Rowan University.<br />
              Department of Computer Science & Data Science.
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={14} color="var(--accent-cyan)" /> Glassboro, NJ 08028, United States
            </div>
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                Navigation
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                <li><a href="#hero" style={linkStyle}>Research Vision</a></li>
                <li><a href="#demo3d" style={linkStyle}>3D Noise Simulator</a></li>
                <li><a href="#research" style={linkStyle}>Publications & Preprints</a></li>
                <li><a href="#coursework" style={linkStyle}>Transcript & Course Matrix</a></li>
                <li><a href="#experience" style={linkStyle}>Academic CV</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                Scholarly Links
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                <li><a href={personalInfo.github} target="_blank" rel="noreferrer" style={linkStyle}><GithubIcon size={14} /> GitHub Codebases</a></li>
                <li><a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={linkStyle}><LinkedinIcon size={14} /> LinkedIn Profile</a></li>
                <li><a href={`mailto:${personalInfo.email}`} style={linkStyle}><Mail size={14} /> {personalInfo.email}</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © {new Date().getFullYear()} Iqbal Maqbool Sofi. Built for PhD Admissions & Research Showcase.
          </div>

          <button 
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem'
            }}
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}

const linkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  transition: 'color 0.2s ease'
};
