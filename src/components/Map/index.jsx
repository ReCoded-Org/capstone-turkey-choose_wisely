import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import uniMap from "./../../images/uni.jpg";
import "./style.scss";

function Map() {
  return (
    <Container className="text-center">
      <Row>
        <Col lg={12}>
          <img
            src={uniMap}
            className="map"
            alt="Map of Universities in Turkey"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Map;
