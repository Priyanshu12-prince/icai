import React from 'react';
import { imageUrl } from '../imageUrl';
import "../css/header.css"
const LandingPage = () => {
  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  return (
    <section 
      className="w-full h-[90vh] relative bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${imageUrl.landingImage})` 
      }}
    >
      {/* Hero Content */}
      <div className="text-center text-white">
        <div className="flex items-center justify-center gap-4 mb-4">
          
          <div className="text-center mt-[50px]">
            <div className="text-8xl font-bold imageText mb-[20px]">वित्तीय ज्ञान </div>
            <div className="text-8xl font-bold imageText">ICAI का अभिमान </div>
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