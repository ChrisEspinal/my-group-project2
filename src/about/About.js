import React, { useState, useEffect } from "react";
import './About.css';
import axios from "axios";
import most_popular from '../assets/most_popular.jpeg';
import ItemCard from '../itemCard/ItemCard'
import { Jumbotron, Container, Carousel } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap';
import dj_carousel1 from '../assets/dj_carousel1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {incCart, decCart} from "../actions/indexAction";;


class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        itemArray: [],
        itemArray2: [],
        itemArray3: [],
    }
}

componentDidMount(){
        axios.get("http://localhost:3002/HotItems")
        .then(response => {
          console.log(response);
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
    
    // fetchData() 
    
    render (){
    return (
      <div className="aboutContainer">


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

export default About;
