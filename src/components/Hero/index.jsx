import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import hero from "./../../images/hero.svg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <header className="hero">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="hero_contant">
              <div className="hero_title">
                <h1>{t("home.hero.heroTitle")}</h1>
              </div>
              <div className="hero_text">
                <p> {t("home.hero.heroSubTitle")} </p>
                <p> {t("home.hero.heroSubTitle2")} </p>
              </div>
              <div className="hero_search">
                <input type="search" placeholder="Search... " />
                <button> GO </button>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <img src={hero} alt="hero section" />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Hero;
