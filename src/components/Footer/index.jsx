import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SocialLink from "../FooterSocialLinks";
import SubscribeInput from "../FooterSubscribeInput";
import Buttons from "../FooterButtons";
import { useAlert } from "react-alert";
import { db } from "./../../firebase";
import { useTranslation } from "react-i18next";
import "./style.scss";

const Footer = () => {
  const [subscribe, setSubscribe] = useState({ email: "" });
  const { t } = useTranslation();
  const alert = useAlert();

  useEffect(() => {
    (async () => {
      if (subscribe.email !== "") {
        try {
          await db.collection("subscribers").add(subscribe);
          alert.success(t("alertMessages.subscribedSuccessfully"));
        } catch (error) {
          alert.error(`${error.message}`);
        }
      }
    })();
    // eslint-disable-next-line
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

              <Col className="top__button" lg={{ span: 4, offset: 4 }}>
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
              <p>{t("footer.copyRights")}</p>
              <p>{t("footer.allRightsReserver")}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
