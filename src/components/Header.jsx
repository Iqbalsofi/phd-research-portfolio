import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Award, Mail, Menu, X, Code2, Home, User } from 'lucide-react';
import { personalInfo } from '../data/researchData';

export default function Header({ onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        background: scrolled ? 'rgba(9, 13, 22, 0.95)' : 'rgba(9, 13, 22, 0.7)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        
        {/* Brand */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            color: '#fff',
            fontSize: '1rem'
          }}>
            IS
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
              {personalInfo.name}
            </div>
            <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
              ML Researcher @ Rowan University
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          <a href="#hero" style={navLinkStyle}>Home</a>
          <a href="#featured-research" style={navLinkStyle}>Research</a>
          <a href="#projects" style={navLinkStyle}>Projects</a>
          <a href="#experience" style={navLinkStyle}>Experience</a>
          <a href="#coursework" style={navLinkStyle}>Coursework</a>
          <a href="#contact" style={navLinkStyle}>Contact</a>

          <a 
            href={`${import.meta.env.BASE_URL}Iqbal_Maqbool_Sofi_CV.pdf`}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ padding: '0.4rem 0.85rem', fontSize: '0.825rem' }}
            download="Iqbal_Maqbool_Sofi_CV.pdf"
          >
            CV / Résumé
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'none' }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(9, 13, 22, 0.98)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Home</a>
          <a href="#featured-research" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Research</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Projects</a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Experience</a>
          <a href="#coursework" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Coursework</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>Contact</a>
          <a 
            href={`${import.meta.env.BASE_URL}Iqbal_Maqbool_Sofi_CV.pdf`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            style={{ marginTop: '0.5rem', justifyContent: 'center' }}
            download="Iqbal_Maqbool_Sofi_CV.pdf"
            onClick={() => setMobileMenuOpen(false)}
          >
            Download CV / Résumé (PDF)
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
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
  fontSize: '0.875rem',
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
