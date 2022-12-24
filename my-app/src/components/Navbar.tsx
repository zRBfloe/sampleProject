import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./component.css";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Login
          </Nav.Link>
          <Nav.Link to="/ingridients" as={NavLink}>
            Ingredients
          </Nav.Link>
          <Nav.Link to="/recipe" as={NavLink}>
            Recipe
          </Nav.Link>
        </Nav>
        <Button href="/">Logout</Button>
      </Container>
    </NavbarBs>
  );
}
