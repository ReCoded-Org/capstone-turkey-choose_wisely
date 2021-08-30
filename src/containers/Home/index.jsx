import React from "react";
import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";
import Hero from "./../../components/Hero";

import "./../../components/Hero/style.scss";

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <WhoAreWe />
      <Map />
    </main>
  );
};

export default Home;
