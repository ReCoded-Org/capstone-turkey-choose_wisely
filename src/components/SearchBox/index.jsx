import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";

const SearchBox = ({ search }) => {
  const [term, setTerm] = useState("");
  const { t } = useTranslation();

  return (
    <div className="hero_search">
      <input
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        onBlur={(e) => search(term)}
        type="search"
        placeholder={t("")}
      />
      <button onClick={(e) => search(term)}> {t("Search")}</button>
    </div>
  );
};

export default SearchBox;
