import React from "react";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <section
          className="relative bg-cover bg-center py-36 rounded-lg shadow-md mb-12 overflow-hidden"
          style={{ backgroundImage: "url('/img/aboutBg.JPG')" }}
          loading="lazy"
        >
          <img
            src="/img/line1.svg"
            alt="Top Left Illustration"
            className="absolute top-[-20px] left-[-20px] w-32 opacity-70 rotate-[-15deg]"
            loading="lazy"
          />

          <img
            src="/img/line2.svg"
            alt="Bottom Right Illustration"
            className="absolute bottom-[-20px] right-[-20px] w-32 opacity-80 rotate-[10deg]"
            loading="lazy"
          />

          <div className="relative z-10 flex justify-center">
            <div className="backdrop-blur-md bg-white/30 px-10 py-8 rounded-xl max-w-3xl text-center shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                {t("nav4")}
              </h1>
              <p className="text-lg text-gray-800">{t("gallery1")}</p>
            </div>
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
