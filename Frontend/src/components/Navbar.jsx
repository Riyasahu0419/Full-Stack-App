import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../components/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";


function MyNavbar() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          MyApp
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link  href="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link  href="/signup" className="nav-link">
            SignUp
          </Nav.Link>
          <Nav.Link href="/login" className="nav-link">
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </>
  );
}

export default MyNavbar;
