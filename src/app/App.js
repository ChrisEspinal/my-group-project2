import './App.css';
import React from 'react';
import Home from '../home/Home';
import SignIn from '../signIn/SignIn';
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
          <Route path="/signIn" component={SignIn} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
