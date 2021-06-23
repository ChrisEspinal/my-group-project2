import './App.css';
import React from 'react';
import Home from '../home/Home';
import Shop from '../shop/Shop';
import SignIn from '../signIn/SignIn';
import Register from '../register/Register';
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
          <Route path="/signIn" component={SignIn} /> 
          <Route path="/register" component={Register} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
