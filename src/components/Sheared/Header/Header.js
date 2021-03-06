import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand as={Link} className="fs-3 fw-bold" to="/">
            ZERO BIKER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="" id="responsive-navbar-nav">
            <Nav className="me-auto my-nav ">
              <Nav.Link href="/#inventory">Inventories</Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/#contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <>
                  <Nav.Link as={Link} to="/manageinventories" className="">
                    Manage Items
                  </Nav.Link>

                  <Nav.Link as={Link} to="/addnewitems" className="">
                    Add Items
                  </Nav.Link>

                  <Nav.Link as={Link} to="/myitems" className="mx-2">
                    My Items
                  </Nav.Link>
                </>
              )}

              {user ? (
                <button
                  onClick={handleSignOut}
                  className=" my-button text-decoration-none"
                >
                  {" "}
                  Sign Out
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
