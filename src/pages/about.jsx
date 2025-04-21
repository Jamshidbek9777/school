import React from "react";
import ContactUs from "../shared/contactus";
import Wrapper from "../shared/wrapper";

const About = () => {
  return (
    <>
      <Wrapper>
        <div className="pt-24">
          <section
            className="relative bg-cover bg-center py-36 rounded-lg shadow-md mb-12 overflow-hidden"
            style={{ backgroundImage: "url('/img/aboutBg.JPG')" }}
          >
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

            <div className="relative z-10 flex justify-center">
              <div className="backdrop-blur-md bg-white/30 px-10 py-8 rounded-xl max-w-3xl text-center shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                  Biz haqimizda
                </h1>
                <p className="text-lg text-gray-800">
                  Ta’lim va ilhom manbai bo‘lgan o‘quv dasturlarimiz orqali
                  farzandingizga yorqin kelajak sari yo‘l ochamiz.
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 bg-[#f4f4fc]">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-black">
                Nima uchun biz?
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
                  <h4 className="text-xl font-bold mb-2">
                    Tajribali o'qituvchilar
                  </h4>
                  <p className="text-gray-600">
                    Nemis tili va zamonaviy texnologiyalar bo‘yicha puxta
                    bilimga ega, fidokor pedagoglar jamoasi.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all">
                  <div className=" mb-4 rounded-full flex items-center justify-center">
                    <img
                      src="/img/aboutsection.JPG"
                      className="w-44 h-44 rounded-full"
                      alt="Teacher Icon"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Shinam xonalar</h4>
                  <p className="text-gray-600">
                    O‘qishga qulay muhit yaratadigan, yorug‘ va zamonaviy tarzda
                    jihozlangan sinf xonalari.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition-all">
                  <div className=" mb-4 rounded-full flex items-center justify-center">
                    <img
                      src="/img/ijodiy.jpeg"
                      className="w-44 h-44 rounded-full"
                      alt="Teacher Icon"
                    />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Ijodiy darslar</h4>
                  <p className="text-gray-600">
                    Bolalarning tafakkurini kengaytiruvchi, san’at va amaliy
                    faoliyatga asoslangan mashg‘ulotlar.
                  </p>
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
