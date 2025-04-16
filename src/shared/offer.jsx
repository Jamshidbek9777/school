import React from "react";
import {
  ShieldCheck,
  BookOpenCheck,
  Users,
  School,
  Paintbrush,
  Dumbbell,
} from "lucide-react";

const offerings = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Xavfsizlik – eng avvalo",
    description:
      "Yevropa standartlariga mos, ishonchli va qo‘llab-quvvatlovchi muhit.",
    color: "bg-black",
  },
  {
    icon: <BookOpenCheck size={28} />,
    title: "Doimiy va tartibli darslar",
    description:
      "Germaniya tajribasiga asoslangan barqaror va tizimli ta’lim jarayoni.",
    color: "bg-red-600",
  },
  {
    icon: <Users size={28} />,
    title: "Sertifikatlangan o‘qituvchilar",
    description:
      "Xalqaro tajribaga ega, malakali va zamonaviy metodikani qo‘llaydigan pedagoglar.",
    color: "bg-yellow-400",
  },
  {
    icon: <School size={28} />,
    title: "Yetarli sinfxonalar",
    description:
      "Qulay, keng va zamonaviy jihozlangan sinf xonalari – samarali o‘qish uchun.",
    color: "bg-black",
  },
  {
    icon: <Paintbrush size={28} />,
    title: "Ijodiy darslar",
    description:
      "Amaliy mashg‘ulotlar, san’at va intellektual faoliyat orqali har tomonlama rivojlanish.",
    color: "bg-red-600",
  },
  {
    icon: <Dumbbell size={28} />,
    title: "Sport inshootlari",
    description:
      "Germaniya sport madaniyatiga asoslangan jismoniy tarbiya va sog‘lom turmush uchun imkoniyatlar.",
    color: "bg-yellow-400",
  },
];

const WhatWeOffer = () => {
  return (
    <div className="bg-white py-16 ">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-[#050a41] mb-4 flex flex-col items-center">
            Biz nima taklif qilamiz
            <div className="w-24 h-1 mt-4 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded" />
          </h2>
          <p className="text-gray-600 mb-10">
            Biz bolalaringizga eng yaxshisini berish uchun Germaniyadagi
            muassasalar bilan hamkorlik qilib, akademik mukammallik va xalqaro
            standartlarning uyg'unligini keltiramiz.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {offerings.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className={`w-12 h-12 p-4 flex items-center justify-center rounded-full  text-white ${item.color}`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#050a41]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#f8f8f8] p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-[#050a41] mb-4">
            Maktabimizga xush kelibsiz
          </h2>
          <h2 className="text-2xl font-bold text-[#050a41] mb-4">
            Hurmatli ota-onalar, aziz o‘quvchilar!
          </h2>
          <p className="text-gray-600 mb-4">
            Sizni maktabimizning rasmiy veb-saytida ko‘rib turganimizdan
            mamnunmiz. Bizning maktab – bu zamonaviy ta'lim, tarbiya va
            taraqqiyot sari yo‘naltirilgan bilim maskani. Bu yerda har bir
            o‘quvchining individual imkoniyatlari kashf etiladi, bilim olishga
            bo‘lgan ishtiyoqi qo‘llab-quvvatlanadi va kelajak sari mustahkam
            zamin yaratiladi.
          </p>
          <p className="text-gray-600 mb-2">Maktabimizda:</p>
          <p className="text-gray-600">
            ✅ Yuqori malakali o‘qituvchilar jamoasi
          </p>
          <p className="text-gray-600">
            ✅ Xalqaro standartlarga mos o‘quv dasturlari
          </p>
          <p className="text-gray-600">
            ✅ Zamonaviy jihozlangan sinfxonalar va laboratoriyalar
          </p>{" "}
          <p className="text-gray-600">
            ✅ IT, tillar, san’at va sport yo‘nalishlarida qo‘shimcha darslar
          </p>{" "}
          <p className="text-gray-600">✅ Mehribon va qulay muhit mavjud</p>{" "}
          <p className="text-gray-600">
            ✅ Yuqori malakali o‘qituvchilar jamoasi
          </p>
          <br />
          <p className="text-gray-600 mb-4">
            Bizning maqsadimiz – har bir farzandning iste’dodini ro‘yobga
            chiqarish, ularni nafaqat bilimli, balki mustaqil fikrlovchi,
            ijtimoiy faol, mehr-oqibatli shaxs sifatida tarbiyalashdir. Agar siz
            farzandingiz uchun eng yaxshi ta’lim muhitini izlayotgan bo‘lsangiz
            – to‘g‘ri manzildasiz. Maktabimiz eshiklari Siz uchun doimo ochiq!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
