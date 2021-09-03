import React from "react";
import { Container } from "react-bootstrap";
import CardsWhoAreWe from "./../CardsWhoAreWe";
import SectionTitle from "./../SectionTitle";
import { useTranslation } from "react-i18next";
import { whoAreWe } from "./../../data.json";
import "./style.scss";

const WhoAreWe = () => {
  const { t } = useTranslation();

  const renderElements = () => {
    return whoAreWe.map((element, index) => {
      return (
        <div key={index} className="card_row">
          <CardsWhoAreWe
            customClassName={element.id % 2 === 0 && true}
            title={t(element.title)}
            description={t(element.description)}
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
};

export default WhoAreWe;
