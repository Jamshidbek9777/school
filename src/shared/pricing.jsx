import React from "react";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "€0",
    features: ["1 Course Access", "Community Support", "Limited Resources"],
    bgColor: "bg-white",
    borderColor: "border-gray-300",
  },
  {
    title: "Standard",
    price: "€29",
    features: [
      "5 Courses Access",
      "Dedicated Support",
      "Download Materials",
      "Certificate",
    ],
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-500",
    highlight: true,
  },
  {
    title: "Premium",
    price: "€59",
    features: [
      "Unlimited Courses",
      "1-on-1 Mentorship",
      "Exclusive Webinars",
      "Priority Support",
    ],
    bgColor: "bg-white",
    borderColor: "border-red-500",
  },
];

const PricingSection = () => {
  return (
    <div className="py-20 px-4 bg-[#f9f9f9] rounded-lg">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#050a41] mb-4">
          Our Pricing Plans
        </h2>
        <p className="text-gray-600 mb-12">
          Choose the plan that suits your needs. No hidden fees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-2xl border ${plan.borderColor} shadow-md p-8 hover:scale-102 transition-transform duration-300 ${plan.bgColor}`}
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                {plan.title}
              </h3>
              <p className="text-4xl font-extrabold text-red-600 mb-6">
                {plan.price}
                <span className="text-lg text-gray-600 font-medium"> /mo</span>
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="text-yellow-500" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 ${
                  plan.highlight
                    ? "bg-black hover:bg-yellow-600"
                    : "bg-yellow-600 hover:bg-black"
                }`}
              >
                {plan.highlight ? "Most Popular" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
