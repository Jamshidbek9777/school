import React from "react";

const courses = [
  {
    image: "/img/course.jpg",
    title: "Web Development Basics",
    time: "3 Months",
    description:
      "Learn the fundamentals of HTML, CSS, and JavaScript to build your first website.",
  },
  {
    image: "/img/course.jpg",
    title: "Advanced JavaScript",
    time: "6 Months",
    description:
      "Master JavaScript and learn advanced concepts like closures, promises, and asynchronous programming.",
  },
  {
    image: "/img/course.jpg",
    title: "React for Beginners",
    time: "4 Months",
    description:
      "An introduction to React, covering components, props, and state to build dynamic user interfaces.",
  },
  {
    image: "/img/course.jpg",
    title: "Node.js & Backend Development",
    time: "5 Months",
    description:
      "Understand backend development using Node.js, Express, and MongoDB to build scalable applications.",
  },
];

const OurCourses = () => {
  return (
    <section className="bg-[#f9fafb] py-20 px-6 lg:px-20 my-10 rounded-lg">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#050a41] mb-10 flex flex-col items-center">
          Our Courses
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300 cursor-pointer"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#050a41] mb-3">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{course.time}</p>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
