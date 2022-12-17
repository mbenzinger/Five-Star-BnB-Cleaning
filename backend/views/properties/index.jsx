const React = require('react')
const Def = require('../default')

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function index (data) {
  
  let propertiesFormatted = data.properties.map((property, index) => {
    return (
      <div className="col-sm-6">
        <h2>
        <a href={`/properties/${index}`} >
          {property.name}
        </a>
      </h2>
        <p className="text-center">
          Located in {property.city}, {property.state}
        </p>
        <p className="text-center">
          Square Footage: {property.squarefootage}
        </p>
        <img src={property.pic} alt={property.name}/>
      </div>
    )
  })
  return (
    <>
      {[false,].map((expand) => (
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
                  <Nav.Link href="http://localhost:3000/login">Login</Nav.Link>
                  <Nav.Link href="/AddPropertyForm">Add Property</Nav.Link>
                  <Nav.Link href="/Listings">Listings</Nav.Link>

                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    <Def>
        <main>
            <h1 className='listingTitle'>Here are the current listings!</h1>
            <div className='row'>
            {propertiesFormatted}
            </div>
        </main>
    </Def>
    </>
)
}



  