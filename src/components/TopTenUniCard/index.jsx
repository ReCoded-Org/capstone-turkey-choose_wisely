import React from "react";
import LogosSlider from "../LogosSlider/index";
import { Container } from "react-bootstrap";
import "./style.scss";
import SectionTitle from "../../components/SectionTitle";
import { useTranslation } from "react-i18next";

function TopTenUniCard() {
  const { t } = useTranslation();

  return (
    <div className="top_ten_uni_card">
      <Container>
        <SectionTitle
          title={t("home.topTen.title")}
          subText={t("home.topTen.subText")}
        />
        <LogosSlider />
      </Container>
    </div>
  );
}
export default TopTenUniCard;
