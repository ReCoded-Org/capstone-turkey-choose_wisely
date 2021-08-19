import React from "react";
import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";

const Home = () => {
  return (
    <main className="home">
      <WhoAreWe />
      <Map />
    </main>
  );
};

export default Home;
