import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "./../SectionTitle";
import { useTranslation } from "react-i18next";
import "./style.scss";
import RessourcesPage1 from "./../../images/RessourcesPage1.svg";
import RessourcesPage2 from "./../../images/RessourcesPage2.svg";

const RessourcesHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="ressource_page">
      <Container>
        <Row>
          <Col sm={2} md={4}>
            <div className="ressources_title">
              <SectionTitle
                bigTitle={t("ressourcesPage.header.title")}
                subtitle={t("ressourcesPage.header.subtitle")}
              />
              <Row>
                <img
                  alt="Illustration of a man working on a PC"
                  className="ressouces_page2"
                  src={RessourcesPage2}
                  fluid
                />
              </Row>
            </div>
          </Col>
          <Col sm={2} md={4}>
            <img
              alt="Illustration of 2 women planifying taks on a board"
              className="ressouces_page1"
              src={RessourcesPage1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RessourcesHeader;
