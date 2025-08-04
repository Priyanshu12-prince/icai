import React from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Leadership from './components/Leadership';
import KnowledgeHub from './components/KnowledgeHub';
import GallerySection from './components/GallerySection';
import LearnAndPlay from './components/LearnAndPlay';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <LandingPage />
      <Leadership />
      <Calculator />
      <KnowledgeHub />
      <GallerySection />
      <LearnAndPlay />
      <FAQ />
          <Footer/>
    </div>
  );
}

export default App;