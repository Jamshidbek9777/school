import React from "react";
import Wrapper from "./wrapper";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0f1e35]">
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* SVG Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-repeat opacity-10" />
        {/* Light gradient circle blur */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-yellow-300 to-red-400 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Foreground Content */}
      <Wrapper>
        <div className="relative z-10 min-h-screen pt-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight drop-shadow-md">
              Ilm sari ilk qadamingizni <br /> biz bilan qo‘ying!
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 drop-shadow">
              DeutschSmart maktabi sizga Germaniyaga yo‘l ochuvchi sifatli
              ta'lim, madaniyat va zamonaviy yondashuvlarni taklif etadi.
            </p>
            <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-black rounded mb-6 mx-auto lg:mx-0" />
            <button className="group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition shadow-md flex items-center gap-2 mx-auto lg:mx-0">
              Batafsil ma'lumot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full lg:w-[50%] flex justify-center items-center"
          >
            <img
              src="/img/hero.png"
              alt="Hero Illustration"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain"
            />
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
