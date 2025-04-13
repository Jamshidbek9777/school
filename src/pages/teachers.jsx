import React from "react";
import Wrapper from "../shared/wrapper";

const teachersData = [
  {
    name: "Anna Müller",
    subject: "Mathematics",
    image: "/img/teacher.jpg",
    nationality: "🇩🇪",
  },
  {
    name: "John Smith",
    subject: "Science",
    image: "/img/teacher.jpg",
    nationality: "🇬🇧",
  },
  {
    name: "Laylo Karimova",
    subject: "German Language",
    image: "/img/teacher.jpg",
    nationality: "🇺🇿",
  },
  {
    name: "Klaus Becker",
    subject: "History",
    image: "/img/teacher.jpg",
    nationality: "🇩🇪",
  },
];

const Teachers = () => {
  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <section className="relative bg-gradient-to-r from-[#E6B822] to-[#fdd835] text-white py-28 rounded-lg shadow-md mb-12 overflow-hidden">
          <img
            src="/img/line1.svg"
            alt="Graduation Cap"
            className="absolute top-[-20px] left-[-20px] w-32 opacity-70 rotate-[-15deg]"
          />

          <img
            src="/img/line2.svg"
            alt="German Flag"
            className="absolute bottom-[-20px] right-[-20px] w-32 opacity-80 rotate-[10deg]"
          />

          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Meet Our Certified Teachers
            </h1>
            <p className="text-lg text-black">
              Our team of passionate and internationally certified educators are
              dedicated to shaping the future — one student at a time.
            </p>
          </div>
        </section>

        <section className="">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
            {teachersData.map((teacher, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300 hover:scale-[1.03] border border-gray-100"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-[#050a41]"
                />
                <h3 className="text-xl font-semibold text-[#050a41] mb-1">
                  {teacher.name}
                </h3>
                <p className="text-gray-500 mb-2">{teacher.subject}</p>
                <span className="text-2xl">{teacher.nationality}</span>
                <div className="mt-3">
                  <span className="inline-block bg-yellow-400 text-sm text-black px-3 py-1 rounded-full font-medium">
                    Certified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Teachers;
