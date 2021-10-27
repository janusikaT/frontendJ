import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Restaurants from "./Pages/Restaurants";
import Navbar from "./components/Navbar";
import Home from "./Pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleRestaurant from "./Pages/SingleRestaurant";
import PublicRoute from "./Functions/PublicRoute";
import PrivateRoute from "./Functions/PrivateRoute";
import Login from "./Pages/Login";
import { getToken, removeUserSession, setUserSession } from './Functions/Common';
import Signup from './Pages/Signup';
import About from './components/About'








function App() {
  // const [authLoading, setAuthLoading] = useState(true);
 
  // useEffect(() => {
  //   const token = getToken();
  //   if (!token) {
  //     return;
  //   }
 
  //   axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
  //     setUserSession(response.data.token, response.data.user);
  //     setAuthLoading(false);
  //   }).catch(error => {
  //     removeUserSession();
  //     setAuthLoading(false);
  //   });
  // }, []);
 
  // if (authLoading && getToken()) {
  //   return <div className="content">Checking Authentication...</div>
  // }















  return (
    <div>
    <Router>
    <Navbar />
    
    <div style={{"padding-top": "80px"}}>
    <Switch>
    <Route exact path="/" component={Home}  />
      <Route exact path="/restaurants" component={Restaurants} exact />
      <Route exact path="/restaurant/:id" component={SingleRestaurant} exact />
      <Route exact path="/login" component={Login} exact />
      <Route exact path="/signup" component={Signup} exact />
      {/* <Route exact path="/aboutus" component={About} exact /> */}
    </Switch>
    </div>
    </Router>
  </div>
  );
}

export default App;
