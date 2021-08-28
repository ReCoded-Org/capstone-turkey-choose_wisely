import React, { Component } from "react";
import "./style.scss";
// import { Col, Container, Row, Image, Button  } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaBeer } from 'react-icons/fa';
import { BsChatDotsFill } from "react-icons/bs";

import { FiPhoneForwarded } from "react-icons/fi";
import EmailsReCqen from "./../../images/ContactPageimgs/undraw_Emails_re_cqen.svg";
import PublicDiscussion from "./../../images/ContactPageimgs/undraw_Public_discussion_re_w9up.svg";

import WallPostRe from "./../../images/ContactPageimgs/undraw_Wall_post_re_y78d.svg";


// FiPhoneForwarded
// FiPhoneForwarded
//BsChatDotsFill
// FiPhoneForwarded
// "./../../images/icons/Pinterest.svg"
// /static/media/undraw_Chatting_re_j55r 1.b4f78395.svg

const photos = [
  {
    name: "Photo 1",
    url: WallPostRe,
  },
  {
    
    name: "Photo 2",
    url: EmailsReCqen,
  },
  {
    name: "Photo 3",
    url: PublicDiscussion,
  },
];
const photoItem = (url, alt, index) => {
  return (
    <div key={index}>
     
      <img className="slider_image" src={url} alt={alt} />
    </div>
  );
};

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      // speed: 500,
      slidesToScroll: 2,
      slidesToShow: 2,
      autoplay: true,
      speed: 2000,
    };

    return (
      <div>
        <Slider className="col" {...settings}>

          {photos.map((photo, index) => {
            return photoItem(photo.url, photo.name, index);
          })}
        </Slider>
      </div>
    );
  }
}
