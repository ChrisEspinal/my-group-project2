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
import {incCart, decCart} from "../actions/indexAction";



class Shop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            itemArray: [],
            itemArray2: [],
            itemArray3: [],
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3002/shop")
        .then(response => {
          console.log(response.data.need);
          this.setState({
              itemArray: response.data.need,
              itemArray2: response.data.need2,
              itemArray3: response.data.need3
            })
        })
        .catch(error => {
          console.log(error);
        }); 
    }



render(){
    return(
      
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
                <h1 className="shop-header"><b>Shop All</b></h1>

                <br/>
                <br/>
                <br/>
                <br/>

                <Row className="dj-row">
                <div className="dj-container">
                    <h1>DJ Equipment</h1>
                    <br/>
                    <ItemCard itemArray={this.state.itemArray}/>
                </div> 
                </Row>
                <br/>
                <br/>
                <Row className="container-fluid">
                <div className="lighting-container">
                    <h1>Lighting</h1>
                    <br/>
                    <ItemCard itemArray={this.state.itemArray2}/>
                </div> 
                </Row>
                <br/>
                <br/>
                <Row className="container-fluid">
                <div className="sound-container">
                    <h1>Sound</h1>
                    <br/>
                    <ItemCard itemArray={this.state.itemArray3}/>
                </div> 
                </Row>
                <br/>
                <br/>       
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

}

export default Shop;