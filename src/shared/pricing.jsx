import React, { useEffect } from "react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const pricingPlans = [
  {
    name: "Basic",
    price: "€49/mo",
    description: "Perfect for starting your learning journey",
    borderColor: "border-gray-300",
    buttonColor: "bg-black text-white",
    features: [
      "Access to 2 core courses",
      "Monthly progress report",
      "Support during school hours",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "€89/mo",
    description: "Includes German training & live support",
    borderColor: "border-red-600",
    buttonColor: "bg-red-600 text-white",
    features: [
      "Access to 4 courses",
      "German language training (A1-A2)",
      "Weekly live sessions",
      "Email & phone support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "€129/mo",
    description: "Full access with mentorship & certificate",
    borderColor: "border-yellow-400",
    buttonColor: "bg-yellow-400 text-black",
    features: [
      "Full course access (STEM + German B1-B2)",
      "1-on-1 mentorship",
      "Priority support",
      "Certificate on completion",
    ],
    highlight: false,
  },
];

const PricingSection = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Wrapper>
      <section className="py-16 mt-10 sm:py-20 bg-gray-50 rounded-3xl">
  <div className="text-center mb-14 px-4 sm:px-6 lg:px-8" data-aos="fade-up">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
      {t("pricing3")}
    </h2>
    <p className="text-base sm:text-lg text-gray-600">{t("pricing4")}</p>
  </div>

  <div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    {pricingPlans.map((plan, index) => (
      <div
        key={index}
        className={`relative border-2 rounded-3xl p-6 sm:p-8 bg-white transition-all duration-300
                    hover:shadow-xl hover:-translate-y-2 ${plan.borderColor}
                    ${plan.highlight ? "scale-105 shadow-lg z-10" : ""}`}
        data-aos="zoom-in"
        data-aos-delay={index * 100}
      >
        {plan.highlight && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {t("Best Value")}
          </div>
        )}

        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
          {plan.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{plan.description}</p>

        <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          {plan.price}
        </div>

        <button
          className={`w-full py-3 rounded-xl font-medium text-base ${plan.buttonColor} hover:opacity-90 transition cursor-pointer`}
        >
          {t("pricing1")}
        </button>

        <div className="mt-6 text-gray-700 text-sm">
          <p className="font-semibold mb-2">{t("pricing2")}:</p>
          <ul className="space-y-3">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✔️</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>

    </Wrapper>
  );
};

export default PricingSection;
