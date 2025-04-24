import React, { useEffect, useState } from "react";
import { GraduationCap, Users, Briefcase, Globe } from "lucide-react";
import Wrapper from "./wrapper";
import { useTranslation } from "react-i18next";

const SchoolStats = () => {
  const { t } = useTranslation();
  const stats = [
    {
      icon: <GraduationCap size={32} />, 
      value: "2500+", 
      label: t("ach2"),
      color: "indigo",
    },
    {
      icon: <Users size={32} />, 
      value: "120+", 
      label: t("ach3"),
      color: "sky",
    },
    {
      icon: <Globe size={32} />, 
      value: "15+", 
      label: t("ach4"),
      color: "violet",
    },
    {
      icon: <Briefcase size={32} />, 
      value: "10+", 
      label: t("ach5"),
      color: "teal",
    },
  ];

  const [animatedStats, setAnimatedStats] = useState(
    stats.map(stat => ({ ...stat, animatedValue: "0+" }))
  );

  useEffect(() => {
    const animateStats = () => {
      stats.forEach((stat, index) => {
        const target = parseInt(stat.value.replace("+", ""));
        let current = 0;
        const steps = 50;
        const increment = Math.ceil(target / steps);
        
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          
          setAnimatedStats(prevStats => {
            const newStats = [...prevStats];
            newStats[index] = {
              ...newStats[index],
              animatedValue: `${current}+`
            };
            return newStats;
          });
        }, 30);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }
    
    return () => observer.disconnect();
  }, []);

  

  return (
    <section 
      id="stats-section"
      className="py-20 bg-gradient-to-t from-blue-50 via-indigo-50 to-purple-50"
    >
      <Wrapper>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            {t("Our Progress")}
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("ach1")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("Explore our accomplishments and milestones")}
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {animatedStats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-6"
              style={{ 
                opacity: 0,
                animation: 'fade-in-up 0.7s ease-out forwards',
                animationDelay: `${200 + index * 100}ms`
              }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-${stat.color}-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              
              <div className="flex items-start mb-4">
                <div className={`flex-shrink-0 w-14 h-14 rounded-lg bg-${stat.color}-100 flex items-center justify-center`}>
                  <span className={`text-${stat.color}-500`}>{stat.icon}</span>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {stat.animatedValue || stat.value}
                  </h3>
                  <p className="text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              </div>
              
              <div className={`h-1 w-full bg-${stat.color}-100 rounded-full mt-4 overflow-hidden`}>
                <div 
                  className={`h-full bg-${stat.color}-500 rounded-full`} 
                  style={{ 
                    width: stat.animatedValue ? 
                      `${Math.min(100, parseInt(stat.animatedValue) / parseInt(stat.value.replace('+', '')) * 100)}%` : '0%',
                    transition: 'width 1.5s ease-out'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SchoolStats;
