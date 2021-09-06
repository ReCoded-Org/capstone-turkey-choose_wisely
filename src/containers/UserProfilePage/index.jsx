import React from "react";
import "./style.scss";
import UserFieldOfInterest from "./../../components/UserFieldOfInterest";
import UserInfo from "../../components/UserInfo";
import { useSelector } from "react-redux";
import notFoundImage from "./../../images/404.svg";
import { useTranslation } from "react-i18next";

const UserProfilePage = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { t } = useTranslation();
  return (
    <main className="profile_page">
      {isLoggedIn ? (
        <>
          <UserInfo />
          <UserFieldOfInterest />
        </>
      ) : (
        <div className="not_found">
          <div className="not_found__content">
            <img className="no_found_image" src={notFoundImage} alt="404" />
            <h2 className="error_number">404</h2>
            <p className="error_message">{t("auth.plzLogin")} </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default UserProfilePage;
