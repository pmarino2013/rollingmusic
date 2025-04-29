import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import "../css/NavbarStyle.css";
import ModalLogin from "./ModalLogin";

const NavbarApp = () => {
const user = JSON.parse(localStorage.getItem("user") || "");

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  return (
    <>
    <Navbar id="navbar-cont" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <div id="logo"></div>
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
            {user.rol === "admin" ? (
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
            )
            : null}
            <Nav.Link as={Link} to="/planes">
              Planes
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <div id="login-icon" className="d-flex align-items-center btn" onClick={handleShow}>
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              color="#161616"
            /><span>Iniciar sesión</span>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {show && (
      <ModalLogin show={show} handleClose={handleClose} handleShow={handleShow}/>
    )}
    </>
  );
};

export default NavbarApp;