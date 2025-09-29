import React from 'react';
import { useLocalization } from '../context/LocalizationContext';
import { AnimatedSection } from './About';

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="overflow-hidden h-full w-full">
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover aspect-auto transform hover:scale-105 transition-transform duration-500 ease-in-out" 
        />
    </div>
);

const Gallery: React.FC = () => {
  const { t } = useLocalization();
  const images = [
      { src: "https://picsum.photos/seed/milztech-gal1/800/1200", alt: "AI visualization", className: "md:col-span-2 md:row-span-2" },
      { src: "https://picsum.photos/seed/milztech-gal2/800/600", alt: "Cinematic shot", className: "md:col-span-2" },
      { src: "https://picsum.photos/seed/milztech-gal3/800/600", alt: "Tour landscape", className: "" },
      { src: "https://picsum.photos/seed/milztech-gal4/800/600", alt: "Tech conference", className: "" },
      { src: "https://picsum.photos/seed/milztech-gal5/800/1200", alt: "Drone footage still", className: "md:row-span-2" },
      { src: "https://picsum.photos/seed/milztech-gal6/800/600", alt: "Exotic location", className: "" },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-serif tracking-widest mb-12 text-center">
            {t.gallery.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:h-[120vh]">
            {images.map((image, index) => (
                <div key={index} className={image.className}>
                    <GalleryImage src={image.src} alt={image.alt} />
                </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="font-light tracking-widest border border-gray-600 hover:bg-white hover:text-black transition-colors text-gray-300 px-10 py-3">
              VIEW MORE
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Gallery;