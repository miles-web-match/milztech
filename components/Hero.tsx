import React from 'react';
import { useLocalization } from '../context/LocalizationContext';

const Hero: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
       <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://picsum.photos/seed/milztech-corp/1920/1080')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-serif tracking-wider">
          {t.hero.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl font-thin tracking-[0.3em] opacity-80">
          {t.hero.subtitle}
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-white/50 animate-scroll-down"></div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
        @keyframes scroll-down {
            0% { transform: scaleY(0); transform-origin: top; }
            50% { transform: scaleY(1); transform-origin: top; }
            51% { transform: scaleY(1); transform-origin: bottom; }
            100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .animate-scroll-down {
            animation: scroll-down 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;