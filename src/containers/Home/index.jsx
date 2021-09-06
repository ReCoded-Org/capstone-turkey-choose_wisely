import React from "react";
import TopTenUniCard from "../../components/TopTenUniCard";
import Blog from "../../components/BlogSection";
import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";
import Hero from "./../../components/Hero";
import "./../../components/Hero/style.scss";
import WhatDidTheyAboutUsCard from "../../components/Cards";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t("navbar.chooseWisely")} | {t("navbar.home")}
        </title>
      </Helmet>
      <Hero />

      <WhoAreWe />
      <TopTenUniCard />
      <Blog />
      <Map />
      <WhatDidTheyAboutUsCard />
    </main>
  );
};
export default Home;
