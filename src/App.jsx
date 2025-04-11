import React from "react";
import Wrapper from "./shared/wrapper";
import Sliders from "./shared/sliders";
import WhatWeOffer from "./shared/offer";
import SchoolStats from "./shared/statistics";
import OurCourses from "./shared/courses";
import ContactForm from "./shared/contactus";
import PricingSection from "./shared/pricing";

function App() {
  return (
    <>
      <Wrapper>
        <Sliders />
        <WhatWeOffer />
        <SchoolStats />
        <OurCourses />
        <PricingSection />
        <ContactForm />
      </Wrapper>
    </>
  );
}

export default App;
