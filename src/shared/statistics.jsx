import React, { useEffect, useState } from "react";
import { GraduationCap, Users, Briefcase, Globe } from "lucide-react";
import Wrapper from "./wrapper";

const stats = [
  {
    icon: <GraduationCap size={36} />,
    value: "2500+",
    label: "O'quvchilar",
    bg: "bg-[#1e293b]",
  },
  {
    icon: <Users size={36} />,
    value: "120+",
    label: "O'qituvchilar",
    bg: "bg-[#dc2626]",
  },
  {
    icon: <Globe size={36} />,
    value: "15+",
    label: "Hamkorlar",
    bg: "bg-[#facc15]",
  },
  {
    icon: <Briefcase size={36} />,
    value: "10+",
    label: "Yillik tajriba",
    bg: "bg-[#1e293b]",
  },
];

const SchoolStats = () => {
  const [animatedStats, setAnimatedStats] = useState(stats);

  const countUp = (target, statIndex) => {
    let count = 0;
    const increment = Math.ceil(parseInt(target) / 100);
    const interval = setInterval(() => {
      count += increment;
      if (count >= parseInt(target)) {
        count = parseInt(target);
        clearInterval(interval);
      }
      setAnimatedStats((prevStats) => {
        const newStats = [...prevStats];
        newStats[statIndex].animatedValue = count + "+";
        return newStats;
      });
    }, 10);
  };

  useEffect(() => {
    stats.forEach((stat, index) => {
      countUp(stat.value.replace("+", ""), index);
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white my-10"
      style={{
        backgroundImage:
          "url('https://hadara-vschool.com/assets/img/stats-bg-2.jpg')",
      }}
    >
      <div className="absolute inset-0  bg-opacity-70 z-0" />

      <div className="relative z-10 py-24 px-6 lg:px-20 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
        <Wrapper>
          <div className="text-center">
            <h2 className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg">
              Bizning yutuqlarimiz
            </h2>
            <div className="w-28 h-1 mx-auto mb-12 bg-gradient-to-r from-yellow-400 via-red-600 to-black rounded" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {animatedStats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className={`w-16 h-16 ${stat.bg} text-white rounded-full flex items-center justify-center mb-4 shadow-md`}
                  >
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                    {stat.animatedValue || stat.value}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1 drop-shadow-md">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default SchoolStats;
