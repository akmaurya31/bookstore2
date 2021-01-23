import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Singlebook from "./components/Singlebook";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";
import Myorder from "./components/Myorder";
import Home from "./Home";

import { Switch, Route, Redirect } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Singlebook" component={Singlebook} />
			{ <Route exact path="/Cart" component={Cart} /> }
        <Route exact path="/Checkout" component={Checkout} />
        <Route exact path="/Profile" component={Profile} /> 
        <Route exact path="/Myorder" component={Myorder} />
      
      </Switch>
      
    </>
  );
};

export default App;
