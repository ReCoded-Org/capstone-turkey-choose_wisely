import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardsResourcesInfos from "./../CardsResourcesInfos";
import { useTranslation } from "react-i18next";
import "./style.scss";
import SearchBox from "../SearchBox";
import SectionTitle from "../SectionTitle";
import { resources } from "../../data.json";
const ResourcesInfos = () => {
  const [scholarshipsState, setScholarshipsState] = useState({});
  const [regulationsState, setRegulations] = useState({});
  const [supportState, setSupportState] = useState({});
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const { scholarships, regulations, support } = resources;
    const [scholarshipsWithLang] = scholarships.filter(
      (sholar) => sholar.lang === `${i18n.language}`
    );
    setScholarshipsState(scholarshipsWithLang);
    const [regulationsWithLang] = regulations.filter(
      (regulation) => regulation.lang === `${i18n.language}`
    );
    setRegulations(regulationsWithLang);
    const [supportWithLang] = support.filter(
      (supp) => supp.lang === `${i18n.language}`
    );
    setSupportState(supportWithLang);
    // eslint-disable-next-line
  }, [i18n?.language]);

  const searchFromResources = (resourceObject, term, cardType) => {
    const filteredInfor = resourceObject.infor.map((info) => {
      if (cardType !== "support") {
        return info.text.filter((line) => {
          if (line.toLowerCase().includes(term.toLowerCase())) {
            return line;
          }
          return "";
        });
      } else if (cardType === "support") {
        return info.text.filter((line) => {
          if (line.heading.toLowerCase().includes(term.toLowerCase())) {
            return line;
          }
          return "";
        });
      }
      return [];
    });

    const filteredResources = filteredInfor.map((element) => {
      return { text: element };
    });
    return filteredResources;
  };

  const searchResources = async (term) => {
    const { scholarships, regulations, support } = resources;
    const [scholarshipsWithLang] = scholarships.filter(
      (sholar) => sholar.lang === `${i18n.language}`
    );
    const [regulationsWithLang] = regulations.filter(
      (regulation) => regulation.lang === `${i18n.language}`
    );
    const [supportWithLang] = support.filter(
      (supp) => supp.lang === `${i18n.language}`
    );

    if (term !== "") {
      const scholarshipsResultOfSearch = searchFromResources(
        scholarshipsWithLang,
        term,
        "sholarships"
      );
      setScholarshipsState({
        ...scholarshipsState,
        infor: scholarshipsResultOfSearch,
      });
      const regulationsResultOfSearch = searchFromResources(
        regulationsWithLang,
        term,
        "regulations"
      );
      setRegulations({ ...regulationsState, infor: regulationsResultOfSearch });
      const supportResultOfSearch = searchFromResources(
        supportWithLang,
        term,
        "support"
      );
      setSupportState({ ...regulationsState, infor: supportResultOfSearch });
    } else {
      setScholarshipsState(scholarshipsWithLang);
      setRegulations(regulationsWithLang);
      setSupportState(supportWithLang);
    }
  };

  return (
    <div className="resources_infos">
      <Container>
        <SectionTitle
          className="section_title"
          bigTitle={t("resourcesPage.ResourcesInfos.bigTitle")}
        />
        <Row className="justify-content-md-center">
          <Col lg={5} md={7} sm={12}>
            <div className="search_bar">
              <SearchBox search={searchResources} />
            </div>
          </Col>
        </Row>
        <Row>
          <CardsResourcesInfos
            scholarshipsState={scholarshipsState}
            regulationsState={regulationsState}
            supportState={supportState}
          />
        </Row>
      </Container>
    </div>
  );
};

export default ResourcesInfos;
