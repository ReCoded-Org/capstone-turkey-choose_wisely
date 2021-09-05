import { Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "./style.scss";
import { LANGUAGES } from "./../../utilities/variables";
import { lang } from "../../utilities/helpers";
import Login from "../Login";
import Register from "../Register";
import AuthModal from "../AuthModal";

const Buttons = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState("login");
  const changeForm = (value) => {
    setForm(value);
  };
  return (
    <>
      <div className="buttons">
        <button className="btn login-button" onClick={(e) => setOpen(!open)}>
          {t("footer.login")}
        </button>
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
      <AuthModal open={open} displayForm="login">
        {form === "login" ? (
          <Login
            showRegister={changeForm}
            onClose={(e) => setOpen(false)}
            setForm={changeForm}
          />
        ) : (
          <Register onClose={(e) => setOpen(false)} showRegister={changeForm} />
        )}
      </AuthModal>
    </>
  );
};

export default Buttons;
