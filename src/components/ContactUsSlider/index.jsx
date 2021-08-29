import React, { Component } from "react";
import "./style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import EmailsReCqen from "./../../images/ContactPageimgs/undraw_Emails_re_cqen.svg";
import PublicDiscussion from "./../../images/ContactPageimgs/undraw_Public_discussion_re_w9up.svg";

import WallPostRe from "./../../images/ContactPageimgs/undraw_Wall_post_re_y78d.svg";

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
