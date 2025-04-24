import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HeroBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen w-full bg-[#0f1e35] text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg.jpg"
          alt="Children learning"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute -top-24 -left-24 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-yellow-300 to-red-400 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10 min-h-screen max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl text-center sm:text-left bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-md">
            {t("hero1")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6">
            {t("hero2")}
          </p>
          <div className="flex justify-center sm:justify-start">
            <a
              href="#admission"
              className="inline-block bg-yellow-400 text-black font-semibold text-sm sm:text-base py-3 px-6 rounded-xl hover:bg-yellow-300 transition duration-300 shadow-md"
            >
              {t("hero3")}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
