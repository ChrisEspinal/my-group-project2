import React, { useState, useEffect } from "react";
import './HotItems.css';
import axios from "axios";

const HotItems = () => {
    
    const fetchData=()=>{
        axios.get("http://localhost:3002/HotItems")
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
        <div>Hot Items Page</div>
    );
}

export default HotItems;
