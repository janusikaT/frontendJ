import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Prices from "./components/Prices";
import Menu from "./components/Menu";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Restaurants from "./Pages/Restaurants";
import Navbar from "./components/Navbar";
import CarouselCard from "./components/Carousel";
import Home from "./Pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleRestaurant from "./Pages/SingleRestaurant";
function App() {
  return (
    <div>
    <Router>
    <Navbar />
    
    <div style={{"padding-top": "80px"}}>
    <Switch>
    <Route exact path="/" component={Home}  />
      <Route exact path="/restaurants" component={Restaurants} exact />
      <Route exact path="/restaurant/:id" component={SingleRestaurant} exact />
    </Switch>
    </div>
    </Router>
  </div>
  );
}

export default App;
