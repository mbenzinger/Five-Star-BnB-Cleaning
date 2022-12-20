import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import { CurrentUser } from "../contexts/CurrentUser"

function LoginForm() {

    

    const navigate = useNavigate()

    // const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}authentication/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })

        const data = await response.json()

        if (response.status === 200) {
            // setCurrentUser(data.user)
            localStorage.setItem('token', data.token)
            //console.log(data.token)
            navigate(`/`)
        } else {
            setErrorMessage(data.message)
        }

        console.log(data)

    }

    return (
        <main>
            {[false, ].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Five Star BNB Cleaning</Navbar.Brand>
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
            <h1>Login</h1>
            </div>

            {errorMessage !== null
                ? (
                    <div role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            
                <div>
                    
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="email">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
           <Form.Control 
		  type="email"
          required
          value={credentials.email}
          onChange={e => setCredentials({ ...credentials, email: e.target.value })}
          id="email"
          name="email"
		 />
        </Col>
      </Form.Group>	
      
      <Form.Group as={Row} className="mb-3" controlId="password">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
           <Form.Control 
		  type="password"
          required
          value={credentials.password}
          onChange={e => setCredentials({ ...credentials, password: e.target.value })}
          id="password"
          name="password"
		 />
        </Col>
      </Form.Group>	
      </Form>    
                  
        </div>
        <div className="center">
        <Button variant="primary" type="submit">Login</Button>
        </div> 
        </main>
    )
}

export default LoginForm