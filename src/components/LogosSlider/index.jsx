import React from "react";
import Slider from "react-slick";
import "./style.scss";
import { useState, useEffect } from "react";
import { storage } from "../../firebase";

export default function LogosSlider() {
  const [files, setFiles] = useState([]);

  const settings = {
    className: "center",
    centerMode: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchImages = async () => {
      let result = await storage.ref().child("images").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );
      return Promise.all(urlPromises);
    };
    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
    };
    loadImages();
  }, []);

  return (
    <div className="logos_slider">
      <Slider {...settings}>
        {files.map((img, i) => {
          return (
            <div className="card" key={i}>
              <div className="inner_warpper">
                <img loading="lazy" className="logo" src={img} alt="test" />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
