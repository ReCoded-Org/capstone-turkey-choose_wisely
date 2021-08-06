import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SocialLink from "./SocialLink";
import SubscribeInput from "./SubscribeInput";
import Buttons from "./Buttons";
import { useAlert } from "react-alert";
import { db } from "./../../firebase";
import { useTranslation } from "react-i18next";

import "./Footer.scss";

const Footer = () => {
  const [subscribe, setSubscribe] = useState({ email: "" });
  const { t } = useTranslation();
  const alert = useAlert();

  useEffect(() => {
    if (subscribe.email !== "") {
      (async () => {
        await db.collection("subscribers").add(subscribe);
        alert.success(t("alertMessages.subscribedSuccessfully"));
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribe]);

  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <div className="top">
            <Row>
              <Col className="top__new_letter" lg={4}>
                <SubscribeInput handelSubscribe={setSubscribe} />
              </Col>

              <Col className="top__button" lg={4} md={{ span: 4, offset: 4 }}>
                <Buttons />
              </Col>
            </Row>
          </div>
          <div className="bottom">
            <Row>
              <Col className="text-center icons">
                <SocialLink />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="footer__bottom">
        <Container>
          <Row>
            <Col>
              <p>Copyright © Choose Wisely development team</p>
              <p>All rights reserve</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
