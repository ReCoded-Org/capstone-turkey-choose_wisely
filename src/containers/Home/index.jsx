import React from "react";
import Blog from "../../components/BlogSection";
import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";

const Home = () => {
  return (
    <main className="home">
      <WhoAreWe />
      <Blog />
      <Map />
    </main>
  );
};

export default Home;
