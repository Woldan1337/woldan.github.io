import React from 'react';
import { Music, ExternalLink } from 'lucide-react';

const MusicSection = () => {
  return (
    <section id="music" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Müzik <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Koleksiyonum</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            En sevilen şarkılarımı dinleyebilir ve müzikal yolculuğuma ortak olabilirsiniz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <Music className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-semibold text-white">Spotify Artist Profili</h3>
              <ExternalLink className="w-5 h-5 text-gray-400 ml-3" />
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                data-testid="embed-iframe" 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/artist/4dxKnMYeoetE56hOoKpCFP?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>
            
            <p className="text-center text-gray-400 mt-6">
              Spotify'da beni takip ederek yeni şarkılarımdan haberdar olabilirsiniz!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
