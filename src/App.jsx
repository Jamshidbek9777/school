import React from "react";
import Wrapper from "./shared/wrapper";
import Sliders from "./shared/sliders";
import WhatWeOffer from "./shared/offer";
import SchoolStats from "./shared/statistics";
import OurCourses from "./shared/courses";
import ContactForm from "./shared/contactus";
import PricingSection from "./shared/pricing";
import CertifiedTeachers from "./shared/teachers";
import FaqSection from "./shared/faq";

function App() {
  return (
    <>
      <Wrapper>
        <Sliders />
        <WhatWeOffer />
        <SchoolStats />
        <CertifiedTeachers />
        <OurCourses />
        <PricingSection />
        <FaqSection />
        <ContactForm />
      </Wrapper>
    </>
  );
}

export default App;
