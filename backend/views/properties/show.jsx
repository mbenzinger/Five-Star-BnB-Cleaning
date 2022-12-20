const React = require('react')
const Def = require('../default')
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function show (data) {
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
          <div className="col-sm-6">
            <div class="card" style={{width: 500}}>
              <img src={data.property.pic} class="card-img-top" alt={data.property.name}/>
                <div class="card-body">
                <h5 class="card-title">
                {data.property.name}
                </h5>
                <p class="card-text">Located in {data.property.city}, {data.property.state}.
                Square footage:{data.property.squarefootage}</p>
                <a href={`/properties/${data.id}/edit`} className="btn btn-warning"> 
                Edit
                </a>     
                  <form method="POST" action={`/properties/${data.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                  Delete
                  </button>
                </form>  
                </div>
            </div> 
        </div>
            
                 

          </main>
        </Def>
        </>
    )
}

module.exports = show

