import React from "react";
import SliderCard from "../SliderCard";
import SectionTitle from "../SectionTitle";
import { Container, Col, Row } from "react-bootstrap";
import "./style.scss";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { speeches } from "./../../data.json";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background :"#386641" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "flex", background: "#FFFFFF "  }}
//       onClick={onClick}
//     />
//   );
// }
export default function WhatDidTheyAboutUsCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { t } = useTranslation();

  return (
    <div className="comments_card">
      <Container>
        <Row className="sider_title">
          <Col>
            <SectionTitle title={t("WhatDidTheySayAboutUs.HeaderSection")} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={11} md={12}>
            <Slider {...settings}>
              {/* {t("home.speeches", { returnObjects: true }).map((speech, index) => ( */}
              {speeches.map((speech, index) => (
                <SliderCard
                  key={index}
                  speachText={t(speech.speechText)}
                  auther={t(speech.auther)}
                  AutherSection={t(speech.AutherSection)}
                />
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
