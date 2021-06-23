import React from 'react';
import './StyledNavbar.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class StyledNavbar extends React.Component{

    render(){
        return(
          <Navbar className="navbar" collapseOnSelect bg="dark" variant="dark" expand="lg">

              {/* <LinkContainer to="/">
                <Navbar.Brand><img src={} className="d-inline-block align-top logo"/></Navbar.Brand>
              </LinkContainer> */}

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="mr-auto">

                <LinkContainer to="/home">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/shop">
                  <Nav.Link>Shop</Nav.Link>
                </LinkContainer>

                  <NavDropdown title="See More" id="collasible-nav-dropdown">
                    <LinkContainer to="/">
                      <NavDropdown.Item>Hot Items</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/">
                      <NavDropdown.Item>Sale</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>

              </Nav>

              <Nav>
                <LinkContainer to="/register">
                  <Nav.Link>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signIn">
                  <Nav.Link>Sign In</Nav.Link>
                  {/* sign  out switch redux state */}
                </LinkContainer>
              </Nav>

              </Navbar.Collapse>

          </Navbar>
        );  
    }
}

export default StyledNavbar;