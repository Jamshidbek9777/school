import React from "react";
import Wrapper from "../shared/wrapper";

const galleryImages = [
  "/img/life2.jpg",
  "/img/life.webp",
  "/img/life.webp",
  "/img/life2.jpg",
  "/img/life2.jpg",
  "/img/life.webp",
  "/img/life.webp",
  "/img/life2.jpg",
];

const Gallery = () => {
  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        {/* Hero Header */}
        <section className="relative bg-gradient-to-r from-[#E6B822] to-[#fdd835] text-white py-28 rounded-lg shadow-md mb-12 overflow-hidden">
          <img
            src="/img/line1.svg"
            alt="Top Left Illustration"
            className="absolute top-[-20px] left-[-20px] w-32 opacity-70 rotate-[-15deg]"
          />
          <img
            src="/img/line2.svg"
            alt="Bottom Right Illustration"
            className="absolute bottom-[-20px] right-[-20px] w-32 opacity-80 rotate-[10deg]"
          />
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              School Life
            </h1>
            <p className="text-lg text-black">
              A visual glimpse into the vibrant life of our students — learning,
              growing, and having fun together.
            </p>
          </div>
        </section>

        <section className="">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-md group cursor-pointer break-inside-avoid"
              >
                <img
                  src={img}
                  alt={`School life ${i + 1}`}
                  className="w-full object-cover rounded-xl group-hover:scale-[1.03] transition-transform duration-300"
                  style={{
                    height: `${250 + (i % 3) * 50}px`,
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Gallery;
