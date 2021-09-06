import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.scss";
import Avatar from "@material-ui/core/Avatar";

export default function SliderSecion(speech) {
  return (
    <Container>
      <Row className="align-items-center justify-content-center Card">
        <Col className="ps-5 avatarComponent" md={2}>
          <Avatar className="Avatar" alt="Remy Sharp" />
        </Col>

        <Col className="col-md-offset-2 SpeechComponent" md={10}>
          <p className="paragraph">{speech.speechText}</p>
          <h5 className="auther">{speech.auther}</h5>
          <h6 className="description">{speech.AutherSection}</h6>
        </Col>
      </Row>
    </Container>
  );
}
