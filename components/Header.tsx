import React, { useState, useEffect } from 'react';
import { useLocalization } from '../context/LocalizationContext';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLocalization();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { href: "#about", label: t.header.about },
    { href: "#service", label: t.header.service },
    { href: "#gallery", label: t.header.gallery },
    { href: "#news", label: t.header.news },
    { href: "#contact", label: t.header.contact },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-2xl font-bold tracking-widest text-gray-200 hover:text-white transition-colors">
          Milztech
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm font-light text-gray-400 hover:text-white transition-colors tracking-wider">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center">
           <button onClick={() => setLanguage(language === 'en' ? 'ja' : 'en')} className="text-sm font-light text-gray-400 hover:text-white transition-colors tracking-wider border border-gray-600 rounded-full px-3 py-1">
            {language === 'en' ? 'JA' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;