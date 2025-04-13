import React from "react";

const teachers = [
  {
    name: "Anna Müller",
    subject: "Mathematics",
    image: "/img/teacher.jpg",
    description:
      "Passionate about numbers and logic with 10+ years of experience.",
  },
  {
    name: "Lukas Schmidt",
    subject: "Science",
    image: "/img/teacher.jpg",
    description:
      "Dedicated to making science fun and practical for all students.",
  },
  {
    name: "Sophie Becker",
    subject: "Languages",
    image: "/img/teacher.jpg",
    description:
      "Linguistics expert fluent in 4 languages, loves cultural exchange.",
  },
  {
    name: "Sophie Becker",
    subject: "Languages",
    image: "/img/teacher.jpg",
    description:
      "Linguistics expert fluent in 4 languages, loves cultural exchange.",
  },
];

const CertifiedTeachers = () => {
  return (
    <section className="py-10 my-10 px-4 bg-[#f9f9f9] rounded-lg">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#050a41] mb-4">
          Certified Teachers
        </h2>
        <p className="text-gray-600 mb-12 items-center flex flex-col">
          Learn from the best — qualified professionals with years of
          experience.
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded" />
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-[#050a41] mb-1">
                  {teacher.name}
                </h3>
                <span className="inline-block bg-yellow-400 text-black text-sm px-3 py-1 rounded-full mb-3">
                  {teacher.subject}
                </span>
                <p className="text-gray-700 mb-4">{teacher.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedTeachers;
