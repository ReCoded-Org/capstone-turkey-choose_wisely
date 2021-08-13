import { Dropdown } from "react-bootstrap";
import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./style.scss";
import { LANGUAGES } from "./../../utilities/variables";
import { lang } from "../../utilities/helpers";

const Buttons = () => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   console.log("Setting page stuff");
  //   document.title = t("app_title");
  // }, [currentLanguage, t]);

  return (
    <div className="buttons">
      <button className="btn login-button">{t("footer.login")}</button>
      <Dropdown className="d-inline mx-2 button__dropdown">
        <Dropdown.Toggle className="btn outline" id="dropdown-autoclose-true">
          {lang().name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {LANGUAGES.map(({ code, name }) => (
            <Dropdown.Item
              key={code}
              disabled={lang().code === code}
              onClick={() => {
                i18next.changeLanguage(code);
              }}
              href="#"
            >
              {name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Buttons;
