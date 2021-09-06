import React from "react";

// components
import AboutHero from "./../../components/AboutHero";
import AboutTeam from "./../../components/AboutTeam";
import AboutService from "./../../components/AboutService";

// styling files
import "./../../components/AboutHero/style.scss";
import "./../../components/AboutService/style.scss";
import "./../../components/AboutTeam/style.scss";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t("navbar.chooseWisely")} | {t("navbar.about")}
        </title>
      </Helmet>
      <AboutHero />
      <AboutTeam />
      <AboutService />
    </main>
  );
};

export default About;
