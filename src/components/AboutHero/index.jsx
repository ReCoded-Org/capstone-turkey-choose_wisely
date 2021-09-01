import React from "react";

import { Container } from "react-bootstrap";
import "./style.scss";
// image links
import heroAbout from "./../../images/About/heroAbout.svg";

const AboutHero = () => {
  return (
    <Container>
      <div className="hero">
        <img src={heroAbout} alt="hero section" />
      </div>
    </Container>
  );
};

export default AboutHero;
