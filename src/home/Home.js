import React from 'react';
import './Home.css';
import { Jumbotron, Container, Carousel } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap';
import axios from 'axios';
import ItemCard from '../itemCard/ItemCard';
import dj_home from '../assets/dj_home.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {

        return (
            <div className="shopContainer">


            <div className="upperArea">
                <img className="homeImg" src={dj_home}/> 
            </div>


            <div className="midArea">
                <Jumbotron fluid>
                    <Container>
                        <h1><b>SOUND PROOF</b></h1>
                        <h4>Check Us Out</h4>
                        <Link to="/shop">
                        <Button variant="primary">Shop Now</Button>
                        </Link>
                    </Container>
                </Jumbotron>
            </div>

            <div className="bottomArea">
           
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
            

export default Home;