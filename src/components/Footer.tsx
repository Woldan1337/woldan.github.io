import React from 'react';
import { Music, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Music className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">ArtistName</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Müziğin evrensel dilini kullanarak kalplere dokunan melodiler yaratıyorum. 
              Her nota bir hikaye, her şarkı bir yolculuk.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Ana Sayfa</a></li>
              <li><a href="#biography" className="text-gray-400 hover:text-purple-400 transition-colors">Biografi</a></li>
              <li><a href="#music" className="text-gray-400 hover:text-purple-400 transition-colors">Müzik</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Müzik Platformları</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Spotify</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Apple Music</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">YouTube Music</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">SoundCloud</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 ArtistName. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-gray-400 mr-2">Müzikle yapıldı</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
