import React from "react";
import ContactForm from "../shared/contactus";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Award,
  Users,
  Target,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { useAboutValues, useTimeLine } from "../queries/useQueries";

const About = () => {
  const { t, i18n } = useTranslation();
  // const {
  //   data: values = [],
  //   isLoading,
  //   isError,
  // } = useAboutValues(i18n.language);

  const {
    data: journeys = [],
    isLoading,
    isError,
  } = useTimeLine(i18n.language);

  const values = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: t("about3"),
      description: t("about4"),
      color: "bg-gray-100 text-black",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("about5"),
      description: t("about6"),
      color: "bg-red-100 text-red-500",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t("about7"),
      description: t("about8"),
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="relative pt-20 pb-32 bg-gradient-to-r from-indigo-900 to-blue-800 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
        <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-repeat opacity-5"></div>

        <Wrapper>
          <div className="relative z-10 py-10 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {t("nav1")}
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                {t("about1")}
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex justify-center space-x-6 mt-16"
            >
              <div className="flex items-center text-white">
                <CheckCircle className="mr-2 text-yellow-400" />
                <span>{t("hero5")}</span>
              </div>
              <div className="flex items-center text-white">
                <Award className="mr-2 text-yellow-400" />
                <span>{t("hero4")}</span>
              </div>
              <div className="flex items-center text-white">
                <Target className="mr-2 text-yellow-400" />
                <span>{t("about9")}</span>
              </div>
            </motion.div> */}
          </div>
        </Wrapper>
      </div>

      {/* About Us Section */}
      <section className="py-24">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              zx
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t("about2")}
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {t("about10")}
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {t("about11")}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium">
                  {t("about12")}
                </div>
                <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium">
                  {t("about13")}
                </div>
                <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium">
                  {t("about14")}
                </div>
                <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium">
                  {t("about15")}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-lg opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-400 rounded-lg opacity-20"></div>
                <img
                  src="/img/aboutBg.JPG"
                  alt="About DeutschSmart"
                  className="rounded-2xl w-full relative z-10 shadow-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </Wrapper>
      </section>

      <section className="py-20 bg-gray-50">
        <Wrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("about16")}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t("about17")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div
                    className={`w-14 h-14 rounded-lg ${value.color} flex items-center justify-center mb-6`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Wrapper>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <Wrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("about18")}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t("about19")}
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 to-red-600"></div>

            <div className="space-y-12">
              {journeys.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-center ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${idx % 2 === 0 ? "pr-16 text-right" : "pl-16"}`}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <span className="inline-block px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-yellow-500 z-10"></div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default About;
