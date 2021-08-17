import React from "react";
import "./style.scss";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light" className="nav__bar">
        <Container>
          <Navbar.Brand href="/" className="nav__brand">
            Choose Wisly
          </Navbar.Brand>
          <div>
            <Nav className="ml-auto  nav__items  ">
              <Nav.Link href="/">
                <span>Home </span>
                <span className="dot"></span>{" "}
              </Nav.Link>
              <Nav.Link href="About">
                <span>About </span>
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link href="Contact">
                <span>Contact </span>
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link href="Ressources">
                <span>Ressources </span>
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link href="Universities">
                <span>Universities </span>
                <span className="dot"></span>
              </Nav.Link>
              <Nav.Link href="Blog">
                <span> Blog</span>
                <span className="dot"></span>
              </Nav.Link>
              <Button className="nav__btn">Sign up</Button>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
