import React from "react";
import TopTenUniCard from "../../components/TopTenUniCard";

import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";

const Home = () => {
  return (
    <main className="home">
      <WhoAreWe />
      <Map />
      <TopTenUniCard />
    </main>
  );
};

export default Home;
