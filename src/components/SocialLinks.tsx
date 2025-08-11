import React from 'react';
import { 
  MessageCircle, 
  Instagram, 
  Youtube, 
  Music, 
  Twitch,
  Twitter,
  Facebook,
  Mail,
  ExternalLink
} from 'lucide-react';

const SocialLinks = () => {
  const socialPlatforms = [
    { name: 'Discord', icon: MessageCircle, url: '#', color: 'bg-indigo-600 hover:bg-indigo-700', followers: '5.2K Üye' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'bg-pink-600 hover:bg-pink-700', followers: '28K Takipçi' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'bg-red-600 hover:bg-red-700', followers: '15K Abone' },
    { name: 'TikTok', icon: Music, url: '#', color: 'bg-black hover:bg-gray-800', followers: '42K Takipçi' },
    { name: 'Twitch', icon: Twitch, url: '#', color: 'bg-purple-600 hover:bg-purple-700', followers: '8.5K Takipçi' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'bg-sky-600 hover:bg-sky-700', followers: '12K Takipçi' },
    { name: 'Facebook', icon: Facebook, url: '#', color: 'bg-blue-600 hover:bg-blue-700', followers: '18K Takipçi' },
    { name: 'Email', icon: Mail, url: 'mailto:contact@example.com', color: 'bg-gray-600 hover:bg-gray-700', followers: 'İletişim' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Benimle <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Bağlan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Sosyal medya hesaplarımdan beni takip edebilir, güncel içeriklerime ulaşabilirsiniz.
          </p>
        </div>

        {/* Sağ tarafta sabit sosyal medya linkleri */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
          <div className="flex flex-col space-y-4">
            {socialPlatforms.slice(0, 6).map((platform) => {
              const IconComponent = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 ${platform.color} rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group`}
                  title={platform.name}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                  <div className="absolute right-16 bg-slate-800 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                    <div className="text-sm font-semibold">{platform.name}</div>
                    <div className="text-xs text-gray-300">{platform.followers}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Ana sosyal medya grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            return (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className={`w-16 h-16 ${platform.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{platform.followers}</p>
                <div className="flex items-center justify-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm mr-1">Ziyaret Et</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">İşbirliği & İletişim</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Müzik projeleriniz, konser organizasyonları veya iş teklifleri için 
              benimle iletişime geçmekten çekinmeyin. Her zaman yeni fırsatlara açığım!
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5 mr-2" />
              E-posta Gönder
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
