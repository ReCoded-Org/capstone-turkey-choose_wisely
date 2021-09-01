import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.scss";
import Avatar from "@material-ui/core/Avatar";

export default function SliderCard({ speachText, auther, AutherSection }) {
  // console.log("speachText:", auther)
  // const { t } = useTranslation();

  return (
    <Container>
      <Row className="align-items-center justify-content-center Card">
        <Col className="ps-5 avatarComponent" sm={12} md={2}>
          <Avatar className="Avatar" alt="Remy Sharp" />
        </Col>

        <Col className="col-md-offset-2 SpeechComponent" sm={12} md={10}>
          <p className="paragraph">{speachText}</p>
          <h5 className="auther">{auther}</h5>
          <h6 className="description">{AutherSection}</h6>
        </Col>
      </Row>
    </Container>
  );
}
