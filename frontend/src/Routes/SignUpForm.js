import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function SignUpForm() {

	const navigate = useNavigate()

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		role: '',
		password: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`${process.env.REACT_APP_SERVER_URL}users/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})

		navigate(`/`)
	}

	return (
		<main>

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
                  
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


			<div className="center">

			<h1>Sign Up</h1>
			</div>
			<form onSubmit={handleSubmit}>
				<Form>
				

				<Form.Group as={Row} className="mb-3" controlId="firstName">
        <Form.Label column sm="2">
          First Name
        </Form.Label>
        <Col sm="10">
           <Form.Control 
		  required
		  placeholder="Enter First Name"
		  value={user.firstName}
		  onChange={e => setUser({ ...user, firstName: e.target.value })}
		  id="firstName"
		  name="firstName"

		 />
        </Col>
      </Form.Group>				
					
	  <Form.Group as={Row} className="mb-3" controlId="lastName">
        <Form.Label column sm="2">
          Last Name
        </Form.Label>
        <Col sm="10">
           <Form.Control 
		  required
		  placeholder="Enter Last Name"
		  value={user.lastName}
		  onChange={e => setUser({ ...user, lastName: e.target.value })}
		  id="lastName"
		  name="lastName"
		 />
        </Col>
      </Form.Group>		

	  <Form.Group as={Row} className="mb-3" controlId="email">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
           <Form.Control 
		  type="email"
		  required
		  placeholder="example@email.com"
		  value={user.email}
		  onChange={e => setUser({ ...user, email: e.target.value })}
		  id="email"
		  name="email"
		 />
        </Col>
      </Form.Group>			
					
				
						
					
				
				<div className="format">
					<div>
						<label htmlFor="userType">User Type</label>
						<select
							type="role"
							required
							value={user.role}
							onChange={e => setUser({ ...user, role: e.target.value })}
							id="role"
							name="role"
						>
							<option value=""></option>
							<option value="Property Owner">Property Owner</option>
							<option value="Sub Contractor">Sub Contractor</option>
						</select>
					</div>

					<Form.Group as={Row} className="mb-3" controlId="password">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
           <Form.Control 
		  type="password"
		  required
		  placeholder="Enter Password"
		  value={user.password}
		  onChange={e => setUser({ ...user, password: e.target.value })}
		  className="form-control"
		  id="password"
		  name="password"
		 />
        </Col>
      </Form.Group>
						
					
				</div>
				</Form>
				<div className="format">
				<input type="submit" value="Sign Up" />
				</div>
			</form>
		</main>
	)
}

export default SignUpForm