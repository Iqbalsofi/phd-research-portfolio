import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/researchData';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function LetsTalkResearch() {
  return (
    <section id="contact" style={{ padding: '4.5rem 0 3.5rem', background: 'rgba(6, 9, 19, 0.95)', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <div className="glass-card" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-cyan)' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
            Let's Talk Research
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1.75rem' }}>
            I am open to research collaborations, PhD opportunities, and research role discussions in <strong>machine learning, deep learning, generative modeling, robust representation learning, semantic communication, and 3D learning</strong>.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a href={`mailto:${personalInfo.email}`} className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
              <Mail size={16} /> {personalInfo.email}
            </a>

            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="btn-secondary">
              <GithubIcon size={16} /> GitHub Codebases
            </a>

            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="btn-secondary">
              <LinkedinIcon size={16} /> LinkedIn Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
