import React from "react";
import "./style.scss";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../utilities/helpers";

const University = ({
  logo,
  name,
  location,
  url,
  type,
  isApplied,
  isLoggedIn,
}) => {
  const { t } = useTranslation();

  return (
    <div className="university">
      <Row>
        <Col>
          <div className="university_details">
            <Row>
              <Col sm={12} lg={5} className="university_details__logo">
                <img
                  className="university_logo"
                  src={getImageUrl(logo)}
                  alt={name}
                />
                <div className="university_details__info">
                  <h3 className="university_name">{name}</h3>
                  {url ? (
                    <Link
                      className="info_url underline"
                      to={{ pathname: `https://${url}` }}
                      target="_blank"
                    >
                      {url}
                    </Link>
                  ) : (
                    <span className="info_url">
                      {/* {t("universities.lists.unknown")} */}
                      {t("universities.lists.unknown")}
                    </span>
                  )}
                </div>
                {/* </div> */}
              </Col>
              <Col sm={12} lg={7} className="university_details__data">
                {/* <div className="university_details__data"> */}
                <span className="university_data">{location}</span>
                <span className="university_data">{type}</span>
                {isLoggedIn && (
                  <span
                    // onClick={e => }
                    className={`university_data application ${
                      isApplied === "applied" && "applied"
                    }`}
                  >
                    {isApplied === "applied"
                      ? `${t("universities.lists.applied")}`
                      : `${t("universities.lists.notApplied")}`}
                  </span>
                )}

                {/* <span>{isApplied}</span> */}
                {/* </div> */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default University;
