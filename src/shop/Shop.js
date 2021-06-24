import React, { useState, useEffect } from "react";
import './Shop.css';
import { Jumbotron, Container, Carousel } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap';
import axios from 'axios';
import ItemCard from '../itemCard/ItemCard';
import dj_carousel1 from '../assets/dj_carousel1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const Shop = () => {
    

    return (
        <div className="shopContainer">

            <div className="upperArea">
                <Row>
                    <Col sm={12}>
                        <div className="custom-carousel">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={dj_carousel1}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={dj_carousel1}
                                    alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={dj_carousel1}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </div>


            <div className="midArea">
                <Row>
                    <Col sm={12}>
                        <div className="custom-jumbotron">
                            <Jumbotron fluid>
                                <Row>
                                    <Col sm={12}>
                                    <Container className="jumbotron-text">
                                        <h1 className="jumbotron-header"><b>Thinking about being a DJ?</b></h1>
                                        <p>
                                            We have the equipment to get you started! Check out Hot Deals to view our 
                                            latest items.
                                        </p>
                                    <Link to="/hotItems">
                                    <Button variant="primary">Learn more</Button>
                                    </Link>
                                </Container>
                                    </Col>
                                </Row>
                            </Jumbotron>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="bottomArea">
                <Row>
                    <Col sm={12}>
                        <div className="custom-jumbotron">
                            <h1><b>Shop Now</b></h1>
                            <div>

                            {/* <ul>
                                {item.products.map(items => (
                                    <li key={items.id}>
                                    <a href={items.quantity}>{items.description}</a>
                                    </li>
                                ))}
                            </ul> */}

                                {/* <ItemCard {itemsInDB}/> */}
                            </div>
                            {/*<CardDeck>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional
                                        content.{' '}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>  */}
                        </div>
                    </Col>
                </Row>
            </div>


            <footer className="footer bg-dark">
                    <div className="container-fluid">
                        <Row>
                            <Col className="col-footer" sm={12} md={2}>
                                {/* <img class="img-fluid footerImg" src={companyLogo}/> */}
                            </Col>
                            <Col className="copyright" sm={12} md={7}>
                                <p>Copyright © 2020-2021 Our LLC. All Rights Reserved.</p>
                            </Col>
                            <Col sm={12} md={3} className="footer-links">
                                <a href="https://facebook.com" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} size="4x" /></a>
                                <a href="https://instagram.com" target="_blank">
                                <FontAwesomeIcon icon={faInstagram} size="4x"/></a>
                                <a href="https://twitter.com" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} size="4x"/></a>
                            </Col>
                        </Row>
                    </div>
                </footer>

        </div>
    );
}

export default Shop;