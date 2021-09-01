import React from "react";
import FilterSection from "../../components/FilterSection";

import "./style.scss";
const Universities = () => {
  // const { universities, loading, notFound } = useSelector((state) => state.universities);

  return (
    <div className="universities">
      <FilterSection />
      {/* {loading && "Loading" }
      {notFound && "No Results" }  
      {universities.length > 0 && universities.map(university => {
        return <p key={university.id}>{university.data.enName}</p>
      })
      } */}
    </div>
  );
};

export default Universities;
