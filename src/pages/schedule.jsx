import React, { useState } from "react";
import Wrapper from "../shared/wrapper";

const grades = Array.from({ length: 11 }, (_, i) => `${i + 1}-grade`);

const schedules = {
  "1-grade": [
    ["Monday", "Math", "Reading", "Drawing", "Something"],
    ["Wednesday", "Math", "PE", "Writing", "Something"],
    ["Thursday", "Math", "PE", "Writing", "Something"],
    ["Friday", "Math", "PE", "Writing", "Something"],
    ["Saturday", "Math", "PE", "Writing", "Something"],
    ["Sunday", "Math", "PE", "Writing", "Something"],
  ],
  "2-grade": [
    ["Monday", "Math", "Reading", "Drawing", "Something"],
    ["Wednesday", "Math", "PE", "Writing", "Something"],
    ["Thursday", "Math", "PE", "Writing", "Something"],
    ["Friday", "Math", "PE", "Writing", "Something"],
    ["Saturday", "Math", "PE", "Writing", "Something"],
    ["Sunday", "Math", "PE", "Writing", "Something"],
  ],
  // Add other grades similarly...
  "11-grade": [
    ["Monday", "Math", "Reading", "Drawing", "Something"],
    ["Wednesday", "Math", "PE", "Writing", "Something"],
    ["Thursday", "Math", "PE", "Writing", "Something"],
    ["Friday", "Math", "PE", "Writing", "Something"],
    ["Saturday", "Math", "PE", "Writing", "Something"],
    ["Sunday", "Math", "PE", "Writing", "Something"],
  ],
};

const LessonSchedule = () => {
  const [selectedGrade, setSelectedGrade] = useState("1-grade");

  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <section
          className="relative bg-cover bg-center py-36 rounded-lg shadow-md mb-16 overflow-hidden"
          style={{ backgroundImage: "url('/img/aboutBg.JPG')" }}
        >
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

          <div className="relative z-10 flex justify-center">
            <div className="backdrop-blur-md bg-white/30 px-10 py-8 rounded-xl max-w-3xl text-center shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Dars jadvallari
              </h1>
              <p className="text-lg text-gray-800">
                Har bir sinf uchun aniq va tartibli dars jadvallari.
                Farzandingizning ta’lim jarayonini kuzatish yanada oson.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {grades.map((grade, idx) => {
            const flagColors = ["bg-black", "bg-red-500", "bg-yellow-400"];
            const bgColor =
              selectedGrade === grade ? flagColors[idx % 3] : "bg-white";

            const textColor =
              selectedGrade === grade ? "text-white" : "text-black";

            return (
              <button
                key={grade}
                className={`px-4 py-2 cursor-pointer rounded-full text-sm font-semibold border shadow-sm transition duration-200 transform hover:scale-105 ${bgColor} ${textColor}`}
                onClick={() => setSelectedGrade(grade)}
              >
                {grade}
              </button>
            );
          })}
        </div>

        <div className="overflow-x-auto  bg-white rounded-lg shadow ">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-black text-yellow-400 text-sm uppercase tracking-wider">
                <th className="py-3 px-4 border">Day</th>
                <th className="py-3 px-4 border">Lesson 1</th>
                <th className="py-3 px-4 border">Lesson 2</th>
                <th className="py-3 px-4 border">Lesson 3</th>
                <th className="py-3 px-4 border">Lesson 4</th>
              </tr>
            </thead>

            <tbody>
              {schedules[selectedGrade]?.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-yellow-50"}
                >
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className="py-3 px-4 border text-center text-gray-800"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              )) || (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    No schedule available for this grade.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default LessonSchedule;
