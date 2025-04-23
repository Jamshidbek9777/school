import React from "react";
import Wrapper from "../shared/wrapper";
import ContactForm from "../shared/contactus";
import { useTranslation } from "react-i18next";
import HeroSection from "../shared/hero";

const coursesData = [
  {
    title: "German Language A1-B2",
    emoji: "🇩🇪",
    description:
      "Learn to speak and understand German with certified teachers. Aligned with Goethe Institute standards.",
    color: "bg-yellow-400",
  },
  {
    title: "Mathematics (STEM)",
    emoji: "📐",
    description:
      "Deepen your problem-solving skills and logical thinking in our advanced math classes.",
    color: "bg-red-500 text-white",
  },
  {
    title: "Science & Experiments",
    emoji: "🔬",
    description:
      "Explore the wonders of science with practical experiments and global curriculum.",
    color: "bg-black text-white",
  },
  {
    title: "Cultural Exchange Program",
    emoji: "🌍",
    description:
      "Bridge cultures with our German-Uzbek exchange initiatives and virtual learning.",
    color: "bg-[#1c1f52] text-white",
  },
  {
    title: "Art & Creativity",
    emoji: "🎨",
    description:
      "Foster imagination and self-expression through drawing, design, and German cultural projects.",
    color: "bg-[#E6B822]",
  },
  {
    title: "Robotics & Coding",
    emoji: "🤖",
    description:
      "Learn future-ready skills in robotics and programming through fun projects.",
    color: "bg-[#0f172a] text-white",
  },
];

const Courses = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="pt-24">
        <HeroSection
          backgroundImage="/img/aboutBg.JPG"
          title={t("nav6")}
          description={t("course1")}
        />

        <section className="py-16 px-4">
          <div className="mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              {t("course2")}
            </h2>
            <p className="text-gray-600">{t("course3")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coursesData.map((course, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 ${course.color} shadow-md transition hover:scale-[1.03]`}
              >
                <div className="text-3xl mb-2">{course.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-sm">{course.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <ContactForm />
    </Wrapper>
  );
};

export default Courses;
