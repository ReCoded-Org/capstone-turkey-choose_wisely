import React from "react";
import FilterSection from "../../components/FilterSection";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

import "./style.scss";
import University from "../../components/University";
import { lang } from "../../utilities/helpers";

const Universities = () => {
  const { universities, loading, notFound } = useSelector(
    (state) => state.universities
  );

  const { isLoggedIn } = useSelector((state) => state.user);

  const { code } = lang();

  return (
    <div className="universities">
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
              const sts = data.status === true ? "applied" : "notApplied";
              return (
                <University
                  key={university.id}
                  name={code === "en" ? data.enName : data.trName}
                  logo={data.image}
                  location={data.location}
                  url={data.url}
                  type={code === "en" ? data.enType : data.trType}
                  isApplied={sts}
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
