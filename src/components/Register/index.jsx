import React from "react";
import { Col, Row } from "react-bootstrap";
import register from "./../../images/register.svg";
import arrow from "./../../images/icons/arrow.svg";
import "./style.scss";
import RegisterForm from "./../RegisterForm";
import AuthWithGoogle from "../AuthWthGoogle";
import { useTranslation } from "react-i18next";
import { firebaseApp } from "./../../firebase";
import { useAlert } from "react-alert";

const Register = ({ onClose, showRegister }) => {
  const { t } = useTranslation();
  const alert = useAlert();
  const submit = async (value) => {
    try {
      await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(value.email, value.password);
      var user = await firebaseApp.auth().currentUser;
      user.updateProfile({ displayName: value.name });
      alert.success(`${t("auth.registeredSuccess")}`);
      showRegister("login");
    } catch (error) {
      alert.error(`${t("auth.registeredError")}`);
      alert.error(`${error}`);
    }
  };
  return (
    <div className="auth_portal_login_register">
      <Row className="justify-content-md-center auth_row">
        <Col lg={6} sm={12}>
          <div className="auth_container form_section_wrapper">
            <div className="top_section">
              <strong className="auth_title">{t("auth.register")}</strong>
              <button className="auth_back_button" onClick={onClose}>
                <img src={arrow} alt="back" />
              </button>
            </div>
            <div className="social_auth_section">
              <AuthWithGoogle onClose={onClose} />
              <button disabled className="third_party_button_auh facebook">
                {t("facebook")}
              </button>
            </div>

            <RegisterForm showRegister={showRegister} handelSend={submit} />
            {/* <LoginForm showRegister={showRegister} handelSend={submit} /> */}
          </div>
        </Col>
        <Col lg={6} sm={12} className="d-none d-lg-block">
          <div className="auth_container">
            <img className="auth_image" src={register} alt="register" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
