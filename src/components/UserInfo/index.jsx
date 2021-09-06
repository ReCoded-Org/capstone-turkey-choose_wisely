import React from "react";
import Avatar from "react-avatar";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "./style.scss";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const { userInfo, isLoggedIn } = useSelector((state) => state.user);
  const { t } = useTranslation();
  return (
    <div className="user_info">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t("navbar.chooseWisely")} | {t("navbar.profile")}
        </title>
      </Helmet>
      <Container>
        {isLoggedIn && (
          <Row>
            <Col lg={4}>
              <Avatar size="120" round={true} name={userInfo.displayName} />
            </Col>
            <Col lg={8}>
              <div className="details_list">
                <div className="item_detail">
                  <p className="label">Name: </p>
                  <p className="value">{userInfo.displayName}</p>
                </div>
                <div className="item_detail">
                  <p className="label">Email: </p>
                  <p className="value">{userInfo.email}</p>
                </div>
                <div className="item_detail">
                  <p className="label">Tell: </p>
                  <p className="value">{t("number")}</p>
                </div>

                <div className="item_detail">
                  <p className="label">Address: </p>
                  <p className="value">{t("address")}</p>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default UserInfo;
