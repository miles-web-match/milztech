
import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from './context/LocalizationContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Gallery from './components/Gallery';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [loading, setLoading] = useState(() => typeof window !== 'undefined');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <LocalizationProvider>
      <div className="bg-[#0a0a0a] text-gray-200">
        <LoadingScreen loading={loading} />
        <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
          <Header />
          <main>
            <Hero />
            <About />
            <Service />
            <Gallery />
            <News />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default App;
