import React, { useState, useEffect } from "react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const FaqSection = () => {
  const { t, i18n } = useTranslation();
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await axios.get("http://178.128.105.37:8000/api/faqs/");
        const lang = i18n.language;

        const localizedFaqs = res.data.map((item) => ({
          question: item[`question_${lang}`],
          answer: item[`answer_${lang}`],
        }));
        console.log(res);

        setFaqs(localizedFaqs);
      } catch (error) {
        console.error("Failed to fetch FAQs", error);
      }
    };

    fetchFaqs();
  }, [i18n.language]);

  return (
    <Wrapper>
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
          {t("faq1")}
        </h2>
        <div className="space-y-4 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-all"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 py-4 text-gray-700 bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default FaqSection;
