import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container, Nav, Form } from "react-bootstrap";

const NavbarApp = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Rolling<span style={{ color: "#F87296" }}>Music</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              Sobre nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              Admin
            </Nav.Link>
            <Nav.Link as={Link} to="/planes">
              Planes
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              color="#F87296"
              style={{
                marginLeft: "10px",
                marginTop: "3px",
                marginRight: "10px",
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarApp;
