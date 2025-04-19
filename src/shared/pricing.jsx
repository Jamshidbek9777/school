import React, { useEffect } from "react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css";

const pricingPlans = [
  {
    name: "Basic",
    price: "€49/mo",
    features: [
      "Access to 2 core courses",
      "Monthly progress report",
      "Support during school hours",
    ],
    bg: "bg-black",
    text: "text-white",
    button: "bg-white text-black",
  },
  {
    name: "Standard",
    price: "€89/mo",
    features: [
      "Access to 4 courses",
      "German language training (A1-A2)",
      "Weekly live sessions",
      "Email & phone support",
    ],
    bg: "bg-red-600",
    text: "text-white",
    button: "bg-white text-red-600",
  },
  {
    name: "Premium",
    price: "€129/mo",
    features: [
      "Full course access (incl. STEM & German B1-B2)",
      "1-on-1 mentorship",
      "Priority support",
      "Certificate on completion",
    ],
    bg: "bg-yellow-400",
    text: "text-black",
    button: "bg-black text-white",
  },
];

const PricingSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Wrapper>
      <div className="py-20 my-10 rounded-lg">
        <div className="text-center">
          <h2
            className="text-4xl font-bold text-[#050a41] mb-4 flex flex-col items-center"
            data-aos="fade-up"
          >
            Tolov tariflari
            <div className="w-24 h-1 mt-4 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded" />
          </h2>
          <p
            className="text-gray-600 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ehtiyojlaringizga mos rejani tanlang. Yashirin to'lovlar yo'q.
          </p>

          <div
            className="grid md:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`${plan.bg} ${plan.text} rounded-xl shadow-md p-8 text-center transition `}
                data-aos="zoom-in"
                data-aos-delay={index * 300}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✅ {feature}</li>
                  ))}
                </ul>
                <button
                  className={`px-6 py-2 rounded-full font-medium ${plan.button} cursor-pointer`}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingSection;
