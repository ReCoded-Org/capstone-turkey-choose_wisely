import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import button from "./../../images/button.svg";
import add from "./../../images/add.svg";
import ProgressInterest from "./../ProgressInterest";
import InterestForm from "../InterestForm";

function UserFieldOfInterest() {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container>
      <Row>
        <div className="title">
          <Col className="col-lg-12 d-flex">
            <h1> {t("userProfile.fieldInterest.title")}</h1>
            <img
              className="add"
              alt="+"
              src={add}
              onClick={() => setModalShow(true)}
            />
            <InterestForm show={modalShow} onHide={() => setModalShow(false)} />
          </Col>
        </div>
      </Row>
      <ProgressInterest />
      <Link to="/status" style={{ textDecoration: "none" }}>
        <Col className="col-lg-12 d-flex">
          <p className="link">{t("userProfile.fieldInterest.linkto")}</p>
          <img className="button" alt="link" src={button} />
        </Col>
      </Link>
    </Container>
  );
}

export default UserFieldOfInterest;
