import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import LoggedIn from './reducers/loggedIn';

const store = createStore(LoggedIn,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
