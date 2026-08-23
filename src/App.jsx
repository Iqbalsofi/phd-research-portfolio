import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedResearchShowcase from './components/FeaturedResearchShowcase';
import ResearchAlignmentExplorer from './components/ResearchAlignmentExplorer';
import PointCloudDemo from './components/PointCloudDemo';
import CourseworkMatrix from './components/CourseworkMatrix';
import AcademicCV from './components/AcademicCV';
import BibtexModal from './components/BibtexModal';
import Footer from './components/Footer';
import { initGA, trackEvent } from './utils/analytics';

export default function App() {
  const [selectedBibtex, setSelectedBibtex] = useState(null);
  const [isBibtexOpen, setIsBibtexOpen] = useState(false);

  useEffect(() => {
    initGA();
  }, []);

  const handleOpenBibtex = (publication) => {
    setSelectedBibtex(publication);
    setIsBibtexOpen(true);
  };

  const handleCloseBibtex = () => {
    setIsBibtexOpen(false);
    setSelectedBibtex(null);
  };

  const handleOpenCV = () => {
    trackEvent('cv_view', { source: 'button_click' });
    const elem = document.getElementById('experience');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onOpenCV={handleOpenCV} onOpenBibtex={handleOpenBibtex} />
      
      <main style={{ flex: 1 }}>
        <Hero onOpenCV={handleOpenCV} />
        <FeaturedResearchShowcase />
        <ResearchAlignmentExplorer />
        <PointCloudDemo />
        <CourseworkMatrix />
        <AcademicCV onOpenCV={handleOpenCV} />
      </main>

      <Footer />

      <BibtexModal 
        isOpen={isBibtexOpen} 
        onClose={handleCloseBibtex} 
        publication={selectedBibtex} 
      />
    </div>
  );
}
