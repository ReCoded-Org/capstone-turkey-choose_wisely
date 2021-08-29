import React from "react";
import { Container } from "react-bootstrap";
import uniMap from "./../../images/uni.jpg";
import "./style.scss";

function Map() {
  return (
    <Container className="text-center">
      <img src={uniMap} className="map" alt="Map of Universities in Turkey" />
    </Container>
  );
}

export default Map;
