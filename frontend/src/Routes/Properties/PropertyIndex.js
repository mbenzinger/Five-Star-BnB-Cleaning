import { useState } from "react";
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import axios from "axios";
import {Routes, Route, useNavigate} from 'react-router-dom'


export default function PropertyIndex () {
  const navigate = useNavigate();
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
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/AddPropertyForm">Add Property</Nav.Link>
                    <Nav.Link href="/Listings">Listings</Nav.Link>
                  </Nav>
  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
          <main>
              <h1 className='listHead'>Click here to check out the property listings!</h1>
      
              <h1 className='addHead'>Click here to add a new property!</h1>
              <a href="http://localhost:5000/properties/new">
              <button type="button" class="btn btn-danger">Add Property</button>
              </a>
              <a href="http://localhost:5000/properties">
                <button type="button" class="btn btn-primary">Go to Listings</button>
              </a>

          </main>
      </>
    );
  }
  


