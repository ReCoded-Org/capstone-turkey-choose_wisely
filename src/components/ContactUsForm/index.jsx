import React from "react";
import { db } from "./../../firebase";
import { Col, Container, Row } from "react-bootstrap";
import ContactUsSlider from "./../../components/ContactUsSlider";
import "./style.scss";
import ContactUsInputs from "./../ContactUsInputs";
import { useAlert } from "react-alert";
import { useTranslation } from "react-i18next";

const ContactUsForm = () => {
  const alert = useAlert();
  const { t } = useTranslation();

  const submit = async (message) => {
    try {
      await db.collection("ContactUsForm").add(message);
      alert.success(t("alertMessages.contactSuccess"));
    } catch (error) {
      alert.error(`${error.message}`);
    }
  };

  return (
    <Container className="pt-5 contact-us_form">
      <div className="slider_postion">
        <ContactUsSlider />
      </div>
      <Row>
        <Col className="form_wrapper" xs={12} md={8}>
          <ContactUsInputs handelSend={submit} />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsForm;
