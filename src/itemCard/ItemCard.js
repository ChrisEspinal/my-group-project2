import React from 'react';
import Card from 'react-bootstrap/Card'
import './ItemCard.css';

const ItemCard = (props) => {
    const item = props.itemArray.map((itemArray) => {
        return (
            <li key={itemArray.id}>
             <Card className="imgCard" style={{ width: '50rem' }}>
                {/* <Card.Img variant="top" src={itemArray.imagurl} alt="gif" /> */}
            </Card>
            <br/>
            </li>
            )});
            
    
    return (
        <ul >{item}</ul>
    );
        
}
export default ItemCard;