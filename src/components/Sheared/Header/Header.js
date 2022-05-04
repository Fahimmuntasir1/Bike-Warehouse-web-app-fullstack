import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth  from "../../Firebase/firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth)
 const handleSignOut=()=>{
   signOut(auth)
 }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} className="fs-3 fw-bold" to="/">
            ZERO BIKER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#services">Services</Nav.Link>
              <Nav.Link as={Link} to="/checkout">
                Checkout
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                Gallery
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about" className="text-white">
                About
              </Nav.Link>

              <Nav.Link as={Link} to="login" className="text-white">
                
              </Nav.Link>

              {user ? (
                <button onClick={handleSignOut}
                  className="btn btn-link text-white text-decoration-none"> Sign
                  Out
                </button>
              ) : (
                <Nav.Link as={Link} to="login" className="text-white">
                  Login/Register
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
