import React from "react";
import FilterSection from "../../components/FilterSection";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

import "./style.scss";
import University from "../../components/University";
import { lang } from "../../utilities/helpers";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Universities = () => {
  const { universities, loading, notFound } = useSelector(
    (state) => state.universities
  );

  const { isLoggedIn } = useSelector((state) => state.user);

  const { code } = lang();
  const { t } = useTranslation();

  return (
    <div className="universities">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t("navbar.chooseWisely")} | {t("navbar.universities")}
        </title>
      </Helmet>
      <FilterSection isLoggedIn={isLoggedIn} />
      <Container>
        <div className="universities_list">
          {loading && "Loading"}
          {notFound && "No Results"}

          {Array.isArray(universities) &&
            universities.length > 0 &&
            universities.map((university) => {
              // return <p key={university.id}>{university.data.enName}</p>
              const { data } = university;
              return (
                <University
                  key={university.id}
                  uniId={university.id}
                  name={code === "en" ? data.enName : data.trName}
                  logo={data.image}
                  location={data.location}
                  url={data.url}
                  type={code === "en" ? data.enType : data.trType}
                  isApplied={data.status}
                  isLoggedIn={isLoggedIn}
                />
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default Universities;
