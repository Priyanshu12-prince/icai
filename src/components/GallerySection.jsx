import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=623&h=200&fit=crop",
      alt: "Gallery Image 1",
      className: "col-span-2 row-span-1",
    },
    {
      src: "https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      alt: "Gallery Image 2",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.pexels.com/photos/3184467/pexels-photo-3184467.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      alt: "Gallery Image 3",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      alt: "Gallery Image 4",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.pexels.com/photos/3184469/pexels-photo-3184469.jpeg?auto=compress&cs=tinysrgb&w=300&h=421&fit=crop",
      alt: "Gallery Image 5",
      className: "col-span-1 row-span-2",
    },
    {
      src: "https://images.pexels.com/photos/3184470/pexels-photo-3184470.jpeg?auto=compress&cs=tinysrgb&w=623&h=200&fit=crop",
      alt: "Gallery Image 6",
      className: "col-span-2 row-span-1",
    },
    {
      src: "https://images.pexels.com/photos/3184471/pexels-photo-3184471.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      alt: "Gallery Image 7",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.pexels.com/photos/3184472/pexels-photo-3184472.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      alt: "Gallery Image 8",
      className: "col-span-1 row-span-1",
    },
    {
      src: "https://images.pexels.com/photos/3184473/pexels-photo-3184473.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      alt: "Gallery Image 9",
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