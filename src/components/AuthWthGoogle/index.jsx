import React from "react";
import { googleProvider, firebaseApp } from "../../firebase";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../utilities/types";
import { useAlert } from "react-alert";
import "./style.scss";
import { useTranslation } from "react-i18next";

const AuthWithGoogle = ({ onClose }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const LoginWithGoogle = async () => {
    try {
      const authenticate = await firebaseApp
        .auth()
        .signInWithPopup(googleProvider);

      const result = await authenticate;
      const { email, phoneNumber, photoURL, displayName } = result.user;
      dispatch({
        type: LOGIN,
        payload: { email, phoneNumber, photoURL, displayName },
      });
      alert.success(`${t("auth.loggedSuccess")}`);
      onClose();
    } catch (error) {
      onClose();
      console.log(error);
      alert.error(`${t("auth.loggedError")}`);
    }
  };

  const { t } = useTranslation();
  return (
    <button onClick={LoginWithGoogle} className="third_party_button_auh google">
      {t("google")}
    </button>
  );
};

export default AuthWithGoogle;
