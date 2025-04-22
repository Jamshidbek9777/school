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
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Wrapper>
      <div className="my-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4" data-aos="fade-up">
            🎓 {t("offer1")}
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("offer2")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${item.bg}`}
              >
                <item.icon size={26} />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-black">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default WhatWeOffer;
