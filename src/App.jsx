import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchAtAGlance from './components/ResearchAtAGlance';
import FeaturedResearchCaseStudy from './components/FeaturedResearchCaseStudy';
import SelectedProjects from './components/SelectedProjects';
import CourseworkMatrix from './components/CourseworkMatrix';
import AcademicCV from './components/AcademicCV';
import LetsTalkResearch from './components/LetsTalkResearch';
import Footer from './components/Footer';
import { initGA, trackEvent } from './utils/analytics';

export default function App() {
  useEffect(() => {
    initGA();
  }, []);

  const handleOpenCV = () => {
    trackEvent('cv_view', { source: 'button_click' });
    const elem = document.getElementById('experience');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header onOpenCV={handleOpenCV} />
      
      <main style={{ flex: 1 }}>
        <Hero onOpenCV={handleOpenCV} />
        <ResearchAtAGlance />
        <FeaturedResearchCaseStudy />
        <SelectedProjects />
        <CourseworkMatrix />
        <AcademicCV onOpenCV={handleOpenCV} />
        <LetsTalkResearch />
      </main>

      <Footer />
    </div>
  );
}
