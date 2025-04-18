import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Wrapper from "./wrapper";

const slides = [
  {
    image: "/img/banner1.webp",
    title: "DeutschSmart maktabi web sahifasiga xush kelishsiz",
    desc: "Bizning maktab – bu zamonaviy ta'lim, tarbiya va taraqqiyot sari yo‘naltirilgan bilim maskani.",
  },
  {
    image: "/img/banner2.jpg",
    title: "Maktabimiz imkoniyatlari",
    desc: "Bizning maktab – nafaqat ta’lim beruvchi, balki farzandingizning iste’dodi ochiladigan, qiziqishlari rivojlanadigan va hayotga tayyorlanadigan makon.",
  },
];

const Sliders = () => {
  return (
    <Wrapper>
      <div className="w-full pt-28">
        <Swiper
          modules={[Pagination, Autoplay]}
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
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent rounded-lg" />

                <div className="absolute bottom-10 left-10 z-10 max-w-xl bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-6 shadow-lg">
                  <h2 className="text-white text-2xl lg:text-3xl font-bold mb-3 drop-shadow-sm">
                    {slide.title}
                  </h2>
                  <p className="text-white text-base lg:text-lg drop-shadow-sm">
                    {slide.desc}
                  </p>
                  <div className="w-24 h-1 mt-4 bg-gradient-to-r from-yellow-400 via-red-600 to-black rounded" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default Sliders;
