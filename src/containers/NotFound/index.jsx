import React from "react";
import notFoundImage from "./../../images/404.svg";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not_found">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t("navbar.chooseWisely")} | {t("notFounded.message")}
        </title>
      </Helmet>
      <div className="not_found__content">
        <img className="no_found_image" src={notFoundImage} alt="404" />
        <h2 className="error_number">404</h2>
        <p className="error_message">{t("notFounded.message")} </p>
      </div>
    </div>
  );
};

export default NotFound;
