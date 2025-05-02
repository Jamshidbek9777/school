import React from "react";

const HeroNews = ({ backgroundImage }) => {
  return (
    <section
      className="relative bg-cover bg-center py-20 sm:py-28 md:py-48 rounded-lg shadow-md mb-16 overflow-hidden px-4"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
      loading="lazy"
    ></section>
  );
};

export default HeroNews;
