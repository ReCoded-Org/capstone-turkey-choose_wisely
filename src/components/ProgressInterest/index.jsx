import React, { useState, useEffect } from "react";
import "./style.scss";
import { db } from "./../../firebase";
import { Container, Row, Col } from "react-bootstrap";

const ProgressInterest = () => {
  const [fields, setFields] = useState([]);
  const addNewField = () => {
    db.collection("InterestForm").onSnapshot(function (querySnapshot) {
      setFields(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          field: doc.data().field,
          percent: doc.data().percent,
        }))
      );
    });
  };
  console.log(fields);
  useEffect(() => {
    addNewField();
  }, []);

  const allFields = fields.map((interest) => {
    return (
      <Container>
        <Row className="interest" key={interest.id}>
          <Col className="field">
            <p>{interest.field}</p>
          </Col>
          <Col xs={8}>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: interest.percent + "%" }}
                role="progressbar"
                aria-valuenow={interest.percent}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </Col>
          <Col className="field_value">
            <p>{interest.percent}%</p>
          </Col>
        </Row>
      </Container>
    );
  });

  return <Row>{allFields}</Row>;
};

export default ProgressInterest;
