import React, { useState } from "react";
import "./style.scss";

const UniversitiesSearch = ({ search }) => {
  const [term, setTerm] = useState("");

  return (
    <div className="hero_search">
      <input
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        onBlur={(e) => search(term)}
        type="search"
        placeholder="Search... "
      />
      <button onClick={(e) => search(term)}> GO </button>
    </div>
  );
};

export default UniversitiesSearch;
