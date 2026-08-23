import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/researchData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#060913',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      padding: '2rem 0',
      fontSize: '0.825rem',
      color: 'var(--text-dim)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        
        <div>
          © {new Date().getFullYear()} {personalInfo.name} • SceneSense AI Lab, Rowan University
        </div>

        <button 
          onClick={scrollToTop}
          style={{
            background: 'rgba(255, 255, 255, 0.04)',
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
    </footer>
  );
}
