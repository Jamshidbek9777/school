import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useTeachers } from "../queries/useQueries";

const CertifiedTeachers = () => {
  const { t, i18n } = useTranslation();
  const { data = [] } = useTeachers(i18n.language);

  return (
    <section className="py-10 md:py-20">
      <div className="text-center mb-16">
        {/* <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
          {t("teachers1")}
        </span> */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {t("teachers1")}
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t("teachers3")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {data.map((teacher, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={teacher.image}
                alt={teacher.first}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  {teacher.tg !== null ? (
                    <>
                      <a
                        href={teacher?.tg}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <FaTelegram size={16} />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                  {teacher.linkedin !== null ? (
                    <>
                      <a
                        href={teacher?.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                  {teacher.insta !== null ? (
                    <>
                      <a
                        href={teacher?.insta}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Instagram size={16} />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                  {teacher.face !== null ? (
                    <>
                      <a
                        href={teacher?.face}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Facebook size={16} />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                  {teacher.x !== null ? (
                    <>
                      <a
                        href={teacher?.x}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {teacher.first}
              </h3>
              <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full mb-3">
                {teacher.subject}
              </div>
              <p className="text-gray-600 text-sm">{teacher.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/teachers"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
        >
          {t("teachers4")}
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CertifiedTeachers;
