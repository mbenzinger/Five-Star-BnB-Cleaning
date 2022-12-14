import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginPicture from '../assets/images/login.jpg'
import EnterPicture from '../assets/images/enter info.jpg'
import QuotePicture from '../assets/images/get quote.jpg'
import CleanPicture from '../assets/images/clean.jpg'
function Homepage() {
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
{/* //meat of assignment  */}
<div classname='background'>
<Container>
      <Row>
        <Col>
        <h2>About Us</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and
           typesetting industry. Lorem Ipsum has been the industry's 
           standard dummy text ever since the 1500s, when an unknown 
           printer took a galley of type and scrambled it to make a type 
           specimen book. It has survived not only five centuries, but also 
           the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col>
        <h2>Video</h2>
        <iframe width="360" height="215" src="https://www.youtube.com/embed/OwRTIVKKERE" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
        picture-in-picture" allowfullscreen></iframe>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
        <br/>
        <h2>How We Work</h2>
        </Col>
        <Col></Col>
      </Row>
      <br/>
      <Row>      
        <Col>
        <h2>Login-in</h2>
        <img src={LoginPicture}/>
        </Col>
        <Col>
        <h2>Enter Your Address</h2>
        <img src={EnterPicture}></img>
        </Col>
        <Col>
        <h2>Get A Quote</h2>
        <img src={QuotePicture}></img>
        </Col>
        <Col>
        <h2>Let us handle the rest</h2>
        <img src={CleanPicture}></img>
        </Col>
      
      </Row>
    </Container>
    </div>
    </>
    
  );
}
export default Homepage