import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import { Languages, X } from "lucide-react";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { name: t("nav1"), path: "/" },
    { name: "Biz haqimizda", path: "/about" },
    { name: "Kurslar", path: "/courses" },
    { name: "Qabul", path: "/admission" },
    { name: "Yangiliklar", path: "/news" },
    { name: "Bog'lanish", path: "/contact" },
    { name: "Galareya", path: "/gallery" },
    { name: "O'qituvchilar", path: "/teachers" },
    { name: "Dars jadvallar", path: "/schedule" },
    { name: "Narxlar", path: "/pricing" },
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

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-all duration-300">
        <Wrapper>
          <div className="flex items-center justify-between h-[80px]">
            <div className="flex items-center h-full">
              <a href="/">
                <img
                  src="/img/logo.png"
                  alt="DeutschSmart Logo"
                  className="h-[65px] w-auto object-contain rounded-lg"
                />
              </a>
            </div>

            <nav className="hidden lg:flex space-x-6 text-black font-medium items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-yellow-400 transition duration-200"
                >
                  {link.name}
                </Link>
              ))}

              <Dropdown
                menu={{
                  items: languageOptions.map((lang) => ({
                    key: lang.key,
                    label: (
                      <div onClick={() => changeLanguage(lang.key)}>
                        {lang.label}
                      </div>
                    ),
                  })),
                }}
                trigger={["click"]}
              >
                <div className="flex items-center gap-1 cursor-pointer px-3 py-1 rounded-lg hover:bg-white/10 transition">
                  <Languages size={18} />
                  <span className="text-white text-sm hidden xl:inline">
                    {i18n.language}
                  </span>
                </div>
              </Dropdown>
            </nav>

            <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
              <div className="w-[25px] h-[2px] bg-black mb-[4px]" />
              <div className="w-[25px] h-[2px] bg-black mb-[4px]" />
              <div className="w-[25px] h-[2px] bg-black" />
            </div>
          </div>
        </Wrapper>
      </div>

      <div
        className={`fixed inset-0 bg-white text-black z-[60] transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
          <img
            src="/img/logo.jpg"
            alt="Logo"
            className="h-10 w-auto object-contain rounded-lg"
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
              className="hover:text-yellow-400 transition"
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
