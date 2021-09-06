import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./style.scss";
import { useTranslation } from "react-i18next";
import Accordion from "react-bootstrap/Accordion";

const CardsResourcesInfos = ({
  scholarshipsState,
  regulationsState,
  supportState,
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row className="">
        <Col lg={4} md={12}>
          <div className="card_content_wrapper">
            <h3 className="theme">{scholarshipsState.theme}</h3>
            <h2 className="title">{scholarshipsState.title}</h2>
            {scholarshipsState.infor !== undefined &&
            scholarshipsState.infor.length > 0
              ? scholarshipsState.infor.map((block, index) => {
                  return (
                    <div className="new-line" key={index}>
                      {block.text.map((line, index) => {
                        return (
                          <p key={index} className="infos">
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  );
                })
              : ""}
          </div>
        </Col>
        <Col lg={4} md={12}>
          <div className="card_content_wrapper">
            <h3 className="theme">{regulationsState.theme}</h3>
            <h2 className="title">{regulationsState.title}</h2>
            {regulationsState.infor !== undefined &&
            regulationsState.infor.length > 0
              ? regulationsState.infor.map((block, index) => {
                  return (
                    <div className="new-line" key={index}>
                      {block.text.map((line, index) => {
                        return (
                          <p key={index} className="infos">
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  );
                })
              : ""}
          </div>
        </Col>
        <Col lg={4} md={12}>
          <div className="card_content_wrapper support">
            <h3 className="theme">{supportState.theme}</h3>
            <h2 className="title">{supportState.title}</h2>
            <p className="infos">{t("resourcesPage.ResourcesInfos.support")}</p>
            <Accordion flush>
              {supportState.infor !== undefined && supportState.infor.length > 0
                ? supportState.infor.map((block, index) => {
                    return block.text.map((line, index) => {
                      return (
                        <Accordion.Item key={index} eventKey={`${index}`}>
                          <Accordion.Header>{line.heading}</Accordion.Header>
                          <Accordion.Body>{line.content}</Accordion.Body>
                        </Accordion.Item>
                      );
                    });
                  })
                : ""}
            </Accordion>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CardsResourcesInfos;
