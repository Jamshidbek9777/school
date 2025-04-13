import React from "react";
import Wrapper from "../shared/wrapper";
import ContactForm from "../shared/contactus";

const About = () => {
  return (
    <Wrapper>
      <div className="pt-24">
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
              About Our School
            </h1>
            <p className="text-lg text-black">
              Empowering students through quality education and cultural
              values.s are dedicated to shaping the future — one student at a
              time.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 bg-[#f9f9f9] rounded-lg">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#050a41] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700">
                Our mission is to create a learning environment that nurtures
                excellence, curiosity, and international collaboration,
                especially with strong educational ties to Germany.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#050a41] mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700">
                We envision a future where students become global citizens
                equipped with knowledge, character, and confidence to shape the
                world.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4">
          <div className=" mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#050a41] mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600">
              A few reasons why students and parents trust our institution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8  mx-auto">
            {[
              {
                title: "Certified Teachers",
                color: "bg-yellow-400",
                emoji: "📚",
              },
              { title: "Modern Facilities", color: "bg-red-500", emoji: "🏫" },
              {
                title: "German Partnership",
                color: "bg-black text-white",
                emoji: "🇩🇪",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 ${item.color} shadow-md transition hover:scale-[1.03]`}
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white text-center ">
          <div className=" mx-auto">
            {/* German Flag Color Block */}

            <p className="text-gray-600 text-lg">
              We believe that education should be a joyful journey. Our school
              is not just about learning, it's about growing together,
              respecting different cultures, and becoming the best version of
              ourselves.
            </p>
          </div>
        </section>
      </div>
      <ContactForm />
    </Wrapper>
  );
};

export default About;
