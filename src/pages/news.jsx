import React, { useState } from "react";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Tag } from "lucide-react";
import HeroSection from "../shared/hero";
import { useNews } from "../queries/useQueries";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const NewsPage = () => {
  const { t, i18n } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);

  const { data = [] } = useNews(i18n.language);

  const slugify = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const formatDate = (dateString, locale) => {
    try {
      return new Date(dateString).toLocaleDateString(locale, {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const locale = i18n.language === "uz" ? "uz-Latn-UZ" : i18n.language;

  return (
    <Wrapper>
      <div className="pt-24 pb-16">
        <HeroSection
          backgroundImage="/img/aboutBg.JPG"
          title={t("nav3")}
          description={t("news1")}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 mt-10"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          >
            {data.map((news) => {
              const slug = slugify(news.titleUz);

              return (
                <motion.div
                  key={news.id || slug}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 relative"
                >
                  {news.image && (
                    <div className="relative w-full h-[200px] overflow-hidden">
                      <motion.img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredCard === news.id ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 mb-3 text-sm">
                      <Calendar className="w-4 h-4 mr-1.5" />
                      <span className="text-sm text-gray-500 italic">
                        {formatDate(news.date, locale)}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                      {news.title}
                    </h2>
                    <p
                      className="text-gray-600 text-sm mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: news.desc.replace(/([.!?])\s*/g, "$1<br />"),
                      }}
                    />

                    <Link to={`/news/${slug}`}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-yellow-500 font-medium text-sm mt-auto cursor-pointer"
                      >
                        {t("news2")}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default NewsPage;
