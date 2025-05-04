import React, { useState } from "react";
import Wrapper from "../shared/wrapper";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Image,
  GraduationCap,
  Palette,
  Users,
  Music,
  Camera,
} from "lucide-react";
import HeroSection from "../shared/hero";
import { useGallery } from "../queries/useQueries";
import { Helmet } from "react-helmet";

const categories = [
  { id: "all", name: "All Photos", icon: <Camera /> },
  { id: "school-life", name: "School Life", icon: <Users /> },
  { id: "academic", name: "Academic", icon: <GraduationCap /> },
  { id: "art", name: "Art & Music", icon: <Palette /> },
  { id: "events", name: "Events", icon: <Music /> },
  { id: "events", name: "Events", icon: <Music /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const { data = [] } = useGallery(i18n.language);
  console.log(data);

  return (
    <>
      <Helmet>
        <title>Gallery | DeutschSmart</title>
      </Helmet>
      <Wrapper>
        <div className="pt-24 pb-16">
          <HeroSection
            backgroundImage="/img/aboutBg.webp"
            title={t("nav4")}
            description={t("gallery1")}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="my-10"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4"
            >
              <AnimatePresence>
                {data.map((img, i) => (
                  <motion.div
                    layout
                    key={img.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="overflow-hidden rounded-xl shadow-md group cursor-pointer break-inside-avoid relative"
                    onClick={() => setSelectedImage(img)}
                  >
                    <motion.img
                      src={img.image}
                      alt={img.alt}
                      className="w-full object-cover rounded-xl"
                      style={{
                        height: `${280 + (i % 3) * 60}px`,
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-medium text-lg">
                        {img.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.button
                    aria-label="close"
                    className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/40 hover:bg-black/60 z-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedImage(null)}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="max-w-4xl max-h-[80vh] relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.alt}
                      loading="lazy"
                      className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 rounded-b-lg">
                      <h2 className="text-white text-xl font-semibold mb-1">
                        {selectedImage.title}
                      </h2>
                      <p className="text-yellow-300">
                        {
                          categories.find(
                            (c) => c.id === selectedImage.category
                          )?.name
                        }
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Wrapper>
    </>
  );
};

export default Gallery;
