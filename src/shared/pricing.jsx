import React, { useEffect, useState } from "react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { useTariffs } from "../queries/useQueries";

const PricingSection = () => {
  const { t, i18n } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const { data = [] } = useTariffs(i18n.language);
  console.log("Price data", data);

  const pricingPlans = data.length
    ? [
        {
          name: data[0].subType,
          price: new Intl.NumberFormat("ru-RU").format(data[0].moprice),
          period: t("pricing5"),
          description: data[0].description,
          features: ["Chegirma", "Sifatli ta'lim", "Interaktiv darslar"],
          color: "from-gray-800 to-black",
          accent: "gray",
          highlight: false,
        },
        {
          name: data[1].subType,
          price: new Intl.NumberFormat("ru-RU").format(data[1].moprice),
          period: t("pricing5"),
          description: data[1].description,
          features: [
            "Tajribali o‘qituvchilar",
            "Interaktiv darslar",
            "Kichik guruhlar",
          ],
          color: "from-red-500 to-red-600",
          accent: "red",
          highlight: true,
        },
        {
          name: data[2].subType,
          price: new Intl.NumberFormat("ru-RU").format(data[2].moprice),
          period: t("pricing5"),
          description: data[2].description,
          features: [
            "Germaniya standartlari",
            "Zamonaviy metodika",
            "Kichik guruhlarda ta’lim",
          ],
          color: "from-amber-400 to-yellow-500",
          accent: "yellow",
          highlight: false,
        },
        {
          name: data[3].subType,
          price: new Intl.NumberFormat("ru-RU").format(data[3].moprice),
          period: t("pricing5"),
          description: data[3].description,
          features: [
            "Yangi fanlar",
            "Davlat standartlari",
            "Ta’lim va tarbiya",
          ],
          color: "from-gray-800 to-black",
          accent: "gray",
          highlight: false,
        },
        {
          name: data[4].subType,
          price: new Intl.NumberFormat("ru-RU").format(data[4].moprice),
          period: t("pricing5"),
          description: data[4].description,
          features: ["Fanlarga chuqur yondashuv", "Pedagoglar nazorati"],
          color: "from-red-500 to-red-600",
          accent: "red",
          highlight: false,
        },
        {
          name: data[5].subType,
          price: new Intl.NumberFormat("ru-RU").format(data[5].moprice),
          period: t("pricing5"),
          description: data[5].description,
          features: [
            "Yo‘nalishlar bo‘yicha",
            "Abituriyent dasturi",
            "Test tayyorgarligi",
          ],
          color: "from-amber-400 to-yellow-500",
          accent: "yellow",
          highlight: false,
        },
        {
          name: data[6].subType,
          price: new Intl.NumberFormat("ru-RU").format(data[6].moprice),
          period: t("pricing5"),
          description: data[6].description,
          features: ["Sertifikatlar"],
          color: "from-gray-800 to-black",
          accent: "gray",
          highlight: false,
        },
      ]
    : [];

  const accentClasses = {
    gray: {
      checkBg: "bg-gray-50 text-gray-500",
      button: "bg-gray-800 text-white hover:bg-gray-900",
      border: "border-gray-500 text-gray-700 hover:bg-gray-50",
    },
    red: {
      checkBg: "bg-red-50 text-red-500",
      button: "bg-red-500 text-white hover:bg-red-600",
      border: "border-red-500 text-red-700 hover:bg-red-50",
    },
    yellow: {
      checkBg: "bg-yellow-50 text-yellow-500",
      button: "bg-yellow-400 text-white hover:bg-yellow-500",
      border: "border-yellow-500 text-yellow-700 hover:bg-yellow-50",
    },
    indigo: {
      checkBg: "bg-indigo-50 text-indigo-500",
      button: "bg-indigo-500 text-white hover:bg-indigo-600",
      border: "border-indigo-500 text-indigo-700 hover:bg-indigo-50",
    },
    pink: {
      checkBg: "bg-pink-50 text-pink-500",
      button: "bg-pink-500 text-white hover:bg-pink-600",
      border: "border-pink-500 text-pink-700 hover:bg-pink-50",
    },
    green: {
      checkBg: "bg-green-50 text-green-500",
      button: "bg-green-500 text-white hover:bg-green-600",
      border: "border-green-500 text-green-700 hover:bg-green-50",
    },
    blue: {
      checkBg: "bg-blue-50 text-blue-500",
      button: "bg-blue-500 text-white hover:bg-blue-600",
      border: "border-blue-500 text-blue-700 hover:bg-blue-50",
    },
  };

  const visiblePlans = showAll ? pricingPlans : pricingPlans.slice(0, 3);

  return (
    <Wrapper>
      <div id="pricing" className="py-10 md:py-20">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("prHeader1")}
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            {t("prHeader2")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {visiblePlans.map((plan, index) => (
            <div
              key={index}
              className={clsx(
                "relative rounded-2xl shadow-xl overflow-hidden transition-all duration-500 flex flex-col",
                plan.highlight
                  ? "md:-translate-y-4 md:scale-105 z-10"
                  : "hover:-translate-y-2"
              )}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={clsx("bg-gradient-to-br text-white p-8", plan.color)}
              >
                {plan.highlight && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Eng мақбул
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-white/80 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-lg ml-1 opacity-80">{plan.period}</span>
                </div>
              </div>

              <div className="bg-white p-8 flex flex-col flex-grow">
                <a href="/admission" className="mt-auto">
                  <button
                    className={clsx(
                      "w-full py-3.5 rounded-xl font-medium text-base transition transform mt-auto",
                      plan.highlight
                        ? accentClasses[plan.accent]?.button
                        : accentClasses[plan.accent]?.button
                    )}
                  >
                    {t("pricing1")}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium transition"
          >
            {showAll ? t("less") : t("more")}
          </button>
        </div>
        <div className="space-y-4 mb-8 text-gray-700 text-lg leading-relaxed mt-12 max-w-7xl mx-auto text-left">
          <p>{t("prHeader3")}</p>
          <p>{t("prHeader4")}</p>
          <p>{t("prHeader5")}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingSection;
