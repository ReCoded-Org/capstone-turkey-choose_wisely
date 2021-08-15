import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import hero from "./../../images/hero.svg";

function Hero() {
  return (
    <header className="hero">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="hero_contant">
              <div className="hero_title">
                <h1>
                  The Only Place for <br />
                  selecting you future
                </h1>
              </div>
              <div className="hero_text">
                <p> You can find all the content you are looking for about </p>
                <p> universities and learning approaches. </p>
              </div>
              <div className="hero_search">
                <input type="search" placeholder="search... " />
                <button> GO </button>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <img src={hero} alt="" />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Hero;
