import React from "react";
import SliderSecion from "../Card";
import { Container } from "react-bootstrap";
import "./style.scss";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "2.5rem",
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
        <h2 className="header">{t('home.WhatDidTheySayAboutUs.HeaderSection')}</h2>

        <Slider {...settings}>
          {t("home.speeches", { returnObjects: true }).map((speech) => (
            <SliderSecion {...speech} />
          ))}
        </Slider>
      </Container>
    </div>
  );
}
