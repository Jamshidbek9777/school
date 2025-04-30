import React, { useState } from "react";
import Wrapper from "../shared/wrapper";
import {
  Linkedin,
  Facebook,
  Twitter,
  Award,
  GraduationCap,
  Languages,
  Instagram,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ContactForm from "../shared/contactus";
import { useTeachers } from "../queries/useQueries";
import { FaTelegram } from "react-icons/fa";

const Teachers = () => {
  const { t, i18n } = useTranslation();
  const { data = [] } = useTeachers(i18n.language);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="relative pt-20 pb-32 bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-repeat opacity-5"></div>

        <Wrapper>
          <div className="relative z-10 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t("nav7")}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {t("teach1")}
              </p>
            </motion.div>
          </div>
        </Wrapper>
      </div>

      <Wrapper>
        <div className="py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((teacher, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden`}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-white mb-1 flex items-center">
                        {teacher.first}
                      </h3>
                      <h3 className="text-xl font-bold text-white mb-1 flex items-center">
                        {teacher.last}
                      </h3>
                    </div>
                    <div className="inline-block px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full mb-2">
                      {teacher.subject}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {teacher.edu !== null ? (
                    <>
                      <div className="flex items-center text-gray-700 mb-4">
                        <GraduationCap
                          size={18}
                          className="mr-2 flex-shrink-0"
                        />
                        <span>{teacher.edu}</span>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <div className="flex items-center text-gray-700 mb-4">
                    <Award size={18} className="mr-2 flex-shrink-0" />
                    <span>{teacher.exp} years experience</span>
                  </div>

                  <div className="flex items-center text-gray-700 mb-6">
                    <Languages size={18} className="mr-2 flex-shrink-0" />
                    <span>{teacher.langs}</span>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                    <div className="flex space-x-3">
                      {teacher.tg !== null ? (
                        <>
                          {" "}
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
                            href={teacher?.tg}
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
                            href={teacher?.tg}
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
                            href={teacher?.tg}
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
                            href={teacher?.tg}
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
                    {teacher.phone !== null ? (
                      <>
                        <p>Tel: {teacher.phone}</p>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>

      <section className="bg-gray-50 py-24">
        <Wrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Teaching Methodology
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              At DeutschSmart, our teachers apply proven methodologies combined
              with innovative approaches
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84 50.357 50.357 0 00-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  German Educational Standards
                </h3>
                <p className="text-gray-600">
                  We apply the systematic approach of German education with
                  structured learning paths and clear academic goals, ensuring
                  thorough understanding of each subject.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Student-Centered Learning
                </h3>
                <p className="text-gray-600">
                  Our teachers tailor their approach to each student's needs,
                  abilities, and learning style, creating personalized learning
                  experiences for optimal development.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Practical Application
                </h3>
                <p className="text-gray-600">
                  We believe in learning by doing. Our teachers integrate
                  practical exercises, experiments, and real-world applications
                  into every lesson to reinforce theoretical concepts.
                </p>
              </motion.div>
            </div>
          </div>
        </Wrapper>
      </section>

      <ContactForm />
    </div>
  );
};

export default Teachers;
