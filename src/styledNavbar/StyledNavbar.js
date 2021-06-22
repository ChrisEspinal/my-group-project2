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

                {/* <LinkContainer to="/about">
                  <Nav.Link>Other Page</Nav.Link>
                </LinkContainer> */}

                  {/* <NavDropdown title="See More" id="collasible-nav-dropdown">
                    <LinkContainer to="/">
                      <NavDropdown.Item>Item1</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/">
                      <NavDropdown.Item>Item2</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown> */}

              </Nav>

              <Nav>
                <LinkContainer to="/signIn">
                  <Nav.Link>SignIn</Nav.Link>
                </LinkContainer>
              </Nav>

              </Navbar.Collapse>

          </Navbar>
        );  
    }
}

export default StyledNavbar;