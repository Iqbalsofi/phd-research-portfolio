import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { personalInfo } from '../data/researchData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cvPath = `${import.meta.env.BASE_URL}Iqbal_Maqbool_Sofi_Research_CV.pdf`;

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: scrolled ? 'rgba(11, 15, 23, 0.95)' : 'rgba(11, 15, 23, 0.75)',
        borderBottom: '1px solid var(--border-subtle)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '66px' }}>
        
        {/* Brand */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '34px',
            height: '34px',
            borderRadius: '6px',
            background: 'var(--accent-ginger)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: '#fff',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-heading)'
          }}>
            IS
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#fff' }}>
              {personalInfo.name}
            </div>
            <div style={{ fontSize: '0.725rem', color: 'var(--accent-ginger-text)', fontFamily: 'var(--font-mono)' }}>
              {personalInfo.title}
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          <a href="#hero" style={navLinkStyle}>Home</a>
          <a href="#research-focus" style={navLinkStyle}>Research Focus</a>
          <a href="#featured-case-study" style={navLinkStyle}>Featured Case Study</a>
          <a href="#projects" style={navLinkStyle}>Projects</a>
          <a href="#education-experience" style={navLinkStyle}>Education & Experience</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>

          <a 
            href={cvPath}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.825rem' }}
            download="Iqbal_Maqbool_Sofi_Research_CV.pdf"
          >
            <FileText size={14} color="var(--accent-ginger-text)" /> Download CV
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(11, 15, 23, 0.98)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Home</a>
          <a href="#research-focus" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Research Focus</a>
          <a href="#featured-case-study" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Featured Case Study</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Projects</a>
          <a href="#education-experience" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Education & Experience</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Contact</a>
          <a 
            href={cvPath}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ marginTop: '0.5rem', justifyContent: 'center' }}
            download="Iqbal_Maqbool_Sofi_Research_CV.pdf"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileText size={16} /> Download CV (PDF)
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}

const navLinkStyle = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.85rem',
  fontWeight: 500,
  transition: 'color 0.2s ease'
};

const mobileLinkStyle = {
  color: '#e2e8f0',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '6px 0'
};
