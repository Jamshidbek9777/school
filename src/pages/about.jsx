import React from "react";
import ContactUs from "../shared/contactus";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/img/about-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10">
          About Us
        </h1>
      </section>

      <section className="bg-[#f4f4fc] py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#08204f] mb-4">
              Our School – Bridging Education & Culture
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our institution stands out with a strong foundation in both
              academic excellence and moral development. We nurture students to
              become globally-minded individuals with strong ties to cultural
              heritage — especially through our educational collaboration with
              Germany.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <p>
                  📘 Courses tailored for real-world success, designed by
                  experienced educators.
                </p>
                <p className="mt-3">
                  💬 Real-time support from our teachers to answer every
                  question.
                </p>
              </div>
              <div>
                <p>
                  ✏️ Personal feedback and guidance for improvement in all
                  assignments.
                </p>
                <p className="mt-3">
                  🌐 Easily accessible through our online portal, anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image + Card */}
          <div className="relative">
            <img
              src="/img/germany1.jpg"
              alt="Students & Teachers"
              className="rounded-xl shadow-lg"
              loading="lazy"
            />

            <div className="absolute -top-6 -left-6 bg-[#043178] text-white p-6 rounded-xl shadow-lg w-[280px]">
              <h3 className="text-xl font-semibold mb-2 leading-tight">
                Providing World-Class Education
              </h3>
              <p className="text-sm mb-4">
                Our goal is simple: deliver quality education with purpose and
                passion.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default About;
