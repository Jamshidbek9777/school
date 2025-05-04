import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Wrapper from "./wrapper";
import { ChevronDown, Languages, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const navLinks = [
    { name: t("nav1"), path: "/about" },
    { name: t("nav2"), path: "/admission" },
    { name: t("nav4"), path: "/gallery" },
    { name: t("nav3"), path: "/news" },
    // { name: t("nav6"), path: "/courses" },
    { name: t("nav7"), path: "/teachers" },
    { name: t("nav8"), path: "/schedule" },
  ];

  const languageOptions = [
    { key: "uz", label: "O'zbek" },
    { key: "ru", label: "Русский" },
    { key: "en", label: "English" },
    { key: "de", label: "Deutsch" },
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    window.location.reload();
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-all duration-300">
        <Wrapper>
          <div className="flex items-center justify-between h-[80px]">
            <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
              <div className="w-[25px] h-[2px] bg-black mb-[4px]" />
              <div className="w-[25px] h-[2px] bg-black mb-[4px]" />
              <div className="w-[25px] h-[2px] bg-black" />
            </div>

            <div className="flex-1 flex justify-center lg:justify-start lg:static absolute left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-0">
              <a href="/">
                <img
                  src="/img/logo.webp"
                  alt="DeutschSmart Logo"
                  className="h-[55px] w-auto object-contain rounded-lg"
                  loading="lazy"
                />
              </a>
            </div>

            <nav className="hidden lg:flex flex-1 justify-center space-x-6 text-black font-medium">
              {navLinks
                .filter(
                  (link) => !["/teachers", "/schedule"].includes(link.path)
                )
                .map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`transition hover:text-yellow-400 ${
                      location.pathname === link.path
                        ? "text-yellow-400 font-semibold"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              <div className="relative">
                <button
                  onClick={() => setSubmenuOpen((prev) => !prev)}
                  className="flex items-center gap-1 cursor-pointer hover:text-yellow-400 transition"
                >
                  <p>{t("nav5")}</p>
                  <ChevronDown size={20} />
                </button>

                {isSubmenuOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-40 z-50">
                    <Link
                      to="/teachers"
                      className="block px-4 py-2 hover:bg-yellow-100 transition"
                      onClick={() => setSubmenuOpen(false)}
                    >
                      {t("nav7")}
                    </Link>
                    <Link
                      to="/schedule"
                      className="block px-4 py-2 hover:bg-yellow-100 transition"
                      onClick={() => setSubmenuOpen(false)}
                    >
                      {t("nav8")}
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            <div className="flex items-center gap-2 px-4 lg:border-l border-gray-200">
              <div className="flex items-center gap-2">
                <Languages size={18} />
                <select
                  value={i18n.language}
                  onChange={(e) => changeLanguage(e.target.value)}
                  className="bg-transparent text-black uppercase cursor-pointer focus:outline-none"
                >
                  {languageOptions.map((lang) => (
                    <option key={lang.key} value={lang.key}>
                      {lang.key}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <div
        className={`fixed inset-0 bg-white/80 backdrop-blur-lg text-black z-[60] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="h-10 w-auto object-contain rounded-lg"
            loading="lazy"
          />
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className={`transition hover:text-yellow-400 ${
                location.pathname === link.path
                  ? "text-yellow-400 font-semibold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
