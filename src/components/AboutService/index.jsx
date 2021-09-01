import React from "react";

// import bootstrab
import { Container } from "react-bootstrap";

// import translation
import { useTranslation } from "react-i18next";
import CardsWhoAreWe from "./../CardsWhoAreWe";
import SectionTitle from "./../SectionTitle";
// import icons
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { aboutData } from "./../../data.json";

const AboutService = () => {
  const { t } = useTranslation();

  const renderElements = () => {
    return aboutData.map((element) => {
      return (
        <div className="card_row about_service">
          <CardsWhoAreWe
            customClassName={element.id % 2 !== 0 && true}
            title={t(element.title)}
            description={t(element.description)}
            img={element.img}
          >
            <div className="icons">
              <span className="instagram_icon">
                <AiFillInstagram />
              </span>
              <span className="twiter_icon">
                <AiFillTwitterCircle />
              </span>
              <span className="facebook_icon">
                <FaFacebook />
              </span>
            </div>
          </CardsWhoAreWe>
        </div>
      );
    });
  };

  return (
    <Container>
      <div className="about_section_title">
        <SectionTitle title={t("AboutPage.title")} />
      </div>
      {renderElements()}
    </Container>
  );
};

export default AboutService;
