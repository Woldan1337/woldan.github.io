import React from 'react';
import { Star, Mic, Headphones } from 'lucide-react';

const Biography = () => {
  return (
    <section id="biography" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Benim <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Hikayem</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Müzikal Yolculuğum</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Müzikle tanışmam çok erken yaşlarda başladı. 5 yaşımda ilk kez piyano tuşlarına dokunduğumda, 
                bu büyülü dünyanın beni tamamen saracağını bilmiyordum. Yıllar boyunca farklı enstrümanlar 
                öğrenerek müzikal yeteneğimi geliştirdim.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Mic className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Sanatsal Gelişim</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Lise yıllarımda yerel gruplarla çalmaya başladım ve sahne deneyimi kazandım. 
                Üniversitede müzik eğitimi alırken, kendi tarzımı geliştirmeye odaklandım. 
                Pop, rock ve elektronik müziği harmanlayarak kendime özgü bir ses yakalladım.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Headphones className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Profesyonel Kariyerim</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                İlk single'ımı 2020'de yayınladım ve beklenmedik bir ilgi gördü. 
                Sosyal medya platformlarında viral olan şarkılarım sayesinde geniş bir kitle tarafından 
                tanınmaya başladım. Bugüne kadar 25'ten fazla şarkı yayınladım.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-xl font-semibold text-white mb-4">Müzik Felsefem</h3>
              <p className="text-gray-300 leading-relaxed">
                "Müzik, insanların ruhuna dokunan evrensel bir dildir. Her şarkımda bir parçamı paylaşıyor, 
                dinleyicilerimle duygusal bir bağ kuruyorum. Amacım, müziğimle insanların hayatına 
                pozitif bir etki yapmak ve onlara ilham vermek."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
