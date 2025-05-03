import React from "react";
import Wrapper from "./shared/wrapper";
import Sliders from "./shared/sliders";
import WhatWeOffer from "./shared/offer";
import SchoolStats from "./shared/statistics";
import ContactForm from "./shared/contactus";
import PricingSection from "./shared/pricing";
import FaqSection from "./shared/faq";
import CertifiedTeachers from "./shared/teachers";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Sliders />

      <main>
        <section className="py-10 md:py-20">
          <WhatWeOffer />
        </section>

        <section className="py-10 md:py-20">
          <SchoolStats />
        </section>

        <section className="py-10 md:py-20 bg-white">
          <Wrapper>
            <CertifiedTeachers />
          </Wrapper>
        </section>

        <section className="py-10 md:py-20 bg-gray-50">
          <PricingSection />
        </section>

        <section className="py-10 md:py-20 bg-white">
          <FaqSection />
        </section>

        <section className="py-10 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
