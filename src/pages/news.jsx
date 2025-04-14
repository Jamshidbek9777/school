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
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#E6B822] to-[#fdd835] text-white py-28 rounded-lg shadow-md mb-12 overflow-hidden">
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
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              School News
            </h1>
            <p className="text-lg text-black">
              A visual glimpse into the vibrant life of our students — learning,
              growing, and having fun together.
            </p>
          </div>
        </section>

        {/* News Articles */}
        <div className="grid md:grid-cols-2 gap-6">
          {newsArticles.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl border shadow hover:shadow-lg transition overflow-hidden"
            >
              {news.image && (
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-xl font-bold text-blue-600 mb-1">
                  {news.title}
                </h2>
                <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                <p className="text-gray-700 mb-3">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default NewsPage;
