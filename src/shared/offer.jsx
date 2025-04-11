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
    title: "Safety First",
    description:
      "Secure and supportive environment aligned with European standards.",
    color: "bg-black",
  },
  {
    icon: <BookOpenCheck size={28} />,
    title: "Regular Classes",
    description: "Consistent and structured learning, inspired by Germany.",
    color: "bg-red-600",
  },
  {
    icon: <Users size={28} />,
    title: "Certified Teachers",
    description:
      "Qualified teachers with international exposure and experience.",
    color: "bg-yellow-400",
  },
  {
    icon: <School size={28} />,
    title: "Sufficient Classrooms",
    description: "Spacious, modern classrooms for optimal learning.",
    color: "bg-black",
  },
  {
    icon: <Paintbrush size={28} />,
    title: "Creative Lessons",
    description:
      "Hands-on, artistic and intellectual experiences for all students.",
    color: "bg-red-600",
  },
  {
    icon: <Dumbbell size={28} />,
    title: "Sports Facilities",
    description: "Physical education aligned with German sports culture.",
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
            What We Offer
            <div className="w-24 h-1 mt-4 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded" />
          </h2>
          <p className="text-gray-600 mb-10">
            We bring a blend of academic excellence and international standards,
            partnering with institutions in Germany to give your children the
            best.
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
            Welcome to Our School
          </h2>
          <p className="text-gray-600 mb-4">
            Our school is more than a place of learning – it’s a nurturing home
            where traditions meet innovation through our German partnership.
          </p>
          <p className="text-gray-600 mb-6">
            With state-of-the-art infrastructure, cultural exchange programs and
            a warm academic atmosphere, we help students grow into global
            citizens.
          </p>
          <button className="bg-gradient-to-r from-red-600 to-yellow-400 text-white px-6 py-2 rounded-full font-semibold hover:brightness-110 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
