import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Biography from './components/Biography';
import MusicSection from './components/MusicSection';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <Hero />
      <Biography />
      <MusicSection />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
