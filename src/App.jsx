import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchAtAGlance from './components/ResearchAtAGlance';
import FeaturedResearchCaseStudy from './components/FeaturedResearchCaseStudy';
import SelectedProjects from './components/SelectedProjects';
import AcademicCV from './components/AcademicCV';
import LetsTalkResearch from './components/LetsTalkResearch';
import Footer from './components/Footer';
import { initGA } from './utils/analytics';

export default function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <main style={{ flex: 1 }}>
        <Hero />
        <ResearchAtAGlance />
        <FeaturedResearchCaseStudy />
        <SelectedProjects />
        <AcademicCV />
        <LetsTalkResearch />
      </main>

      <Footer />
    </div>
  );
}
