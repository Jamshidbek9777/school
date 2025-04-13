import React from "react";
import Wrapper from "../shared/wrapper";
import ContactForm from "../shared/contactus";

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
  return (
    <Wrapper>
      <div className="pt-24">
        {/* Header */}
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
              Our Courses
            </h1>
            <p className="text-lg text-black">
              Discover a wide range of courses built to educate and inspire.
              From German language to future-ready tech skills, we’ve got it
              all.
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 px-4">
          <div className="mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#050a41] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600">
              Our programs are designed with international collaboration and
              local excellence.
            </p>
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

        {/* Closing Section */}
        <section className="py-16 bg-white text-center">
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We believe in education that connects cultures and builds the
            future. Join our school and start your journey with a global
            mindset.
          </p>
        </section>
      </div>
      <ContactForm />
    </Wrapper>
  );
};

export default Courses;
