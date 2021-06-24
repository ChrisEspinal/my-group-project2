import React from 'react';
import './Home.css';
import axios from 'axios'

class Home extends React.Component {

    fetchData = async() => {
        // console.log("w.e");
        const result = await
    axios.get("http://localhost:3002/home").then(response => {
        console.log(response);

    })
    .catch(error => {
      console.log(error);
    });
 }
 componentDidMount(){
     this.fetchData();
 }

    render () {
        return (
            <div className="container">
               Home Page

            </div>
            
        );
    }

}

export default Home;