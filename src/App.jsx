import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchAlignmentExplorer from './components/ResearchAlignmentExplorer';
import PointCloudDemo from './components/PointCloudDemo';
import InteractivePipelineDiagram from './components/InteractivePipelineDiagram';
import ResearchProjects from './components/ResearchProjects';
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
        <ResearchAlignmentExplorer />
        <PointCloudDemo />
        <InteractivePipelineDiagram />
        <ResearchProjects onOpenBibtex={handleOpenBibtex} />
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
