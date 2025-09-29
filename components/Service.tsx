import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { AnimatedSection } from './About';

const ServiceItem: React.FC<{ title: string; description: string; imageUrl: string; }> = ({ title, description, imageUrl }) => (
    <AnimatedSection>
        <div className="h-[70vh] relative flex items-center justify-center text-center text-white" >
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="absolute inset-0 bg-black/70"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h3 className="text-4xl md:text-5xl font-serif mb-4">{title}</h3>
            <p className="font-light text-gray-300 leading-relaxed text-lg">{description}</p>
            </div>
        </div>
    </AnimatedSection>
);

const Service: React.FC = () => {
  const { t } = useLocalization();
  const services = [
      { 
          ...t.service.ai, 
          imageUrl: "https://picsum.photos/seed/milztech-ai/1200/800" 
      },
      { 
          ...t.service.photoMovie, 
          imageUrl: "https://picsum.photos/seed/milztech-photo/1200/800"
      },
      { 
          ...t.service.tour, 
          imageUrl: "https://picsum.photos/seed/milztech-tour/1200/800"
      },
  ];

  return (
    <section id="service" className="py-24 md:py-32 bg-[#101010]">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif tracking-widest mb-16">
                {t.service.title}
            </h2>
        </AnimatedSection>
      </div>
      <div className="space-y-24">
        {services.map((service, index) => (
            <ServiceItem key={index} title={service.title} description={service.description} imageUrl={service.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default Service;