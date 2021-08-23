import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Style.scss";
import Avatar from "@material-ui/core/Avatar";

export default function SliderSecion(speech) {
  console.log(speech);

  return (
    <Container>
      <Row className="align-items-center justify-content-center Card">
        <Col className="ps-5 avatarComponent" md={2}>
          <Avatar className="Avatar" alt="Remy Sharp" />
        </Col>

        <Col className="col-md-offset-2 SpeechComponent" md={10}>
          <p className="paragraph">{speech.part1}</p>
          <h5 className="auther">{speech.part2}</h5>
          <h6 className="description">{speech.part3}</h6>
        </Col>
      </Row>
    </Container>
  );
}
