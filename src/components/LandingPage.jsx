import React from 'react';
import { imageUrl } from '../imageUrl';
const LandingPage = () => {
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  return (
    <section 
      className="w-full h-screen relative bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${imageUrl.landingImage})` 
      }}
    >
      {/* Hero Content */}
      <div className="text-center text-white">
        <div className="flex items-center justify-center gap-4 mb-4">
          <h1 className="text-7xl font-black">ICAI</h1>
          <div className="text-center">
            <div className="text-8xl font-bold">foÙkh; Kku</div>
            <div className="text-8xl font-bold">dk vfHk;ku</div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
        {paginationDots.map((dot, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              dot.active ? 'bg-orange-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default LandingPage;