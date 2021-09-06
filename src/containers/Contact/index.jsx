import React from "react";
import "./style.scss";
import ContactUs from "./../../components/ContactUs";
import ContactUsForm from "./../../components/ContactUsForm";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t("navbar.chooseWisely")} | {t("navbar.contact")}
        </title>
      </Helmet>
      <ContactUs />
      <ContactUsForm />
    </div>
  );
};

export default Contact;
