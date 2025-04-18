import React, { useState } from "react";
import Wrapper from "./wrapper";

const faqs = [
  {
    question: "How can I apply to the school?",
    answer:
      "You can apply by filling out the online application form on our website or visiting the admissions office directly.",
  },
  {
    question: "What curriculum do you follow?",
    answer:
      "We follow a modern curriculum aligned with international standards, integrating local and German educational elements.",
  },
  {
    question: "Are there extracurricular activities?",
    answer:
      "Yes, we offer a variety of clubs, sports, arts, and language programs to support student growth outside the classroom.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Wrapper>
      <section className="py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <span className="text-2xl text-gray-400">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-700 bg-white border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default FaqSection;
