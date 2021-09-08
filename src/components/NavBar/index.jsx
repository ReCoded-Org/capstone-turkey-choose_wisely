import "./style.scss";

import React, { useState } from "react";
import AuthModal from "./../AuthModal";
import Login from "../Login";
import Register from "../Register";

import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Avatar as UiAvatar } from "@material-ui/core";
import { Button as UiButton } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { LOGOUT } from "../../utilities/types";
import { firebaseApp } from "../../firebase";
import { useAlert } from "react-alert";
import Avatar from "react-avatar";

const NavBar = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState("login");
  const changeForm = (value) => {
    setForm(value);
  };
  const { t } = useTranslation();
  const { isLoggedIn, userInfo } = useSelector((state) => state.user);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const alert = useAlert();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelLogout = async () => {
    try {
      await firebaseApp.auth().signOut();
      setTimeout(() => {
        alert.success(`${t("auth.loggedOutSuccess")}`);
      }, 800);
    } catch (error) {
      alert.error(`${t("auth.loggedError")}`);
      console.log("error :", error);
    }
  };
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg" className="nav__bar">
        <Container>
          <Navbar.Brand to="/" className="nav__brand">
            Choose Wisely
          </Navbar.Brand>
          <div className="links_wrapper">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto nav__items me-auto">
                <Nav.Link
                  className={location.pathname === "/" && "active"}
                  as={Link}
                  to="/"
                >
                  <span> {t("navbar.home")}</span>
                  <span className="dot"></span>
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
                  className={location.pathname === "/resources" && "active"}
                  as={Link}
                  to="/resources"
                >
                  <span> {t("navbar.resources")}</span>
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
                {!isLoggedIn ? (
                  <Button onClick={(e) => setOpen(!open)} className="nav__btn">
                    {t("signUp.sign-up")}
                  </Button>
                ) : (
                  <>
                    <UiButton
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                      className="avatar_nav_auth"
                    >
                      {userInfo.photoURL !== null ? (
                        <UiAvatar
                          alt={userInfo.displayName}
                          src={userInfo.photoURL}
                        />
                      ) : (
                        <Avatar
                          name={userInfo.displayName}
                          size="45"
                          round={true}
                        />
                      )}
                    </UiButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem
                        onClick={(e) => {
                          dispatch({ type: LOGOUT });
                          handelLogout();
                          handleClose();
                        }}
                      >
                        {t("auth.logout")}
                      </MenuItem>
                      <li
                        className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                        tabIndex="-1"
                        role="menuitem"
                        aria-disabled="false"
                        onClick={(e) => {
                          handleClose();
                        }}
                      >
                        <Link className="drop_down_status_link" to="/status">
                          {t("auth.status")}
                        </Link>

                        <span className="MuiTouchRipple-root"></span>
                      </li>
                      <li
                        className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                        tabIndex="-1"
                        role="menuitem"
                        aria-disabled="false"
                        onClick={(e) => {
                          handleClose();
                        }}
                      >
                        <Link className="drop_down_status_link" to="/Profile">
                          {t("navbar.profile")}
                        </Link>

                        <span className="MuiTouchRipple-root"></span>
                      </li>
                      {/* <MenuItem
                        onClick={(e) => {

                          handelLogout();
                          handleClose();
                        }}
                      >
                      </MenuItem> */}
                    </Menu>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>

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
    </div>
  );
};

export default NavBar;
