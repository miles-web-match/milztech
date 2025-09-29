import React from 'react';
import { useLocalization } from '../context/LocalizationContext';

const Footer: React.FC = () => {
  const { t } = useLocalization();
  
  const navLinks = [
    { href: "#about", label: t.header.about },
    { href: "#service", label: t.header.service },
    { href: "#gallery", label: t.header.gallery },
    { href: "#news", label: t.header.news },
    { href: "#contact", label: t.header.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-16 bg-[#101010] border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center">
            <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-2xl font-bold tracking-widest text-gray-200">
              Milztech
            </a>
          </div>
          <nav className="flex flex-col space-y-2 items-center">
             {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm font-light text-gray-400 hover:text-white transition-colors tracking-wider">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-end justify-center md:justify-end">
            <p className="text-xs text-gray-600 tracking-widest">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;