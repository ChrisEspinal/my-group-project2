import './App.css';
import React from 'react';
import Home from '../home/Home';
import Shop from '../shop/Shop';
import About from '../about/About';
import SignIn from '../signIn/SignIn';
import Register from '../register/Register';
import Cart from '../cart/Cart';
import HotItems from '../seeMore/HotItems';
import Sale from '../seeMore/Sale';
import Checkout from '../checkout/Checkout';
import StyledNavbar from '../styledNavbar/StyledNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid App">
      <Router>
      <StyledNavbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} /> 
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} /> 
          <Route path="/signIn" component={SignIn} /> 
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart} />
          <Route path="/hotItems" component={HotItems} />  
          <Route path="/sale" component={Sale} />
          <Route path="/checkout" component={Checkout} />     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
