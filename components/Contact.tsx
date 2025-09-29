import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { AnimatedSection } from './About';

const Contact: React.FC = () => {
  // FIX: Destructure `language` from `useLocalization` to use it in the component.
  const { t, language } = useLocalization();

  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="container mx-auto px-6">
        <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="h-96 lg:h-full w-full">
                    <img src="https://picsum.photos/seed/milztech-map/800/600" alt="Map to Milztech office" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-serif tracking-widest mb-8">
                        {t.contact.title}
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold tracking-wider text-gray-400 mb-1">{language === 'ja' ? '住所' : 'ADDRESS'}</h3>
                            <p className="text-lg text-gray-300 font-light">{t.contact.address}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold tracking-wider text-gray-400 mb-1">{language === 'ja' ? 'メール' : 'EMAIL'}</h3>
                            <a 
                                href={`mailto:${t.contact.email}`} 
                                className="text-lg text-gray-300 font-light hover:text-white transition-colors"
                            >
                                {t.contact.email}
                            </a>
                        </div>
                         <div>
                            <h3 className="font-semibold tracking-wider text-gray-400 mb-1">{t.contact.getInTouch}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;