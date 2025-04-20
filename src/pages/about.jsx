import React from "react";
import ContactUs from "../shared/contactus";
import Wrapper from "../shared/wrapper";

const About = () => {
  return (
    <>
      <Wrapper>
        <div className="pt-24">
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

          <section className="bg-[#f4f4fc] py-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#08204f] mb-4">
                  Our School – Bridging Education & Culture
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our institution stands out with a strong foundation in both
                  academic excellence and moral development. We nurture students
                  to become globally-minded individuals with strong ties to
                  cultural heritage — especially through our educational
                  collaboration with Germany.
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
                    Our goal is simple: deliver quality education with purpose
                    and passion.
                  </p>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
      <ContactUs />
    </>
  );
};

export default About;
