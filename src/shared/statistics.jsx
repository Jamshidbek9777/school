import React from "react";
import { GraduationCap, Users, Briefcase, Globe } from "lucide-react";
import Wrapper from "./wrapper";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAchievements } from "../queries/useQueries";

const SchoolStats = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { data = [], isLoading } = useAchievements();
  console.log("stats", data);

  const stats = data.length
    ? [
        {
          icon: <GraduationCap strokeWidth={1.5} />,
          value: data[0].number_of_students,
          label: t("ach2"),
          suffix: "+",
          color: "bg-indigo-500",
        },
        {
          icon: <Users strokeWidth={1.5} />,
          value: data[0].number_of_teachers,
          label: t("ach3"),
          suffix: "+",
          color: "bg-sky-500",
        },
        {
          icon: <Globe strokeWidth={1.5} />,
          value: data[0].number_0f_partners,
          label: t("ach4"),
          suffix: "+",
          color: "bg-amber-500",
        },
        {
          icon: <Briefcase strokeWidth={1.5} />,
          value: data[0].years_of_experience,
          label: t("ach5"),
          suffix: "+",
          color: "bg-emerald-500",
        },
      ]
    : [];

  console.log(stats);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-yellow-50 opacity-70"></div>

      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-300 to-sky-300 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <Wrapper>
        <div className="relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              {t("ach6")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("ach1")}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 p-6"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${stat?.color}`}
                ></div>

                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className={`text-gray-700`}>{stat?.icon}</span>
                  </div>

                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {stat.value}
                    </span>
                    <span className="text-2xl font-bold text-gray-900 ml-1">
                      {stat.suffix}
                    </span>
                  </div>

                  <p className="text-gray-500 font-medium">{stat.label}</p>

                  <div className="mt-4 relative w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`absolute top-0 left-0 h-full ${stat.color} rounded-full`}
                      style={{
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SchoolStats;
