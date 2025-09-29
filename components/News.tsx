import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { AnimatedSection } from './About';

const News: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="news" className="py-24 md:py-32 bg-[#101010]">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-12 text-center">
              {t.news.title}
            </h2>
            <ul className="space-y-6">
              {t.news.items.map((item, index) => (
                <li key={index} className="flex flex-col md:flex-row border-b border-gray-800/50 pb-6">
                  <span className="font-light text-gray-500 w-36 mb-2 md:mb-0">{item.date}</span>
                  <p className="font-light text-gray-300 flex-1">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default News;