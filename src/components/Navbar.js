import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Navbar = () => {
  return (
    <header>

    <a href="#" class="logo"><i class="fas fa-utensils"></i>YarlBite</a>

    <nav class="navbar">

        
        
        <Link to="/"></Link>
        <Link to="/restaurants">Restaurant</Link>
     
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        

    </nav>

    <div class="icons">
        <i class="fas fa-bars" id="menu-bars"></i>
        <i class="fas fa-search" id="search-icon"></i>
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-shopping-cart"></a>
    </div>

</header>

  );
};

export default Navbar;
