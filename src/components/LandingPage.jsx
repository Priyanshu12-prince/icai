import React, { useState, useEffect } from 'react';
import { imageUrl } from '../imageUrl';
import "../css/header.css"

const LandingPage = () => {
  // Carousel data with images and corresponding text
  const carouselData = [
    {
      image: imageUrl.landingImage,
      text1: "वित्तीय ज्ञान",
      text2: "ICAI का अभिमान"
    },
    {
      image: imageUrl.bgImage3,
      text1: "Overview of Banking Functions",
      text2: "& Loan Schemes"
    },
    // Add more slides as needed
    {
      image: imageUrl.landingImage, // You can replace with another image
      text1: "वित्तीय ज्ञान",
      text2: "ICAI का अभिमान"
    },
    {
      image: imageUrl.bgImage3,
      text1: "Overview of Banking ",
      text2: " Functions & Loan Schemes"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [carouselData.length]);

  // Create pagination dots based on carousel data length
  const paginationDots = carouselData.map((_, index) => ({
    active: index === currentSlide
  }));

  return (
    <section 
      className="w-full h-[90vh] relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
      style={{ 
        backgroundImage: `url(${carouselData[currentSlide].image})` 
      }}
    >
      {/* Hero Content */}
      <div className="text-center text-white">
        <div className="flex items-center justify-center gap-4 mb-4">
          
          <div className="text-center mt-[50px] px-10">
            <div className="font-bold imageText mb-[20px] transition-opacity duration-500">
              {carouselData[currentSlide].text1}
            </div>
            <div className="font-bold imageText transition-opacity duration-500">
              {carouselData[currentSlide].text2}
            </div>
          </div>
            
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-1">
        {paginationDots.map((dot, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-colors duration-300 cursor-pointer ${
              dot.active ? 'bg-orange-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)} // Manual navigation
          />
        ))}
      </div>
    </section>
  );
};

export default LandingPage;

