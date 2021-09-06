import React from "react";
import "./style.scss";
import StatusComponent from "./../../components/StatusComponent";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import notFoundImage from "./../../images/404.svg";
import { Helmet } from "react-helmet";

const Status = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  const { t } = useTranslation();
  return (
    <div className="status_page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t("navbar.chooseWisely")} | {t("navbar.status")}
        </title>
      </Helmet>
      {isLoggedIn ? (
        <StatusComponent />
      ) : (
        <div className="not_found">
          <div className="not_found__content">
            <img className="no_found_image" src={notFoundImage} alt="404" />
            <h2 className="error_number">404</h2>
            <p className="error_message">{t("auth.plzLogin")} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Status;
