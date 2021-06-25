import React, { useState, useEffect } from "react";
import './Cart.css';
import {connect} from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CardDeck, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
// import { faMinus } from '@fortawesome/free-solid-svg-icons'

// const plusBtn = <FontAwesomeIcon icon={faPlus}/>
// const minusBtn = <FontAwesomeIcon icon={faMinus}/>

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
            console.log(arr[0])

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
                                </Col>

                                <Col></Col>
                                <Col></Col>

                                <Col sm={12} lg={2}>
                                </Col>

                                <Col sm={12} lg={2}>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                
                <br/>
                </li>
                )});
                
        
        return (
        <div className="cartContainer">

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


export default connect(
    mapStateToProps,
  )(Cart);