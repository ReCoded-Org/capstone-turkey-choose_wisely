import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";

export default function CardsWhoAreWe({
  img,
  title,
  description,
  cutomClassName,
}) {
  console.log("customClassName:", cutomClassName);
  return (
    <Row>
      <Col lg={{ order: `${cutomClassName && "last"}` }}>
        <img alt={title} className="img" src={img} />
      </Col>
      <Col>
        <div className="text">
          <h2 className="title">{title}</h2>
          <p className="sub_text">{description}</p>
        </div>
      </Col>
    </Row>
  );
}
