import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AboutComp from "../Components/About/AboutComp";
import WhatsAppComp from "../Components/whatsAppComp/WhatsAppComp";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutComp />
      <Footer />
      <WhatsAppComp />
    </>
  );
};

export default About;
