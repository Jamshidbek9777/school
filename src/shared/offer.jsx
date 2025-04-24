import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  BookOpenCheck,
  Users,
  School,
  Paintbrush,
  Dumbbell,
} from "lucide-react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeOffer = () => {
  const { t } = useTranslation();

  const offerings = [
    {
      icon: ShieldCheck,
      title: t("offer3"),
      description: t("offer4"),
      bg: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: BookOpenCheck,
      title: t("offer5"),
      description: t("offer6"),
      bg: "bg-red-100 text-red-700",
    },
    {
      icon: Users,
      title: t("offer7"),
      description: t("offer8"),
      bg: "bg-gray-100 text-black",
    },
    {
      icon: School,
      title: t("offer9"),
      description: t("offer10"),
      bg: "bg-red-100 text-red-700",
    },
    {
      icon: Paintbrush,
      title: t("offer11"),
      description: t("offer12"),
      bg: "bg-gray-100 text-black",
    },
    {
      icon: Dumbbell,
      title: t("offer13"),
      description: t("offer14"),
      bg: "bg-yellow-100 text-yellow-700",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-50 w-full">
      <Wrapper>
        <section className="py-20 px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12 max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4" data-aos="fade-up">
              🎓 {t("offer1")}
            </h2>
            <p
              className="text-gray-600 text-base sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {t("offer2")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="cursor-pointer group bg-white rounded-3xl p-6 sm:p-8 border border-transparent shadow-sm
                           hover:shadow-xl hover:border-yellow-400 transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${item.bg}
                              transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3`}
                >
                  <item.icon size={26} />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900
                               transition-colors duration-300 ease-in-out group-hover:text-yellow-600">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default WhatWeOffer;
