import "./style.scss";

import React from "react";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  let location = useLocation();
  const { t } = useTranslation();
  return (
    <div>
      <Navbar bg="light" variant="light" className="nav__bar">
        <Container>
          <Navbar.Brand to="/" className="nav__brand">
            Choose Wisly
          </Navbar.Brand>
          <div>
            <Nav className="ml-auto nav__items">
              <Nav.Link
                className={location.pathname === "/" && "active"}
                as={Link}
                to="/"
              >
                <span> {t("navbar.home")}</span>
                <span className="dot"></span>{" "}
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/About" && "active"}
                as={Link}
                to="/About"
              >
                <span>{t("navbar.about")}</span>
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/Contact" && "active"}
                as={Link}
                to="/Contact"
              >
                <span> {t("navbar.contact")}</span>
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/Ressources" && "active"}
                as={Link}
                to="/Ressources"
              >
                <span> {t("navbar.ressources")}</span>
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/Universities" && "active"}
                as={Link}
                to="/Universities"
              >
                <span> {t("navbar.universities")}</span>
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link
                className={location.pathname === "/Blog" && "active"}
                as={Link}
                to="/Blog"
              >
                <span> {t("navbar.blog")}</span>
                <span className="dot"></span>
              </Nav.Link>
              <Button className="nav__btn">Sign up</Button>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
