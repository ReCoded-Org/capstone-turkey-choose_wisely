import React from "react";
import TopTenUniCard from "../../components/TopTenUniCard";
import Blog from "../../components/BlogSection";
import "./style.scss";
import WhoAreWe from "./../../components/WhoAreWe";
import Map from "./../../components/Map";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      {/* this a temporally link i need it until we have the navbar ready */}
      <Link to="/universities">Go To Universities Page</Link>
      <WhoAreWe />
      <Blog />
      <Map />
      <TopTenUniCard />
    </main>
  );
};

export default Home;
