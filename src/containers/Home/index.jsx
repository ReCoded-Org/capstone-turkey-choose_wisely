import React from "react";
import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <Link to="/universities">Go To Universities Page</Link>

      <WhoAreWe />
      <Map />
    </main>
  );
};

export default Home;
