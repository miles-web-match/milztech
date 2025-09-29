import React, { FC, ReactNode } from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { useInView } from '../hooks/useInView';

export const AnimatedSection: FC<{ children: ReactNode, className?: string }> = ({ children, className }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div 
            ref={ref} 
            className={`${className || ''} transition-all duration-1000 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {children}
        </div>
    );
};

const About: React.FC = () => {
  const { t } = useLocalization();

  return (
    <section id="about" className="py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="grid md:grid-cols-5 gap-16 items-start">
            <div className="md:col-span-1 relative h-full flex justify-center md:justify-start">
              <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase text-gray-400 md:absolute md:transform md:-rotate-90 md:origin-top-left md:top-0 md:left-8">
                {t.about.title}
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="max-w-3xl text-base md:text-lg font-light leading-loose text-gray-400">
                {t.about.description}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;