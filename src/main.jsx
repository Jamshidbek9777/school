import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./shared/navbar.jsx";
import Footer from "./shared/footer.jsx";

import "./config/i18n.js";

const Root = () => {
  return (
    <>
      {/* <Topbar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
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
