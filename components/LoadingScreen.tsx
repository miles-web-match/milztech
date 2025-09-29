
import React from 'react';

interface LoadingScreenProps {
  loading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ loading }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#0a0a0a] z-50 flex items-center justify-center transition-opacity duration-1000
      ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <h1 className="text-4xl font-light tracking-[0.5em] text-gray-200 animate-pulse">
        MILZTECH
      </h1>
    </div>
  );
};

export default LoadingScreen;
