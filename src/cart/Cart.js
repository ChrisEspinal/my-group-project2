import React, { useState, useEffect } from "react";
import './Cart.css';
import {incCart, decCart,add_item} from "../actions/indexAction";
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";




const Cart = () => {
    
    const itemArr = useSelector((state)=> state.Items);
    const[sold,setSold] = useState();

    
useEffect(()=>{

    let values = itemArr.arr;
    console.log(values);

    let arr =[]
    if(sold === undefined){
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
            for(let j=0; j<values.length;j++){
                for(let i =0; i< content.length;i++){
                    if(content[i].id == values[j].item && !arr.includes(content[i])){
                        arr.push(content[i])            
                    }
                }
            }

            })();
            setSold(arr)
    }

})

console.log(sold);

    return (
        <div>Cart Page

           
        </div>


    );
}

export default Cart;
