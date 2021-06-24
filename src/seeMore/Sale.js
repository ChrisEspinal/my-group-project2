import React, { useState, useEffect } from "react";
import './Sale.css';
import axios from "axios";

const Sale = () => {
    
    const fetchData=()=>{
        axios.get("http://localhost:3002/Sale")
        .then(response => {
          console.log(response);
        //   this.setState({
        //       itemArray: response.data.need,
        //       itemArray2: response.data.need2,
        //       itemArray3: response.data.need3
        //     })
        })
        .catch(error => {
          console.log(error);
        }); 
    }
    
    fetchData()
    return (
        <div>Sale Page</div>
    );

}

export default Sale;
