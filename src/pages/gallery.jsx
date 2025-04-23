import React from "react";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";
import HeroSection from "../shared/hero";

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
        <HeroSection
          backgroundImage="/img/aboutBg.JPG"
          title={t("nav4")}
          description={t("gallery1")}
        />

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
