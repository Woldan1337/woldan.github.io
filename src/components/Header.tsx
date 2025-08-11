import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Music className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">ArtistName</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-purple-400 transition-colors">Ana Sayfa</a>
            <a href="#biography" className="text-white hover:text-purple-400 transition-colors">Biografi</a>
            <a href="#music" className="text-white hover:text-purple-400 transition-colors">Müzik</a>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors">İletişim</a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-purple-400 transition-colors">Ana Sayfa</a>
              <a href="#biography" className="text-white hover:text-purple-400 transition-colors">Biografi</a>
              <a href="#music" className="text-white hover:text-purple-400 transition-colors">Müzik</a>
              <a href="#contact" className="text-white hover:text-purple-400 transition-colors">İletişim</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
