import React from "react";
import TopTenUniCard from "../../components/TopTenUniCard";
import Blog from "../../components/BlogSection";
import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <main className="home">
      {/* this a temporally link i need it until we have the navbar ready */}
      <Link to="/universities">{t("Go To Universities Page")}</Link>
      <WhoAreWe />
      <Blog />
      <Map />
      <TopTenUniCard />
    </main>
  );
};
export default Home;
