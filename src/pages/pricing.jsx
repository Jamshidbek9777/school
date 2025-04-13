import React from "react";
import Wrapper from "../shared/wrapper";
import ContactForm from "../shared/contactus";

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

const Pricing = () => {
  return (
    <Wrapper>
      <div className="pt-24">
        {/* Header */}
        <section className="relative bg-gradient-to-r from-[#E6B822] to-[#fdd835] text-white py-28 rounded-lg shadow-md mb-12 overflow-hidden">
          <img
            src="/img/line1.svg"
            alt="Corner Illustration"
            className="absolute top-[-20px] left-[-20px] w-32 opacity-70 rotate-[-15deg]"
          />
          <img
            src="/img/line2.svg"
            alt="Corner Illustration"
            className="absolute bottom-[-20px] right-[-20px] w-32 opacity-80 rotate-[10deg]"
          />
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Tuition & Pricing
            </h1>
            <p className="text-lg text-black">
              Affordable plans with German quality standards.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4 bg-[#f9f9f9]">
          <div className="mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#050a41] mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-600">
              Each plan represents a pillar of excellence, modeled after German
              educational values.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`${plan.bg} ${plan.text} rounded-xl shadow-md p-8 text-center transition hover:scale-[1.03]`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✅ {feature}</li>
                  ))}
                </ul>
                <button
                  className={`px-6 py-2 rounded-full font-medium ${plan.button} hover:opacity-90`}
                >
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Final Note */}
        <section className="py-16 bg-white text-center">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose what suits your child best — excellence starts here.
          </p>
        </section>
      </div>

      <ContactForm />
    </Wrapper>
  );
};

export default Pricing;
