import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import './ItemCard.css';
import { Link } from 'react-router-dom';
import { CardDeck} from 'react-bootstrap';
import { Modal, Button } from "react-bootstrap";

const ItemCard = (props) => {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const product = props.itemArray.map((itemArray) => {
        return (
            <li key={itemArray.id}>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={itemArray.imgURL} />
                    <Card.Body>
                        <Card.Title>{itemArray.name}</Card.Title>
                        <Card.Text>
                            {/* {itemArray.description} */}
                            {/* <br/> */}
                            <p>${itemArray.price}</p> 
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div>
                            <Button variant="warning" className="btns" onClick={handleShow} data-target=".kf-modal-lg">
                                View Product
                            </Button>
                        </div>
                        <Modal size="lg"show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title><b>{itemArray.name}</b></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img src={itemArray.imgURL} alt="image"/>
                                <div className="embed-responsive embed-responsive-16by9">
                                    <p>{itemArray.description}</p>
                                    <br/>
                                    <p>${itemArray.price}</p>
                                </div>      
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                Add To Cart
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <div>
                        <Link to="/cart">
                        <Button variant="primary" className="btns">Add to Cart</Button>
                        </Link>
                        </div>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br/>
            </li>
            )});
            
    
    return (
        <ul >{product}</ul>
    );
        
}
export default ItemCard;