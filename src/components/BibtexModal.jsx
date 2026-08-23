import React, { useState } from 'react';
import { X, Copy, Check, FileText } from 'lucide-react';

export default function BibtexModal({ isOpen, onClose, publication }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !publication) return null;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(publication.links?.bibtex || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(5, 8, 15, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-card" style={{
        maxWidth: '650px',
        width: '100%',
        background: 'rgba(15, 23, 42, 0.95)',
        border: '1px solid var(--accent-cyan)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
      }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={18} color="var(--accent-cyan)" /> BibTeX Citation
          </h3>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          Cite <strong>"{publication.title}"</strong> in LaTeX / BibTeX format:
        </p>

        {/* Bibtex Content Box */}
        <div className="math-block" style={{ whiteSpace: 'pre-wrap', fontSize: '0.85rem', maxHeight: '250px', overflowY: 'auto' }}>
          {publication.links?.bibtex}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '1.25rem' }}>
          <button onClick={onClose} className="btn-secondary">
            Close
          </button>
          <button onClick={handleCopy} className="btn-primary">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied to Clipboard!' : 'Copy BibTeX'}
          </button>
        </div>

      </div>
    </div>
  );
}
