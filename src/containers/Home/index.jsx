import React from "react";
import TopTenUniCard from "../../components/TopTenUniCard";

import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";
import WhatDidTheyAboutUsCard from "../../components/Cards";

const Home = () => {
  return (
    <main className="home">
      <WhoAreWe />
      <TopTenUniCard />
      <Map />
      <WhatDidTheyAboutUsCard />
    </main>
  );
};

export default Home;
