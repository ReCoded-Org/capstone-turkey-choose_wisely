import React from "react";
import "./style.scss";

const SectionTitle = ({ bigTitle, subtitle, title, subText }) => {
  return (
    <div className="section_title">
      <h1 className="big_title">{bigTitle && bigTitle}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <h2 className="title">{title && title}</h2>
      {subText && <p className="sub_text">{subText}</p>}
    </div>
  );
};

export default SectionTitle;
