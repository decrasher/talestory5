import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom'
import { Switch,Route } from 'react-router-dom';
import AboutUs from './component/AboutUs'
import Cart from './component/Cart'
import PlaceOrder from './component/PlaceOrder'
import Products from './component/Products'
import Customer from './component/Customer'
import Home from './Home'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Route exact path="/">
        <Home />
    </Route> 
    <Switch>
      <Route path="/App">
        <App />
      </Route>    
      <Route path="/AboutUs">
        <AboutUs />
      </Route>
      <Route path="/Cart">
        <Cart />
      </Route>
      <Route path="/PlaceOrder">
        <PlaceOrder />
      </Route>
      <Route path="/Products">
        <Products />
      </Route>
      <Route path="/Customer">
        <Customer />
      </Route>
      <Route path="/Login">
        <App />
      </Route>
    </Switch>
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
