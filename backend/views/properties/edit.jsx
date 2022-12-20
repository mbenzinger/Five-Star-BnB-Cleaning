const React = require('react')
const Def = require('../default.jsx')


function edit_form (data) {
  
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
            <h1>Edit Place</h1>
            <form method="POST" action={`/properties/${data.property.id}?_method=PUT`}>
              <div className="form-group">
                <label htmlFor="name">Property Name</label>
                <input 
                className="form-control" 
                id="name" 
                name="name"
                value={data.property.name} 
                required/>
              </div>
              <div className="form-group">
               <label htmlFor="cuisines">Square Footage</label>
                <input 
                className="form-control" 
                id="footage" 
                name="footage"
                value={data.property.squarefootage} 
                requried />
              </div>
              <div className="form-group">
                <label htmlFor="pic">Property Picture</label>
                <input 
                className="form-control" 
                id="pic" 
                name="pic"
                value={data.property.pic} />
                
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input 
                className="form-control" 
                id="city" 
                name="city"
                value={data.property.city} 
                required />
              </div>
              <div className="form-group">
               <label htmlFor="state">State</label>
               <input 
               className="form-control" 
               id="state" 
               name="state"
               value={data.property.state} 
               required />
             </div>
             
				<input className="btn btn-primary" type="submit" value="Edit Property" />
			</form>
          </main>
        </Def>
        </>
    )
}

module.exports = edit_form
