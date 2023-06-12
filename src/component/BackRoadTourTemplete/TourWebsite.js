import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Tours from "./Tours";

const TourWebsite = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
};

export default TourWebsite;
