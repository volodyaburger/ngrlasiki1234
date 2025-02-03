import React from 'react';
import { ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Main Title */}
      <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-widest opacity-0 animate-fade-in">
        PDIDDY SYSTEM OUT
      </h1>

      {/* SoundCloud Widget */}
      <div className="w-full max-w-3xl mb-8 opacity-0 animate-fade-in-delay">
        <iframe 
          width="100%" 
          height="450" 
          scrolling="no" 
          frameBorder="no" 
          allow="autoplay" 
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1963038484%3Fsecret_token%3Ds-kw6ReUf86ig&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          className="rounded-lg shadow-2xl shadow-zinc-900/50"
        ></iframe>
      </div>

      {/* Telegram Button */}
      <a
        href="https://t.me/pdiddysystem"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 text-xl font-bold transition-all duration-500 hover:scale-105 shadow-lg opacity-0 animate-fade-in-delay-2"
      >
        Перейти в Telegram
        <ExternalLink className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export default App;