import { useEffect, useState } from "react";

// Import necessary libraries
const Carousel = () => {
    const images = [
          'https://img.lazcdn.com/us/domino/11f171a9-c488-4c45-9607-01975d0175c3_BD-1976-688.jpg_2200x2200q80.jpg',
          'https://woodmart.xtemos.com/makeup/wp-content/uploads/sites/22/2024/10/c2-blg-1.jpg',
          'https://woodmart.xtemos.com/makeup/wp-content/uploads/sites/22/2024/10/c2-blg-4.jpg',
        ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
    // Auto-change slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
    
        return () => clearInterval(interval);
      }, [images.length]);
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Image container */}
      <div className="overflow-hidden rounded-lg shadow-md">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        &#8249;
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700"
      >
        &#8250;
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

