import React from "react";
import notFoundImage from "./../../images/404.svg";
import "./style.scss";

const NotFound = () => {
  return (
    <div className="not_found">
      <div className="not_found__content">
        <img className="no_found_image" src={notFoundImage} alt="404" />
        <h2 className="error_number">404</h2>
        <p className="error_message">The page you requested is not found</p>
      </div>
    </div>
  );
};

export default NotFound;
