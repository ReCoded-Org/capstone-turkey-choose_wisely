import React from "react";
import "./style.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import Login from "./imgs/undraw_Mobile_login_re_9ntv 1.svg";
import Chatting from "./imgs/undraw_Chatting_re_j55r 1.svg";
import { useTranslation } from "react-i18next";
import Location from "./imgs/undraw_My_location_re_r52x 1.svg";
import Browsing from "./imgs/undraw_web_browsing_p77h 1.svg";
import Marketing from "./imgs/undraw_Mobile_marketing_re_p77p 1.svg";

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <div className="contact_us">
      <Container>
        <Row className="img_row_one">
          <Col className="d-none d-md-block" md={4}>
            <Image src={Location} thumbnail className="location" />
          </Col>
          <Col className="d-none d-md-block" xs={12} md={4}>
            <Image src={Browsing} thumbnail className="browsing" />
          </Col>
          <Col className="d-none d-md-block" xs={12} md={4}>
            <Image src={Login} thumbnail className="login" />
          </Col>
        </Row>
        <Row className="bottom_section_subheader">
          <Col>
            <Image src={Chatting} thumbnail className="chatting" />
          </Col>

          <Col xs={12} md={6}>
            <Row>
              <h3 className="title_a">{t("constactUs.hero.title")}</h3>
              <p className="purview">{t("constactUs.hero.purview")}</p>
            </Row>
          </Col>

          <Col>
            <Image src={Marketing} thumbnail className="marketing" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
