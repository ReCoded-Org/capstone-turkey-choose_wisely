import React, { Component } from "react";
import "./style.scss";
// import { Col, Container, Row, Image, Button  } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: "Photo 1",
    url: "/static/media/undraw_Chatting_re_j55r 1.b4f78395.svg",
  },
  {
    name: "Photo 2",
    url: "/static/media/undraw_Chatting_re_j55r 1.b4f78395.svg",
  },
  {
    name: "Photo 1",
    url: "/static/media/undraw_Chatting_re_j55r 1.b4f78395.svg",
  },
  {
    name: "Photo 2",
    url: "/static/media/undraw_Chatting_re_j55r 1.b4f78395.svg",
  },
  {
    name: "Photo 1",
    url: "/static/media/undraw_Chatting_re_j55r 1.b4f78395.svg",
  },
  {
    name: "Photo 2",
    url: "/static/media/undraw_Chatting_re_j55r 1.b4f78395.svg",
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
