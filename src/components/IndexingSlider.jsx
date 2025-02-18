"use client";

import { useState, useRef, useEffect } from "react";

const BrandSlider = ({ data = [] }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollRef = useRef(null);
  const speed = 40; // Adjust for faster/slower speed

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && hoveredIndex === null) {
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          // Reset scroll position for infinite effect
          scrollRef.current.scrollLeft = 0;
        }
        scrollRef.current.scrollLeft += 1; // Move 1px at a time for smooth scrolling
      }
    };

    const interval = setInterval(scroll, speed);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-5">
      <div
        ref={scrollRef}
        className="flex gap-10 whitespace-nowrap overflow-hidden"
        onMouseEnter={() => setHoveredIndex(true)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {[...data, ...data].map((brand, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className={`w-32 h-20 object-contain transition-all duration-300 ${
                hoveredIndex === index ? "scale-125 " : "scale-100 "
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
