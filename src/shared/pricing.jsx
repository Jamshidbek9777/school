import React, { useEffect } from "react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css";

const pricingPlans = [
  {
    name: "Basic",
    icon: "🧱",
    price: "€49/mo",
    features: [
      { icon: "📘", text: "Access to 2 core courses" },
      { icon: "📊", text: "Monthly progress report" },
      { icon: "🕐", text: "Support during school hours" },
    ],
  },
  {
    name: "Standard",
    icon: "🚀",
    price: "€89/mo",
    features: [
      { icon: "📘", text: "Access to 4 courses" },
      { icon: "🗣️", text: "German language training (A1-A2)" },
      { icon: "🕒", text: "Weekly live sessions" },
      { icon: "📞", text: "Email & phone support" },
    ],
  },
  {
    name: "Premium",
    icon: "👑",
    price: "€129/mo",
    features: [
      { icon: "🎓", text: "Full course access (incl. STEM & German B1-B2)" },
      { icon: "👨‍🏫", text: "1-on-1 mentorship" },
      { icon: "⚡", text: "Priority support" },
      { icon: "📜", text: "Certificate on completion" },
    ],
  },
];

const PricingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Wrapper>
      <div className="py-20 my-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black mb-4" data-aos="fade-up">
            To'lov Tariflari
          </h2>
          <div
            className="w-24 h-1 mx-auto mb-10 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded"
            data-aos="fade-up"
            data-aos-delay="150"
          />
          <p
            className="text-gray-600 mb-12 max-w-xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Yashirin to‘lovlar yo‘q — faqat sizga mos va aniq reja!
          </p>

          <div
            className="grid md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-[2px] shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to bottom right, black, red, gold)",
                }}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="bg-white rounded-[22px] h-full p-8 text-center flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-3">{plan.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-3xl font-extrabold mb-6 text-gray-800">
                      {plan.price}
                    </p>
                    <ul className="mb-6 space-y-3 text-sm font-medium text-left">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="text-lg">{feature.icon}</span>
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-6 px-6 py-2 rounded-full font-semibold bg-gradient-to-r from-black via-red-600 to-yellow-400 text-white hover:brightness-110 transition-transform transform hover:scale-105">
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingSection;
