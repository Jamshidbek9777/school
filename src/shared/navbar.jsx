import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./wrapper";
import { Globe, Languages, X } from "lucide-react";
import { Dropdown } from "antd";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { name: t("nav1"), path: "/" },
    { name: "About", path: "/about" },
    { name: "Teacher", path: "/teachers" },
    { name: "Courses", path: "/courses" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const languageOptions = [
    { key: "uz", label: "O'zbek" },
    { key: "ru", label: "Русский" },
    { key: "en", label: "English" },
    { key: "de", label: "Deutch" },
  ];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    window.location.reload();
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <Wrapper>
          <div className="flex items-center justify-between h-[70px]">
            <div className="flex items-center h-full">
              <a href="/">
                <img
                  src="/img/logo.png"
                  alt="Kiddos Logo"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>
            <nav className="hidden lg:flex space-x-6 text-[#050a41] font-medium items-center">
              {navLinks.map((link) => (
                <>
                  <Link
                    key={link.name}
                    to={link.path}
                    className="hover:text-yellow-600 transition"
                  >
                    {link.name}
                  </Link>
                </>
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
                <div className="hidden md:flex items-center gap-[2px] cursor-pointer  p-2 rounded-[10px] transition-all ease-in-out select-none">
                  <Languages size={18} />
                  <h1 className="text-lg hidden xl:flex">{i18n.language}</h1>
                </div>
              </Dropdown>
            </nav>

            <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
              <div className="w-[25px] h-[2px] bg-[#050a41] mb-[4px]"></div>
              <div className="w-[25px] h-[2px] bg-[#050a41] mb-[4px]"></div>
              <div className="w-[25px] h-[2px] bg-[#050a41]"></div>
            </div>
          </div>
        </Wrapper>
      </div>

      <div
        className={`fixed inset-0 bg-white z-[60] transition-all duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b">
          <div className="flex items-center">
            <img
              src="/img/logo.png"
              alt="Kiddos Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
          <button
            onClick={toggleMenu}
            className="text-2xl text-[#050a41] font-bold"
          >
            <X className="cursor-pointer" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-6 text-[#050a41] text-lg font-medium">
          {navLinks.map((link) => (
            <>
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            </>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
