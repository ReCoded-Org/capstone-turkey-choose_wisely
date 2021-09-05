import React from "react";
import AppliedUni from "../AppliedUni";
import { Container, Row } from "react-bootstrap";

const StatusComponent = ({ universities }) => {
  return (
    <div className="status-component">
      <Container>
        <Row>
          {
            // eslint-disable-next-line
            universities.map((university) => {
              if (university.data.status !== false) {
                const { data } = university;
                return (
                  <AppliedUni
                    key={university.id}
                    university={data}
                    status={data.status}
                  />
                );
              }
            })
          }
        </Row>
      </Container>
    </div>
  );
};

export default StatusComponent;
