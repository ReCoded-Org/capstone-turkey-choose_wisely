import React from "react";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import facebook from "./../../images/icons/Facebook.svg";
import twitter from "./../../images/icons/Twitter.svg";
import { memebers } from "./../../utilities/variables";

import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import SectionTitle from "./../SectionTitle";

const AboutTeam = () => {
  const { t } = useTranslation();

  const settings = {
    focusOnSelect: true,
    dots: false,
    centerMode: true,
    infinite: true,

    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <div className="about_section_title">
        <SectionTitle title={t("Team.title")} />
      </div>

      <div>
        <Slider className="teams_slider" {...settings}>
          {memebers.length > 0 &&
            memebers.map((memeber, index) => {
              return (
                <div key={index} className="slide ">
                  <div className="slide-contact">
                    <div className="user-image">
                      <img
                        src={memeber.image}
                        alt="user"
                        className="user-photo"
                      />
                    </div>
                    <h5 className="team_memeber_name">{memeber.name}</h5>
                    <p className="team_memeber_dep"> {memeber.department}</p>
                    <div className="team_memeber_icons">
                      <Link
                        className="team_memeber_icons__icons_link"
                        to={memeber.facebook}
                      >
                        <img src={facebook} alt="facebook" />
                      </Link>
                      <Link
                        className="team_memeber_icons__icons_link"
                        to={memeber.twitter}
                      >
                        <img src={twitter} alt="twitter" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </Container>
  );
};

export default AboutTeam;
