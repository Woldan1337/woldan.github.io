import React from 'react';
import { Play, Award, Users, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Artist Profile" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto border-4 border-purple-400 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Müzik <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Sanatçısı</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Müziğin evrensel dilini kullanarak kalplere dokunan melodiler yaratıyorum. 
            Her nota bir hikaye, her şarkı bir yolculuk.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-2 mx-auto">
                <Play className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-semibold">100K+</p>
              <p className="text-gray-400 text-sm">Dinlenme</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-2 mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-semibold">50K+</p>
              <p className="text-gray-400 text-sm">Takipçi</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-2 mx-auto">
                <Award className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-semibold">25+</p>
              <p className="text-gray-400 text-sm">Şarkı</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-2 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-semibold">1M+</p>
              <p className="text-gray-400 text-sm">Beğeni</p>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            Müziklerimi Keşfet
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default Hero;
