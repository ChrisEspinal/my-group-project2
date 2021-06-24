import React, { Fragment, useState } from "react";
import './StyledNavbar.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import {incCart, decCart,logOut} from "../actions/indexAction";
import {useSelector, useDispatch} from 'react-redux';

const sc = <FontAwesomeIcon icon={faShoppingCart}/>

const StyledNavbar = () => {

  const itemCart = useSelector((state)=> state.Cart)
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.LoggedIn)
  let arr ={}
  let sign ={}

  {loggedIn ? arr =<React.Fragment>
              <LinkContainer to="/signIn">
                  <Nav.Link onClick={()=> dispatch(logOut())}>Sign Out</Nav.Link> 
              </LinkContainer>

                    <LinkContainer to="/cart">
                      <Nav.Link>
                      <span className="fa-layers fa-fw fa-2x">
                        <i>{sc}</i>
                        <span className="fa-layers-counter">{itemCart}</span>
                      </span>
                      </Nav.Link>
                    </LinkContainer>
                    </React.Fragment>
            : arr =<React.Fragment>
              <LinkContainer to="/signIn">
                  <Nav.Link>Sign In</Nav.Link> 
              </LinkContainer>

                <LinkContainer to="/signIn">
                  <Nav.Link>
                  <span className="fa-layers fa-fw fa-2x">
                    <i>{sc}</i>
                    <span className="fa-layers-counter">{itemCart}</span>
                  </span>
                  </Nav.Link>
                </LinkContainer></React.Fragment>}
  {loggedIn ? sign =<LinkContainer to="/cart">
                      <Nav.Link>
                      <span className="fa-layers fa-fw fa-2x">
                        <i>{sc}</i>
                        <span className="fa-layers-counter">{itemCart}</span>
                      </span>
                      </Nav.Link>
                    </LinkContainer>
            : sign =<LinkContainer to="/signIn">
                  <Nav.Link>
                  <span className="fa-layers fa-fw fa-2x">
                    <i>{sc}</i>
                    <span className="fa-layers-counter">{itemCart}</span>
                  </span>
                  </Nav.Link>
                </LinkContainer>}

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
                {/* <LinkContainer to="/signIn">
                  <Nav.Link>Sign In</Nav.Link>
                  
                </LinkContainer> */}
                {arr}
              </Nav>

              </Navbar.Collapse>

          </Navbar>
        );  
}

export default StyledNavbar;