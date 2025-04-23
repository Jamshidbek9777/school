import React from "react";
import Wrapper from "../shared/wrapper";
import { FaLinkedin, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import HeroSection from "../shared/hero";

const teachersData = [
  {
    name: "Anna Müller",
    subject: "Mathematics",
    image: "/img/teacher.jpg",
    nationality: "🇩🇪",
    socials: {
      linkedin: "https://linkedin.com/in/anna-muller",
      facebook: "https://facebook.com/anna.muller",
      twitter: "https://twitter.com/annamaths",
    },
  },
  {
    name: "John Smith",
    subject: "Science",
    image: "/img/teacher.jpg",
    nationality: "🇬🇧",
    socials: {
      linkedin: "https://linkedin.com/in/johnsmith",
      facebook: "https://facebook.com/johnsmith",
      twitter: "https://twitter.com/sciencesmith",
    },
  },
  {
    name: "Laylo Karimova",
    subject: "German Language",
    image: "/img/teacher.jpg",
    nationality: "🇺🇿",
    socials: {
      linkedin: "https://linkedin.com/in/laylo-karimova",
      facebook: "https://facebook.com/laylo.karimova",
      twitter: "https://twitter.com/laylosprache",
    },
  },
  {
    name: "Klaus Becker",
    subject: "History",
    image: "/img/teacher.jpg",
    nationality: "🇩🇪",
    socials: {
      linkedin: "https://linkedin.com/in/klausbecker",
      facebook: "https://facebook.com/klaus.becker",
      twitter: "https://twitter.com/klaushistory",
    },
  },
];

const Teachers = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <HeroSection
          backgroundImage="/img/aboutBg.JPG"
          title={t("nav7")}
          description={t("teach1")}
        />

        <section>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {teachersData.map((teacher, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl text-center transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-[#050a41]"
                />
                <h3 className="text-xl font-bold text-[#050a41] mb-1">
                  {teacher.name}
                </h3>
                <p className="text-gray-600 mb-1">{teacher.subject}</p>
                <span className="text-2xl mb-2 block">
                  {teacher.nationality}
                </span>

                <div className="mt-3 mb-4">
                  <span className="inline-block bg-green-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                    Certified
                  </span>
                </div>

                <div className="flex justify-center gap-4 text-[#050a41] text-lg">
                  <a
                    href={teacher.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="hover:text-blue-700 transition" />
                  </a>
                  <a
                    href={teacher.socials.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="hover:text-blue-600 transition" />
                  </a>
                  <a
                    href={teacher.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaXTwitter className="hover:text-black transition" />
                  </a>
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
