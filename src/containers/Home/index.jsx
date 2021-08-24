import React from "react";
import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";
import WhatDidTheyAboutUsCard from "../../components/Cards";

const Home = () => {
  return (
    <main className="home">
      <WhoAreWe />
      <Map />
      <WhatDidTheyAboutUsCard />
    </main>
  );
};

export default Home;
