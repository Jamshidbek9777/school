import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Wrapper from "./wrapper";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14">
      <Wrapper>
        <div className=" ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-3xl font-extrabold text-yellow-400 mb-4">
                Our School
              </h3>
              <p className="text-sm text-gray-300">
                We provide quality education with a global outlook and strong
                partnerships with institutions worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-extrabold text-yellow-400 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-red-600 transition-all"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-red-600 transition-all"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/courses"
                    className="text-gray-300 hover:text-red-600 transition-all"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-red-600 transition-all"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Contact Info */}
            <div>
              <h3 className="text-3xl font-extrabold text-yellow-400 mb-4">
                Contact Us
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>+49 123 456 789</li>
                <li>info@ourschool.com</li>
                <li>123 School Street, Berlin, Germany</li>
              </ul>
            </div>

            {/* Column 4 - Social Media */}
            <div>
              <h3 className="text-3xl font-extrabold text-yellow-400 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-all transform hover:scale-110"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-all transform hover:scale-110"
                >
                  <Twitter size={28} />
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-all transform hover:scale-110"
                >
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-10 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Our School | All Rights Reserved
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
