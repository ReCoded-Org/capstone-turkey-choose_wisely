import React, { useEffect, useState } from "react";
import AppliedUni from "../AppliedUni";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const StatusComponent = () => {
  const { universities } = useSelector((state) => state.universities);
  const { t } = useTranslation();
  const [stat, setStat] = useState(false);

  useEffect(() => {
    const stat = universities.filter(
      (university) => university.data.status !== false
    );
    if (stat.length > 0) {
      setStat(true);
    }
    // eslint-disable-next-line
  }, [universities]);

  return (
    <div className="status-component">
      <Container>
        <Row>
          {stat ? (
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
          ) : (
            <div className="not_found">
              <div className="not_found__content">
                <h2 className="error_number">{t("dataNotFound")}</h2>
              </div>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default StatusComponent;
