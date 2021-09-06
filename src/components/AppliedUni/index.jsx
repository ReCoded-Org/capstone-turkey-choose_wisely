import React from "react";
import { Col, Image } from "react-bootstrap";
import "./style.scss";

const AppliedUni = ({ university, status }) => {
  const [statusObject] = status;
  return (
    <>
      <Col lg={4} sm={6}>
        <div className="status_element">
          <Image src={university.image} roundedCircle />
          <div className="status_element__details">
            <span className="uni_name">{university.enName}</span>
            <span className="uni_city">{university.location}</span>
            <span className="uni_date">{statusObject.data?.date}</span>
            <span
              className={`uni_status ${
                statusObject.data.status === "rejected" ? "rejected" : "pending"
              }`}
            >
              {statusObject.data.status}
            </span>
          </div>
        </div>
      </Col>
    </>
  );
};

export default AppliedUni;
