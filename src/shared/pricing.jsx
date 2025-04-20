import React, { useEffect } from "react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css";

const pricingPlans = [
  {
    name: "Basic",
    price: "€49/mo",
    description: "Perfect for starting your learning journey",
    borderColor: "border-black",
    buttonColor: "bg-black text-white",
    features: [
      "Access to 2 core courses",
      "Monthly progress report",
      "Support during school hours",
    ],
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
  },
];

const PricingSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Wrapper>
      <section className="py-20 my-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-black mb-3">
            To'lov Tariflari
          </h2>
          <p className="text-gray-600">
            Sizga mos reja tanlang. Yashirin to‘lovlar yo‘q.
          </p>
        </div>

        <div
          className="grid md:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`border-2 ${plan.borderColor} rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-all`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{plan.description}</p>

              <div className="text-3xl font-bold text-gray-900 mb-6">
                {plan.price}
              </div>

              <button
                className={`w-full py-2 rounded-md font-medium mb-6 ${plan.buttonColor} hover:opacity-90 transition cursor-pointer`}
              >
                Get started
              </button>

              <div className="text-sm text-gray-700">
                <p className="font-semibold mb-2">What’s included:</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500">✔️</span>
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
