import React from "react";
import './Sale.css';
import axios from "axios";
import summer_sale from '../assets/summer_sale.jpeg';
import ItemCard from '../itemCard/ItemCard'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

class Sale extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        itemArray: [],
        itemArray2: [],
        itemArray3: [],
    }
}

componentDidMount(){
        axios.get("http://localhost:3002/Sale")
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
    
    render (){
      return (
        <div className="saleContainer">

          <div className= "summerImgContainer">
          <img className= "img1" src= {summer_sale}/>
          </div>

          <div className="bottomArea">
                  <h1 className="shop-header"><b>Shop Sale</b></h1>

                  <br/>
                  <br/>
                  <br/>
                  <br/>

                  <Row className="dj-row">
                  <div className="dj-container">
                      <h1>DJ Equipment</h1>
                      <br/>
                      <ItemCard itemArray={this.state.itemArray}/>
                      {console.log(this.state.itemArray)}
                  </div> 
                  </Row>
                  <br/>
                  <br/>
                  <Row className="lighting-row">
                  <div className="lighting-container">
                      <h1>Lighting</h1>
                      <br/>
                      <ItemCard itemArray={this.state.itemArray2}/>
                  </div> 
                  </Row>
                  <br/>
                  <br/>
                  <Row className="sound-row">
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

export default Sale;