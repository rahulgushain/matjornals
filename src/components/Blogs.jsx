"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import data from "../data";
import Blog from "./blogCard";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

export default function Blogs() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto py-10 relative">
      {/* Swiper Container */}
      <Swiper
        spaceBetween={20}
        loop={true}
        speed={1500} // Speed for a smooth transition
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile: 1 card
          768: { slidesPerView: 2 }, // Tablet: 2 cards
          1024: { slidesPerView: 3 }, // Desktop: 3 cards
        }}
        modules={[Autoplay, Navigation]}
        className="w-full"
        onSwiper={setSwiperInstance}
      >
        {/* Duplicate blogs for infinite loop effect */}
        {[...data.blog, ...data.blog].map((blog, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Blog data={blog} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left & Right Buttons */}
      <button
        className="prev-btn absolute left-[-30px] xl:left-[-100px] top-1/2 transform -translate-y-1/2 text-gray-600 text-4xl p-3 rounded-full shadow-md  transition z-10"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <FaCircleArrowLeft />
      </button>
      <button
        className="next-btn absolute right-[-30px] xl:right-[-100px] top-1/2 transform -translate-y-1/2  text-gray-600 text-4xl p-3 rounded-full shadow-md transition z-10"
        onClick={() => swiperInstance?.slideNext()}
      >
        <FaCircleArrowRight />
      </button>
    </div>
  );
}
