import React from "react";
import notFoundImage from "./../../images/404.svg";
import { useTranslation } from "react-i18next";
import "./style.scss";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not_found">
      <div className="not_found__content">
        <img className="no_found_image" src={notFoundImage} alt="404" />
        <h2 className="error_number">404</h2>
        <p className="error_message">{t("notFounded.message")} </p>
      </div>
    </div>
  );
};

export default NotFound;
