import { useRef } from "react";
import { imageUrl } from "../imageUrl";

// Array of images
const images = [
  imageUrl.k1,
  imageUrl.k2,
  imageUrl.k3,
  imageUrl.k4,
  imageUrl.k5,
  imageUrl.k6,
];

const Knowledge = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const scrollAmount = 300;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full mb-6 relative">
      {/* Banner Image */}
      <div className="w-full overflow-hidden">
        <img
          src={imageUrl.knowledgeImage}
          alt="FAQ Banner"
          className="w-full h-auto object-cover sm:h-[40vh]"
        />
      </div>

      {/* Carousel */}
      <div className="relative w-full mt-6">
        {/* Scrollable Grid */}
        <div
          ref={carouselRef}
          className="overflow-x-auto scroll-smooth scrollbar-hide"
        >
          <div
            className="
              grid grid-flow-col auto-cols-[90%] sm:auto-cols-[50%] md:auto-cols-[33.33%] xl:auto-cols-[25%] 
              gap-4 px-6 py-4
            "
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Knowledge ${idx}`}
                className=" w-full object-cover"
              />
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full shadow z-10"
        >
          <img src={imageUrl.arrow} alt="Previous" className="w-6 h-6 rotate-180" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollCarousel("right")}
          className="absolute top-1/2 right-2 transform -translate-y-1/2  p-2 rounded-full shadow z-10"
        >
          <img src={imageUrl.arrow} alt="Next" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Knowledge;
