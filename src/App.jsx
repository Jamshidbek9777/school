import React from "react";
import Wrapper from "./shared/wrapper";
import Sliders from "./shared/sliders";
import WhatWeOffer from "./shared/offer";
import SchoolStats from "./shared/statistics";
import ContactForm from "./shared/contactus";
import PricingSection from "./shared/pricing";
import FaqSection from "./shared/faq";

function App() {
  return (
    <>
      <Sliders />
      <WhatWeOffer />
      <SchoolStats />
      <PricingSection />
      <FaqSection />
      <ContactForm />
    </>
  );
}

export default App;
