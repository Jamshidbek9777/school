import React, { useEffect, useState } from "react";
import { GraduationCap, Users, Briefcase, Globe } from "lucide-react";

// Stats data
const stats = [
  {
    icon: <GraduationCap size={36} />,
    value: "2,500+",
    label: "Students",
    bg: "bg-black",
  },
  {
    icon: <Users size={36} />,
    value: "120+",
    label: "Teachers",
    bg: "bg-red-600",
  },
  {
    icon: <Globe size={36} />,
    value: "15+",
    label: "Partners",
    bg: "bg-yellow-400",
  },
  {
    icon: <Briefcase size={36} />,
    value: "10 Years",
    label: "Experience",
    bg: "bg-black",
  },
];

const SchoolStats = () => {
  const [animatedStats, setAnimatedStats] = useState(stats);

  // Count up animation
  const countUp = (target, statIndex) => {
    let count = 0;
    const increment = Math.ceil(parseInt(target) / 100); // Increment step
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
    <section className="bg-[#f9fafb] py-20 px-6 lg:px-20 relative rounded-lg">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-200 opacity-10 z-[-1]" />
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#050a41] mb-10 flex items-center flex-col">
          Our Achievements
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-black via-red-600 to-yellow-400 rounded" />
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {animatedStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${stat.bg} text-white rounded-full flex items-center justify-center mb-4 shadow-xl hover:shadow-2xl transition-all`}
              >
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#050a41]">
                {stat.animatedValue || stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolStats;
