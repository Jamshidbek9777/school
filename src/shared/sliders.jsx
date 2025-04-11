import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/img/germany1.jpg",
    title: "Welcome to Our School",
    desc: "Empowering students through our German partnership.",
  },
  {
    image: "/img/germany1.jpg",
    title: "Modern Classrooms",
    desc: "Inspired by European standards of education.",
  },
  {
    image: "/img/germany1.jpg",
    title: "Global Opportunities",
    desc: "International exposure with German collaboration.",
  },
];

const Sliders = () => {
  return (
    <div className="w-full pt-28">
      <Swiper
        modules={[Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[400px] lg:h-[500px] rounded-lg"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-white text-2xl lg:text-4xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-white text-base lg:text-lg">{slide.desc}</p>
                <div className="w-24 h-1 mt-4 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sliders;
