import React from "react";
import { Row, Col } from "react-bootstrap";
import "./style.scss";

const CardsWhoAreWe = ({ img, title, description, customClassName }) => {
  return (
    <Row>
      <Col lg={{ order: `${customClassName && "last"}` }}>
        <img
          alt={title}
          className="img"
          src={require(`./../../images/${img}.svg`)}
        />
      </Col>
      <Col>
        <div className="text">
          <h2 className="title">{title}</h2>
          <p className="sub_text">{description}</p>
        </div>
      </Col>
    </Row>
  );
};

export default CardsWhoAreWe;
