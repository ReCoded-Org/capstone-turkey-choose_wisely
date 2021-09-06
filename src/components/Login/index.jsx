import React from "react";
import { Col, Row } from "react-bootstrap";
import login from "./../../images/login.svg";
import arrow from "./../../images/icons/arrow.svg";
import "./style.scss";
import LoginForm from "./../LoginForm";
import AuthWithGoogle from "../AuthWthGoogle";
import { useTranslation } from "react-i18next";
import { useAlert } from "react-alert";
import { firebaseApp } from "../../firebase";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../utilities/types";

const Login = ({ onClose, showRegister }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const alert = useAlert();
  const submit = async (value) => {
    try {
      const authenticated = await firebaseApp
        .auth()
        .signInWithEmailAndPassword(value.email, value.password);
      const result = await authenticated;
      const { email, phoneNumber, photoURL, displayName } = result.user;
      dispatch({
        type: LOGIN,
        payload: { email, phoneNumber, photoURL, displayName },
      });

      onClose();
      alert.success(`${t("auth.loggedSuccess")}`);
    } catch (error) {
      alert.error(`${t("auth.loggedError")}`);
      alert.error(`${error}`);
    }
  };

  return (
    <div className="auth_portal_login_register">
      <Row className="justify-content-md-center auth_row">
        <Col lg={6} sm={12}>
          <div className="auth_container form_section_wrapper">
            <div className="top_section">
              <strong className="auth_title">{t("auth.login")}</strong>
              <button className="auth_back_button" onClick={onClose}>
                <img src={arrow} alt="back" />
              </button>
            </div>
            <div className="social_auth_section">
              <AuthWithGoogle onClose={onClose} />
              <button className="third_party_button_auh facebook">
                {t("facebook")}
              </button>
            </div>

            <LoginForm showRegister={showRegister} handelSend={submit} />
          </div>
        </Col>
        <Col lg={6} sm={12} className="d-none d-lg-block">
          <div className="auth_container">
            <img className="auth_image" src={login} alt="login" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
