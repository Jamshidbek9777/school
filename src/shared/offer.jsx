import React from "react";
import {
  ShieldCheck,
  BookOpenCheck,
  Users,
  School,
  Paintbrush,
  Dumbbell,
} from "lucide-react";
import Wrapper from "./wrapper";

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
  return (
    <Wrapper>
      <div className="">
        <div className="bg-white mt-20 mb-10 p-8 rounded-2xl shadow-lg grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold text-[#0c1e45] mb-4">
              Maktabimizga xush kelibsiz
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bizning maktab – bu zamonaviy ta'lim, tarbiya va taraqqiyot sari
              yo‘naltirilgan bilim maskani. Bu yerda har bir o‘quvchining
              imkoniyatlari kashf etiladi va qo‘llab-quvvatlanadi.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>✅ Yuqori malakali o‘qituvchilar jamoasi</li>
              <li>✅ Xalqaro standartlarga mos o‘quv dasturlari</li>
              <li>✅ Zamonaviy sinfxonalar va laboratoriyalar</li>
              <li>✅ IT, tillar, san’at va sport yo‘nalishlari</li>
              <li>✅ Mehribon, qulay va xavfsiz muhit</li>
            </ul>
            <p className="mt-6 text-gray-600">
              Farzandingiz kelajagiga sarmoya kiritmoqchimisiz? Unda to‘g‘ri
              manzildasiz. Sizni kutib qolamiz!
            </p>
          </div>
          <img
            src="/img/offerimg.webp"
            alt="Maktab muhit"
            className="w-full rounded-xl shadow-md"
          />
        </div>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0c1e45] mb-4">
            🎓 Biz nima taklif qilamiz
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
