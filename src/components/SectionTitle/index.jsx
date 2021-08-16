import React from "react";
import "./style.scss";

const SectionTitle = ({ title, subText }) => {
  return (
    <div className="section_title">
      <h2 className="title">{title !== "" && title}</h2>
      {subText !== "" && <p className="sub_text">{subText}</p>}
    </div>
  );
};

export default SectionTitle;
