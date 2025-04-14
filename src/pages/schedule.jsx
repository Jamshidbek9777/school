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
        {/* Header */}
        <section className="relative bg-gradient-to-r from-[#E6B822] to-[#fdd835] text-white py-28 rounded-lg shadow-md mb-12 overflow-hidden">
          <div className="text-center relative z-10">
            <h1 className="text-4xl font-bold mb-4 text-black">
              Dars Jadvali (Lesson Schedule)
            </h1>
            <p className="text-lg text-black">
              View the weekly lesson schedule by selecting your grade below.
            </p>
          </div>
        </section>

        {/* Grade Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {grades.map((grade) => (
            <button
              key={grade}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                selectedGrade === grade
                  ? "bg-[#050a41] text-white"
                  : "bg-white text-[#050a41]"
              } hover:bg-yellow-400 transition`}
              onClick={() => setSelectedGrade(grade)}
            >
              {grade}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto  bg-white rounded-lg shadow ">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-[#050a41] text-white">
                <th className="py-2 px-4 border">Day</th>
                <th className="py-2 px-4 border">Lesson 1</th>
                <th className="py-2 px-4 border">Lesson 2</th>
                <th className="py-2 px-4 border">Lesson 3</th>
                <th className="py-2 px-4 border">Lesson 4</th>
              </tr>
            </thead>
            <tbody>
              {schedules[selectedGrade]?.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  {row.map((cell, i) => (
                    <td key={i} className="py-2 px-4 border text-center">
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
