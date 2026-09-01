import React from 'react';
import { ArrowRight, FileText, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/researchData';

export default function Hero() {
  const cvPath = `${import.meta.env.BASE_URL}Iqbal_Maqbool_Sofi_Research_CV.pdf`;

  return (
    <section id="hero" style={{ padding: '4.5rem 0 3.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ maxWidth: '820px' }}>
          
          {/* Institution badge */}
          <div className="subtle-badge" style={{ marginBottom: '1.25rem' }}>
            <MapPin size={14} color="var(--accent-ginger-text)" /> {personalInfo.location} &bull; {personalInfo.subtitle}
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.75rem' }}>
            {personalInfo.name}
          </h1>

          <div style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', color: 'var(--accent-ginger-text)', fontWeight: 600, fontFamily: 'var(--font-heading)', marginBottom: '1.25rem' }}>
            {personalInfo.title}
          </div>

          {/* Research Description */}
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '720px' }}>
            {personalInfo.bio}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <a href="#featured-case-study" className="btn-primary">
              Explore Research <ArrowRight size={16} />
            </a>

            <a 
              href={cvPath} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-secondary"
              download="Iqbal_Maqbool_Sofi_Research_CV.pdf"
            >
              <FileText size={16} color="var(--accent-ginger-text)" /> Download CV
            </a>

            <a href="#contact" className="btn-secondary">
              <Mail size={16} color="var(--accent-ginger-text)" /> Contact Me
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
