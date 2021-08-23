import React from "react";
import "./style.scss";

const SectionTitle = ({ title, subText }) => {
  return (
    <div className="section_title">
      <h2 className="title">{title}</h2>
      <p className="sub_text">{subText}</p>
    </div>
  );
};

export default SectionTitle;
