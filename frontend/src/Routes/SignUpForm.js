import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';

function SignUpForm() {

	const history = useNavigate()

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		userType: '',
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

		history.push(`/`)
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
				<div className="row">
					<div className="format">
						<label htmlFor="firstName">First Name</label>
						<br/>
						<input
							required
							value={user.firstName}
							onChange={e => setUser({ ...user, firstName: e.target.value })}
							id="firstName"
							name="firstName"
						/>
					</div>
					<div className="format">
						<label htmlFor="lastName">Last Name</label>
						<br/>
						<input
							required
							value={user.lastName}
							onChange={e => setUser({ ...user, lastName: e.target.value })}
							id="lastName"
							name="lastName"
						/>
					</div>
				</div>
				<div className="row">
					<div className="format2">
						<label htmlFor="email">Email</label>
						<br/>
						<input
							type="email"
							required
							value={user.email}
							onChange={e => setUser({ ...user, email: e.target.value })}
							id="email"
							name="email"
						/>
					</div>
				</div>
				<div className="format">
					<div>
						<label htmlFor="userType">User Type</label>
						<br/>
						<select
							type="userType"
							required
							value={user.userType}
							onChange={e => setUser({ ...user, userType: e.target.value })}
							id="userType"
							name="userType"
						>
							<option value=""></option>
							<option value="Property Owner">Property Owner</option>
							<option value="Sub Contractor">Sub Contractor</option>
						</select>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							required
							value={user.password}
							onChange={e => setUser({ ...user, password: e.target.value })}
							className="form-control"
							id="password"
							name="password"
						/>
					</div>
				</div>
				<div className="format">
				<input type="submit" value="Sign Up" />
				</div>
			</form>
		</main>
	)
}

export default SignUpForm