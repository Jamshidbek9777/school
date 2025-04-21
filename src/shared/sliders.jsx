import React from "react";
import Wrapper from "./wrapper";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0f1e35]">
      <div className="absolute inset-0 z-0">
        <img
          src="/img/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-repeat opacity-10" />
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-yellow-300 to-red-400 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-20" />
      </div>

      <Wrapper>
        <div className="relative z-10 min-h-screen pt-6 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto flex flex-col items-center
             bg-white/10 backdrop-blur-md p-8 rounded-xl text-white shadow-lg"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight drop-shadow-md">
              Ilm sari ilk qadamingizni <br /> biz bilan qo‘ying!
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 drop-shadow">
              DeutschSmart maktabi sizga Germaniyaga yo‘l ochuvchi sifatli
              ta'lim, madaniyat va zamonaviy yondashuvlarni taklif etadi.
            </p>
            <div className="w-28 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-black rounded mb-6" />
          </motion.div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
