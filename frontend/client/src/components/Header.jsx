import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../features/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { contact } = useSelector((state) => state.contact);

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <header>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SMB</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact-details">
                <Nav.Link>Contact-Details</Nav.Link>
              </LinkContainer>

              {contact ? (
                <NavDropdown
                  title={contact.first_name ? contact.first_name : "Welcome"}
                  id="username"
                >
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    <FaSignOutAlt /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/">
                  <Nav.Link>
                    <FaSignInAlt /> Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
