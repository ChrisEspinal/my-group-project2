import React, { useState } from "react";
import './StyledNavbar.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import {incCart, decCart} from "../actions/indexAction";
import {useSelector, useDispatch} from 'react-redux';

const sc = <FontAwesomeIcon icon={faShoppingCart}/>

const StyledNavbar = () => {

  const itemCart = useSelector((state)=> state.Cart)
  const dispatch = useDispatch();


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
                    <LinkContainer to="/hotItems">
                      <NavDropdown.Item>Hot Items</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/sale">
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
                <LinkContainer to="/cart">
                  <Nav.Link>
                  <span className="fa-layers fa-fw fa-2x">
                    <i>{sc}</i>
                    <span className="fa-layers-counter">{itemCart}</span>
                  </span>
                  </Nav.Link>
                </LinkContainer>
              </Nav>

              </Navbar.Collapse>

          </Navbar>
        );  
}

export default StyledNavbar;