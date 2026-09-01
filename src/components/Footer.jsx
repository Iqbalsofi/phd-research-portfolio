import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/researchData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#070a10',
      borderTop: '1px solid var(--border-subtle)',
      padding: '2rem 0',
      fontSize: '0.825rem',
      color: 'var(--text-dim)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        
        <div>
          &copy; {new Date().getFullYear()} {personalInfo.name} &bull; Machine Learning Research Portfolio &bull; Rowan University
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
          aria-label="Back to top"
        >
          Back to Top <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
}
