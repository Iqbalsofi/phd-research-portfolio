import React from 'react';
import { Mail, Phone, MapPin, FileText, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/researchData';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function LetsTalkResearch() {
  const cvPath = `${import.meta.env.BASE_URL}Iqbal_Maqbool_Sofi_Research_CV.pdf`;

  return (
    <section id="contact" style={{ padding: '4.5rem 0 5rem' }}>
      <div className="container">
        
        <div className="glass-card" style={{ 
          maxWidth: '860px', 
          margin: '0 auto', 
          padding: '2.5rem',
          borderTop: '4px solid var(--accent-ginger)',
          textAlign: 'center'
        }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>05 // Contact & CV</div>
          
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            Get in Touch
          </h2>
          
          <p style={{ color: 'var(--text-muted)', maxWidth: '580px', margin: '0 auto 2rem', fontSize: '1rem' }}>
            Open to prospective PhD advising, research collaborations, and discussions in machine learning, semantic communication, and trustworthy AI.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem',
            textAlign: 'left'
          }}>
            
            <a href={`mailto:${personalInfo.email}`} style={contactCardStyle}>
              <Mail size={20} color="var(--accent-ginger-text)" />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Email</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>{personalInfo.email}</div>
              </div>
            </a>

            <div style={contactCardStyle}>
              <Phone size={20} color="var(--accent-ginger-text)" />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Phone</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>{personalInfo.phone}</div>
              </div>
            </div>

            <div style={contactCardStyle}>
              <MapPin size={20} color="var(--accent-ginger-text)" />
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Location</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-main)' }}>{personalInfo.location}</div>
              </div>
            </div>

          </div>

          {/* Social Links & CV Button */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary"
            >
              <GithubIcon size={18} /> GitHub <ExternalLink size={14} />
            </a>

            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary"
            >
              <LinkedinIcon size={18} /> LinkedIn <ExternalLink size={14} />
            </a>

            <a 
              href={cvPath} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
              download="Iqbal_Maqbool_Sofi_Research_CV.pdf"
            >
              <FileText size={18} /> Download Academic CV (PDF)
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

const contactCardStyle = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-sm)',
  padding: '1rem 1.25rem',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  textDecoration: 'none',
  transition: 'var(--transition-smooth)'
};
