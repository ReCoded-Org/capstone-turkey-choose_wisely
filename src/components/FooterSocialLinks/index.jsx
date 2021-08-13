import React from "react";
import Facebook from "./../../images/icons/Facebook.svg";
import Instagram from "./../../images/icons/Instagram.svg";
import Pinterest from "./../../images/icons/Pinterest.svg";
import Twitter from "./../../images/icons/Twitter.svg";
import Vk from "./../../images/icons/Vk.svg";
import "./style.scss";

const SocialLink = () => {
  return (
    <ul className="icons__list">
      <li>
        <img src={Vk} alt="facebook" />
      </li>
      <li>
        <img src={Pinterest} alt="facebook" />
      </li>
      <li>
        <img src={Instagram} alt="facebook" />
      </li>
      <li>
        <img src={Twitter} alt="facebook" />
      </li>
      <li>
        <img src={Facebook} alt="facebook" />
      </li>
    </ul>
  );
};

export default SocialLink;
