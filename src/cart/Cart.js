import React, { useState, useEffect } from "react";
import './Cart.css';
import {connect} from 'react-redux';
import {incCart, decCart,add_item} from "../actions/indexAction";
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";
import summer_sale from '../assets/summer_sale.jpeg';
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
// import {incCart, decCart} from "../actions/indexAction";
import { render } from "react-dom";
;

const mapStateToProps = (state) => {
    return {Items: state.Items}
  }

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sold: "",
        }
    }
    
componentDidMount(){
    // console.log(this.state.sold);
    let values = this.props.Items;
    // console.log(values);

    let arr =[];
    if(this.state.sold === ""){

        console.log(values);
        // (async () => {
        //     const rawResponse = await fetch('/cart', {
        //         method: 'POST',
        //         headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(values)
        //     });
        //     const content = await rawResponse.json();
        //     console.log(content);
        //     console.log("This is the content");

        //     console.log();
        //     // for(let j=0; j<values.length;j++){
        //     //     for(let i =0; i< content.length;i++){
        //     //         if(content[i].id == values[j].item && !arr.includes(content[i])){
        //     //             arr.push(content[i])            
        //     //         }
        //     //     }
        //     // }

        //     })();
        //     this.setState({
        //         sold: arr,
        //     })
    }


}

    render(){
        return (
            <div className="cart-container">


                <div>   

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
