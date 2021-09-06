import React, { useEffect } from "react";
import Portal from "./../Portal";
import "./style.scss";

const AuthModal = ({ children, open }) => {
  useEffect(() => {
    const body = document.querySelector("#root");
    if (open) {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
    return () => (body.style.display = "block");
  }, [open]);
  return (
    <div
      className={`auth_model ${
        open ? "auth_modal--open" : "auth_modal--close"
      }`}
    >
      {children}
    </div>
  );
};

export default Portal(AuthModal);
