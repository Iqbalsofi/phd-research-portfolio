import React, { useState, useEffect } from 'react';
import { BookOpen, Box, FileText, Award, Mail, ExternalLink, Menu, X, Compass, UserCheck } from 'lucide-react';
import { personalInfo } from '../data/researchData';

export default function Header({ onOpenCV, onOpenBibtex }) {
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
        background: scrolled ? 'rgba(9, 13, 22, 0.94)' : 'rgba(9, 13, 22, 0.65)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Logo / Brand */}
        <a href="#hero" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            color: '#fff',
            fontSize: '1.1rem',
            boxShadow: '0 0 15px rgba(56, 189, 248, 0.4)'
          }}>
            IS
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#fff', letterSpacing: '-0.01em' }}>
              {personalInfo.name}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Graduate Research Assistant @ Rowan
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          <a href="#featured-research" style={navLinkStyle}><BookOpen size={15} /> 3D Research</a>
          <a href="#my-contribution" style={navLinkStyle}><UserCheck size={15} /> My Role</a>
          <a href="#prof-alignment" style={navLinkStyle}><Compass size={15} /> Faculty Matcher</a>
          <a href="#demo3d" style={navLinkStyle}><Box size={15} /> 3D Demo</a>
          <a href="#coursework" style={navLinkStyle}><Award size={15} /> Coursework</a>
          <button 
            onClick={onOpenCV}
            className="btn-secondary"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
          >
            Academic CV
          </button>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="btn-primary"
            style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
          >
            <Mail size={15} /> Contact
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

      <style>{`
        @media (max-width: 960px) {
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
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  transition: 'color 0.2s ease'
};
