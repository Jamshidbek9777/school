import React from "react";
import Wrapper from "../shared/wrapper";

const programs = [
  {
    title: "1–4-sinf dasturi",
    description:
      "Boshlang‘ich ta’lim asoslari: o‘qish, yozish, matematika va mantiqiy fikrlash asoslari. O‘yin orqali o‘rgatish yondashuvi.",
    icon: "📘",
  },
  {
    title: "5–9-sinf dasturi",
    description:
      "Fanlar chuqur o‘rgatiladi: matematika, fizika, biologiya, tarix va boshqa fanlar. Tanqidiy fikrlashni rivojlantirishga e’tibor.",
    icon: "📗",
  },
  {
    title: "10–11-sinf dasturi",
    description:
      "OTMga tayyorlov, kasbga yo‘naltirish, chuqurlashtirilgan fanlar. IELTS, matematika va informatika tayyorgarligi.",
    icon: "📙",
  },
  {
    title: "Tillar kurslari",
    description:
      "Ingliz tili, rus tili, nemis tili darslari. IELTS va CEFR darajadagi tayyorgarlik kurslari mavjud.",
    icon: "🌍",
  },
  {
    title: "IT kurslari",
    description:
      "Dasturlash (Python, JavaScript, Scratch), veb-dasturlash, sun’iy intellektga kirish, ofis dasturlari.",
    icon: "💻",
  },
  {
    title: "Sport mashg‘ulotlari",
    description:
      "Futbol, shaxmat, suzish, yengil atletika. Har bir sinf uchun moslashtirilgan sport darslari.",
    icon: "🏅",
  },
];

const Programs = () => {
  return (
    <Wrapper>
      <div className="pt-24 pb-16 ">
        <section className="relative bg-gradient-to-r from-[#E6B822] to-[#fdd835] text-white py-28 rounded-lg shadow-md mb-12 overflow-hidden">
          <img
            src="/img/line1.svg"
            alt="Top Left Illustration"
            className="absolute top-[-20px] left-[-20px] w-32 opacity-70 rotate-[-15deg]"
          />
          <img
            src="/img/line2.svg"
            alt="Bottom Right Illustration"
            className="absolute bottom-[-20px] right-[-20px] w-32 opacity-80 rotate-[10deg]"
          />
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              School News
            </h1>
            <p className="text-lg text-black">
              A visual glimpse into the vibrant life of our students — learning,
              growing, and having fun together.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#1c1f52] hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">{program.icon}</div>
              <h3 className="text-xl font-semibold text-[#1c1f52] mb-2">
                {program.title}
              </h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Programs;
