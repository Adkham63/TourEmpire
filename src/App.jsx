import React, { useState, useRef } from "react";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { TourSection } from "./components/TourSection";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
  const contactSectionRef = useRef(null);

  const scrollToContact = () => {
    contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <TourSection scrollToContact={scrollToContact}/>
        <About className="about-container" />
        <Testimonials />

        <div ref={contactSectionRef}></div>
        <ContactForm />

        <Footer />
      </div>
    </>
  );
}

export default App;
