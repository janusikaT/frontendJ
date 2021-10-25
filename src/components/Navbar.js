import React from "react";

const Navbar = () => {
  return (
    <header>

    <a href="#" class="logo"><i class="fas fa-utensils"></i>YarlBite</a>

    <nav class="navbar">
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#prices">menu</a>
        <a href="#review">Restaurant</a>
        <a href="#order">ContactUs</a>
        <a href="login.html">login</a>
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