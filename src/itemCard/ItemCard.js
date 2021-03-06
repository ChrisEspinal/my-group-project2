import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import './ItemCard.css';
import { Row, Col } from 'react-bootstrap';
import { CardDeck} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import {incCart, decCart,add_item,remove_item} from "../actions/indexAction";
import {useSelector,useDispatch} from 'react-redux';

const plusBtn = <FontAwesomeIcon icon={faPlus}/>
// const minusBtn = <FontAwesomeIcon icon={faMinus}/>

const ItemCard = (props) => {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const itemCart = useSelector((state)=> state.Items)

  const action1 = itemArray => {
    return dispatch => {
      dispatch(incCart())
      dispatch(add_item(itemArray))
    }
  }

    const product = props.itemArray.map((itemArray) => {
        console.log(itemArray);
        return (
            <li key={itemArray.id}>  
                <Card className="card-view">
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
                        <Row>
                            <Col sm={12} lg={4}>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col sm={12} lg={2}>
                        <div>
                        {/* <Link to="/cart"> */}
                        {/* <i className="btns" onClick={()=>(dispatch(remove_item(itemArray,itemArray.id)),dispatch(decCart()))}>{minusBtn}</i> */}
                        {/* </Link> */}
                        </div>
                        </Col>
                        <Col sm={12} lg={2}>
                        <div>
                        {/* <Link to="/cart"> */}
                        <i className="btns" onClick={()=>(dispatch(add_item(itemArray)),dispatch(incCart()))}>{plusBtn}</i>
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
    <ul><CardDeck style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)'}}>{product}</CardDeck></ul>
    );
        
}
export default ItemCard;