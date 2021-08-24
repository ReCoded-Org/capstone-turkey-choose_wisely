import SliderSecion from "../Card";
import { Container } from "react-bootstrap";
import "./style.scss";
import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WhatDidTheyAboutUsCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  const { t } = useTranslation();

  return (
    <div className="card">
      <Container>
        <h2 className="header">What did they say about us</h2>

        <Slider {...settings}>
          {t("home.speeches", { returnObjects: true }).map((speech) => (
            <SliderSecion {...speech} />
          ))}
        </Slider>
      </Container>
    </div>
  );
}
