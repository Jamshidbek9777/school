import React from "react";
import ContactUs from "../shared/contactus";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <div className="pt-24">
          <section
            className="relative bg-cover bg-center py-20 sm:py-28 md:py-36 rounded-lg shadow-md mb-12 overflow-hidden px-4"
            style={{ backgroundImage: "url('/img/aboutBg.JPG')" }}
          >
            <img
              src="/img/line1.svg"
              alt="Top Left Illustration"
              className="absolute top-[-10px] left-[-10px] w-20 sm:w-28 md:w-32 opacity-70 rotate-[-15deg]"
              loading="lazy"
            />
            <img
              src="/img/line2.svg"
              alt="Bottom Right Illustration"
              className="absolute bottom-[-10px] right-[-10px] w-20 sm:w-28 md:w-32 opacity-80 rotate-[10deg]"
              loading="lazy"
            />

            <div className="relative z-10 flex justify-center">
              <div className="backdrop-blur-md bg-white/30 px-6 sm:px-10 py-6 sm:py-8 rounded-xl max-w-2xl text-center shadow-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black">
                  {t("nav1")}
                </h1>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                  {t("about1")}
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f4f4fc]">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
                {t("about2")}
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all">
                  <div className=" mb-4 rounded-full flex items-center justify-center">
                    <img
                      src="/img/teacher.jpg"
                      className="w-44 h-44 rounded-full"
                      alt="Teacher Icon"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t("about3")}</h4>
                  <p className="text-gray-600">{t("about4")}</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all">
                  <div className=" mb-4 rounded-full flex items-center justify-center">
                    <img
                      src="/img/aboutsection.JPG"
                      className="w-44 h-44 rounded-full"
                      alt="Teacher Icon"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t("about5")}</h4>
                  <p className="text-gray-600">{t("about6")}</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all">
                  <div className=" mb-4 rounded-full flex items-center justify-center">
                    <img
                      src="/img/ijodiy.jpeg"
                      className="w-44 h-44 rounded-full"
                      alt="Teacher Icon"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{t("about7")}</h4>
                  <p className="text-gray-600">{t("about8")}</p>
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
