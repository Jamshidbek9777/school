import React from "react";
import Wrapper from "../shared/wrapper";

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
  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <section
          className="relative bg-cover bg-center py-36 rounded-lg shadow-md mb-16 overflow-hidden"
          style={{ backgroundImage: "url('/img/header3.JPG')" }}
          loading="lazy"
        >
          <img
            src="/img/line1.svg"
            alt="Top Left Illustration"
            className="absolute top-[-20px] left-[-20px] w-32 opacity-70 rotate-[-15deg]"
            loading="lazy"
          />
          <img
            src="/img/line2.svg"
            alt="Bottom Right Illustration"
            className="absolute bottom-[-20px] right-[-20px] w-32 opacity-80 rotate-[10deg]"
            loading="lazy"
          />

          <div className="relative z-10 flex justify-center">
            <div className="backdrop-blur-md bg-white/30 px-10 py-8 rounded-xl max-w-3xl text-center shadow-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Yangiliklar
              </h1>
              <p className="text-lg text-gray-800">
                Bizning maktabda bo‘layotgan eng so‘nggi voqealar va e’lonlar.
              </p>
            </div>
          </div>
        </section>

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
