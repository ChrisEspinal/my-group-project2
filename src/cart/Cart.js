import React, { useState, useEffect } from "react";
import './Cart.css';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap';
import dj_carousel1 from '../assets/dj_carousel1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


import dj_default from '../assets/dj_default.jpeg';
import dj_modal_default from '../assets/dj_modal_default.jpeg';
// import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { CardDeck} from 'react-bootstrap';
import { Modal} from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

import {incCart, decCart,add_item} from "../actions/indexAction";
import { render } from "react-dom";

import {useDispatch} from 'react-redux';

const plusBtn = <FontAwesomeIcon icon={faPlus}/>
const minusBtn = <FontAwesomeIcon icon={faMinus}/>

;

const mapStateToProps = (state) => {
    return {Items: state.Items}
  }

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sold: "",
            itemArray: [],
            show: true,
        }

        
    }
    
componentDidMount(){
    let values = this.props.Items.arr;

    let arr =[];
    if(this.state.sold === ""){
        arr = values;
        console.log(arr);

        this.setState({
            itemArray: arr
        })

            
    }

}



    render(){

        const product = this.state.itemArray.map((itemArray) => {
            return (
                <li key={itemArray.item.id}>  
                    <Card>
                        <Card.Img variant="top" src={itemArray.item.imgURL} />
                        <Card.Body>
                            <Card.Title>{itemArray.item.name}</Card.Title>
                            <Card.Text>
                                {itemArray.item.description}
                                <br/>
                                <p>${itemArray.item.price}</p> 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col sm={12} lg={4}>
                            <div>
                                
                            </div>
                            </Col>
                            
                            <Col></Col>
                        <Col></Col>
                        <Col sm={12} lg={2}>
                        <div>
                        {/* <Link to="/cart"> */}
                        {/* <i className="btns" onClick={()=>(dispatch(add_item(itemArray)),dispatch(decCart()))}>{minusBtn}</i> */}
                        <i className="btns">{minusBtn}</i>
                        {/* </Link> */}
                        </div>
                        </Col>
                        <Col sm={12} lg={2}>
                        <div>
                        {/* <Link to="/cart"> */}
                        {/* <i className="btns" onClick={()=>(dispatch(add_item(itemArray)),dispatch(incCart()))}>{plusBtn}</i> */}
                        <i className="btns">{plusBtn}</i>
                        {/* </Link> */}
                        </div>
                        </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                
                <br/>
                </li>
                )});
                
        
        return (
        <div>

        <div>   
        <ul><CardDeck style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)'}}>{product}</CardDeck></ul>
        <br/>
        <br/>
        <br/>

        <Link to="/checkout">
        <Button>Checkout</Button>
        </Link>

        </div> 

        <br/>
        <br/>
        <br/>

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

// export default Cart;

export default connect(
    mapStateToProps,
  )(Cart);

// import React, { useState, useEffect } from "react";
// import './Sale.css';
// import axios from "axios";
// import summer_sale from '../assets/summer_sale.jpeg';
// import ItemCard from '../itemCard/ItemCard'
// import { Jumbotron, Container, Carousel } from 'react-bootstrap';
// import { Row, Col } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { CardDeck, Card } from 'react-bootstrap';
// import dj_carousel1 from '../assets/dj_carousel1.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import {incCart, decCart} from "../actions/indexAction";;


// class Sale extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//         itemArray: [],
//         itemArray2: [],
//         itemArray3: [],
//     }
// }

// componentDidMount(){
//         axios.get("http://localhost:3002/Sale")
//         .then(response => {
//           console.log(response);
//           this.setState({
//               itemArray: response.data.need,
//               itemArray2: response.data.need2,
//               itemArray3: response.data.need3
//             })
//         })
//         .catch(error => {
//           console.log(error);
//         }); 
//   }
    
//     // fetchData() 
    
//     render (){
//     return (
//       <div className="saleContainer">

//         <div className= "summerImgContainer">
//         <img className= "img1" src= {summer_sale}/>
//         </div>

//         <div className="bottomArea">
//                  <h1 className="shop-header"><b>Shop Sale</b></h1>

//                  <br/>
//                  <br/>
//                  <br/>
//                  <br/>

//                  <Row className="dj-row">
//                  <div className="dj-container">
//                      <h1>DJ Equipment</h1>
//                      <br/>
//                      <ItemCard itemArray={this.state.itemArray}/>
//                  </div> 
//                  </Row>
//                  <br/>
//                  <br/>
//                  <Row className="container-fluid">
//                  <div className="lighting-container">
//                      <h1>Lighting</h1>
//                     <br/>
//                      <ItemCard itemArray={this.state.itemArray2}/>
//                  </div> 
//                  </Row>
//                  <br/>
//                  <br/>
//                  <Row className="container-fluid">
//                  <div className="sound-container">
//                      <h1>Sound</h1>
//                      <br/>
//                      <ItemCard itemArray={this.state.itemArray3}/>
//                  </div> 
//                  </Row>
//                  <br/>
//                  <br/>       
//              </div>


//              <footer className="footer bg-dark">
//                      <div className="container-fluid">
//                          <Row>
//                              <Col className="col-footer" sm={12} md={2}>
//                                  {/* <img class="img-fluid footerImg" src={companyLogo}/> */}
//                              </Col>
//                              <Col className="copyright" sm={12} md={7}>
//                                  <p>Copyright © 2020-2021 Our LLC. All Rights Reserved.</p>
//                              </Col>
//                              <Col sm={12} md={3} className="footer-links">
//                                  <a href="https://facebook.com" target="_blank">
//                                  <FontAwesomeIcon icon={faFacebook} size="4x" /></a>
//                                  <a href="https://instagram.com" target="_blank">
//                                 <FontAwesomeIcon icon={faInstagram} size="4x"/></a>
//                                  <a href="https://twitter.com" target="_blank">
//                                  <FontAwesomeIcon icon={faTwitter} size="4x"/></a>
//                              </Col>
//                          </Row>
//                      </div>
//                  </footer>




      

//       </div>




//     );
//   }

// }

// export default Sale;
