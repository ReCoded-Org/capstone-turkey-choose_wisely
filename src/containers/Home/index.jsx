import React from "react";
import TopTenUniCard from "../../components/TopTenUniCard";
import Blog from "../../components/BlogSection";
import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";
import Hero from "./../../components/Hero";
import "./../../components/Hero/style.scss";
import WhatDidTheyAboutUsCard from "../../components/Cards";

const Home = () => {
  return (
    <main className="home">
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
