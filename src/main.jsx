import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./shared/navbar.jsx";
import Footer from "./shared/footer.jsx";

import "./config/i18n.js";
import About from "./pages/about.jsx";
import Teachers from "./pages/teachers.jsx";
import Courses from "./pages/courses.jsx";
import Pricing from "./pages/pricing.jsx";
import Contact from "./pages/contact.jsx";

const Root = () => {
  return (
    <>
      {/* <Topbar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);

createRoot(document.getElementById("root")).render(<AppWrapper />);
