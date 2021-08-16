import React from "react";
import image1 from "./../../images/WhoAreWe1.svg";
import image2 from "./../../images/WhoAreWe2.svg";
import { Container } from "react-bootstrap";
import CardsWhoAreWe from "./../CardsWhoAreWe";
import SectionTitle from "./../SectionTitle";
import { useTranslation } from "react-i18next";
import "./style.scss";

function WhoAreWe() {
  const { t } = useTranslation();
  const data = [
    {
      title: t("home.whoAreWe.card1Title"),
      description: t("home.whoAreWe.card1Text"),
      img: image1,
    },
    {
      title: t("home.whoAreWe.card2Title"),
      description: t("home.whoAreWe.card2Text"),
      img: image2,
    },
  ];

  const renderElements = () => {
    return data.map((element, index) => {
      return (
        <div className="card_row">
          <CardsWhoAreWe
            cutomClassName={index % 2 === 0 && true}
            title={element.title}
            description={element.description}
            img={element.img}
          />
        </div>
      );
    });
  };

  return (
    <div className="who_are_we">
      <Container>
        <SectionTitle title={t("home.whoAreWe.title")} />
        {renderElements()}
      </Container>
    </div>
  );
}

export default WhoAreWe;
