import React from 'react';
import { imageUrl } from '../imageUrl';
const GallerySection = () => {
  const galleryImages = [
    {
      src: imageUrl.g1,
      alt: "Gallery Image 1",
      className: "col-span-2 row-span-1",
    },
    {
     src: imageUrl.g2,
      alt: "Gallery Image 2",
      className: "col-span-1 row-span-1",
    },
    {
     src: imageUrl.g3,
      alt: "Gallery Image 3",
      className: "col-span-1 row-span-1",
    },
    {
    src: imageUrl.g4,
      alt: "Gallery Image 4",
      className: "col-span-1 row-span-1",
    },
    {
       src: imageUrl.g5,
      alt: "Gallery Image 5",
      className: "col-span-1 row-span-2",
    },
    {
      src: imageUrl.g6,
      alt: "Gallery Image 6",
      className: "col-span-2 row-span-1",
    },
    {
     src: imageUrl.g7,
      alt: "Gallery Image 7",
      className: "col-span-1 row-span-1",
    },
    {
     src: imageUrl.g2,
      alt: "Gallery Image 8",
      className: "col-span-1 row-span-1",
    },
    {
     src: imageUrl.g1,
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="w-full py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Photo Gallery
        </h2>

        <div className="grid grid-cols-4 grid-rows-3 gap-6 h-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className={`${image.className} overflow-hidden rounded-lg`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;