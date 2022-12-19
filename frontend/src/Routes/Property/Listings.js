import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Listings() {
  return (
    <>
      {[false, ].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Five Star BNB Cleaning</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Five Star BNB Cleaning
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/signup">Sign-Up</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/AddPropertyForm">Add Property</Nav.Link>
                  <Nav.Link href="/Listings">Listings</Nav.Link>
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </>
      )
    }
    export default Listings