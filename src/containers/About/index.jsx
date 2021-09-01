import React from "react";

// components
import AboutHero from "./../../components/AboutHero";
import AboutTeam from "./../../components/AboutTeam";
import AboutService from "./../../components/AboutService";

// styling files
import "./../../components/AboutHero/style.scss";
import "./../../components/AboutService/style.scss";
import "./../../components/AboutTeam/style.scss";

const About = () => {
  return (
    <main>
      <AboutHero />
      <AboutTeam />
      <AboutService />
    </main>
  );
};

export default About;
