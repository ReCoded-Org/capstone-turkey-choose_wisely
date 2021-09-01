import React from "react";
import "./style.scss";

import Slider from "react-slick";

import EmailsReCqen from "./../../images/ContactPageimgs/undraw_Emails_re_cqen.svg";
import PublicDiscussion from "./../../images/ContactPageimgs/undraw_Public_discussion_re_w9up.svg";
import WallPostRe from "./../../images/ContactPageimgs/undraw_Wall_post_re_y78d.svg";

const sliderPhotos = [
  {
    name: "WallPostImg",
    url: WallPostRe,
  },
  {
    name: "EmailsReImg",
    url: EmailsReCqen,
  },
  {
    name: "PublicDiscussionImg",
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

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       // speed: 500,
//       slidesToScroll: 2,
//       slidesToShow: 2,
//       autoplay: true,
//       speed: 2000,
//     };

//     return (
//       <div>
//         <Slider className="col" {...settings}>
//           {sliderPhotos.map((photo, index) => {
//             return photoItem(photo.url, photo.name, index);
//           })}
//         </Slider>
//       </div>
//     );
//   }
// }

const SimpleSlider = () => {
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
        {sliderPhotos.map((photo, index) => {
          return photoItem(photo.url, photo.name, index);
        })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
