import React from "react";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";
import HeroSection from "../shared/hero";

const newsArticles = [
  {
    id: 1,
    title: "School Science Fair Winners Announced",
    date: "April 12, 2025",
    description:
      "Congratulations to all the students who participated in the annual science fair! Here are the winners...",
    image: "/img/news.jpg",
  },
  {
    id: 2,
    title: "New Library Opening Next Week",
    date: "April 10, 2025",
    description:
      "We are excited to announce the opening of our newly renovated library with modern facilities and more books!",
    image: "/img/news.jpg",
  },
  {
    id: 3,
    title: "German Language Club Starts New Semester",
    date: "April 8, 2025",
    description:
      "The new semester of the German Language Club is starting with exciting programs and a guest speaker from Germany.",
    image: "/img/news.jpg",
  },
];

const NewsPage = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <HeroSection
          backgroundImage="/img/aboutBg.JPG"
          title={t("nav3")}
          description={t("news1")}
        />

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((news) => (
            <div
              key={news.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {news.image && (
                <div className="w-full overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-[#1c1f52] mb-1">
                  {news.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <p className="text-gray-700 text-sm">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default NewsPage;
