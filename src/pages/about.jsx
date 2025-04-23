import React from "react";
import ContactUs from "../shared/contactus";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";
import HeroSection from "../shared/hero";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Wrapper>
        <div className="pt-24">
          <HeroSection
            backgroundImage="/img/aboutBg.JPG"
            title={t("nav1")}
            description={t("about1")}
          />

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
