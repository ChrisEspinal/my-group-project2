import React, { useState, useEffect } from "react";
import './Cart.css';
import {incCart, decCart,add_item} from "../actions/indexAction";
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";




const Cart = () => {
    
    const itemArr = useSelector((state)=> state.Items);
    
useEffect(()=>{

    let values = itemArr.arr;
    console.log(values);
    (async () => {
        const rawResponse = await fetch('/cart', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const content = await rawResponse.json();
        console.log("This is the content");
        console.log(content);
        })();
})

    console.log(itemArr);
    return (
        <div>Cart Page

           
        </div>


    );
}

export default Cart;
