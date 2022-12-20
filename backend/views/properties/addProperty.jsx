import { useState } from "react";
import React from "react";
const Def = require('../default')
//import { useNavigate } from "react-router-dom";

export default function addProperty() {
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
                <Nav.Link href="http://localhost:5000/properties/new">Add Property</Nav.Link>
                <Nav.Link href="http://localhost:5000/properties">Listings</Nav.Link>
                
              </Nav>
             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
        <Def>
		<main>
        <h1>Add a New Property</h1>
			<form method="POST" action="/properties">
              <div className="form-group">
                <label htmlFor="name">Property Name</label>
                <input className="form-control" id="name" name="name" required/>
              </div>
              <div className="form-group">
               <label htmlFor="cuisines">Square Footage</label>
                <input className="form-control" id="footage" name="footage" requried />
              </div>
              <div className="form-group">
                <label htmlFor="pic">Property Picture</label>
                <input className="form-control" id="pic" name="pic" />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input className="form-control" id="city" name="city" required />
              </div>
              <div className="form-group">
               <label htmlFor="state">State</label>
               <input className="form-control" id="state" name="state" required />
             </div>
             
				<input className="btn btn-primary" type="submit" value="Add Property" />
			</form>
		</main>
        </Def>
        </>
	)
}