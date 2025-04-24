import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



function NavbarApp() {
  return (
    <Navbar expand="lg" bg="dark" variant='dark'>
      <Container fluid >
        <Navbar.Brand href="#">Rolling
           <span style={{color: '#F87296'}}>Music</span>
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Sobre nosotros</Nav.Link>
            <Nav.Link href="#action3">Admin</Nav.Link>
            <Nav.Link href="#action4">Planes</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex">
                      
             <FontAwesomeIcon icon={faUser} size="lg" color="#F87296" style={{ marginLeft: '10px', marginTop: '3px', marginRight:'10px'}} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;