import React, { useEffect } from "react";
import {
  ShieldCheck,
  BookOpenCheck,
  Users,
  School,
  Paintbrush,
  Dumbbell,
} from "lucide-react";
import Wrapper from "./wrapper";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file

const offerings = [
  {
    icon: ShieldCheck,
    title: "Xavfsizlik – eng avvalo",
    description:
      "Yevropa standartlariga mos, ishonchli va qo‘llab-quvvatlovchi muhit.",
    bg: "bg-yellow-100 text-yellow-700",
  },
  {
    icon: BookOpenCheck,
    title: "Doimiy va tartibli darslar",
    description:
      "Germaniya tajribasiga asoslangan barqaror va tizimli ta’lim jarayoni.",
    bg: "bg-red-100 text-red-700",
  },
  {
    icon: Users,
    title: "Sertifikatlangan o‘qituvchilar",
    description:
      "Xalqaro tajribaga ega, malakali va zamonaviy metodikani qo‘llaydigan pedagoglar.",
    bg: "bg-green-100 text-green-700",
  },
  {
    icon: School,
    title: "Yetarli sinfxonalar",
    description:
      "Qulay, keng va zamonaviy jihozlangan sinf xonalari – samarali o‘qish uchun.",
    bg: "bg-blue-100 text-blue-700",
  },
  {
    icon: Paintbrush,
    title: "Ijodiy darslar",
    description:
      "Amaliy mashg‘ulotlar, san’at va intellektual faoliyat orqali har tomonlama rivojlanish.",
    bg: "bg-pink-100 text-pink-700",
  },
  {
    icon: Dumbbell,
    title: "Sport inshootlari",
    description:
      "Germaniya sport madaniyatiga asoslangan jismoniy tarbiya va sog‘lom turmush uchun imkoniyatlar.",
    bg: "bg-purple-100 text-purple-700",
  },
];

const WhatWeOffer = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Wrapper>
      <div className="mt-14">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-[#0c1e45] mb-4"
            data-aos="fade-up"
          >
            🎓 Biz nima taklif qilamiz
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Germaniyadagi yetakchi ta’lim muassasalari bilan hamkorlik orqali
            bolalaringizga xalqaro standartlarga mos, zamonaviy, sifatli
            ta’limni taqdim etamiz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 200}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${item.bg}`}
              >
                <item.icon size={26} />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-[#0c1e45]">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default WhatWeOffer;
