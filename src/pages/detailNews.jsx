import React from "react";
import Wrapper from "../shared/wrapper";
import { useNews } from "../queries/useQueries";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const slugify = (str) =>
  str
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const NewsDetail = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data = [] } = useNews(i18n.language);

  if (!data.length) return <div className="pt-24 text-center">Loading...</div>;

  const article = data.find((item) => slugify(item.titleUz) === slug);

  if (!article) {
    return (
      <div className="pt-24 text-center text-red-500">Article not found</div>
    );
  }
  const bgImage = article.image;
  return (
    <>
      <Helmet>
        <title>News | DeutschSmart</title>
      </Helmet>
      <section
        className="relative pt-20 pb-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-blue-800 opacity-80"></div>

        <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="absolute inset-0 bg-[url('/img/pattern.svg')] bg-repeat opacity-5"></div>

        <Wrapper>
          <div className="relative z-10 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>
            </motion.div>
          </div>
        </Wrapper>
      </section>
      <Wrapper>
        <div className="pt-24 pb-16">
          <div className="p-4 max-w-3xl mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="mb-6 text-yellow-500 flex items-center gap-2 hover:underline"
            >
              <ArrowLeft size={18} />
              {t("news3")}
            </button>

            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

            <div
              className="prose prose-sm text-gray-700"
              dangerouslySetInnerHTML={{
                __html: article.desc
                  .replace(/([.!?])\s+(?=[A-Z])/g, "$1<br /><br />")
                  .replace(/\n/g, "<br />"),
              }}
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default NewsDetail;
