import React from "react";

const Footer = () => {
  return (
    <section class="footer">

    <div class="box-container">

        

        <div class="box">
            <h3>quick links</h3>
            <a href="/">Home</a>
            <a href="/login">Log In</a>
            <a href="/signup">Sign Up</a>
            <a href="/restaurants">Restaurants</a>
            <a href="#">reivew</a>
            <a href="#">order</a>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <a href="#">+94-771234567</a>
            <a href="#">+94-760123456</a>
            <a href="#">yarlbite.info@gmail.com</a>
            <a href="#">Jaffna,Northern Province,Sri Lanka</a>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Linkedin</a>
        </div>

    </div>

    <div class="credit"> copyright @ 2021 by <span>Yarl Bite</span> </div>

</section>

  );
};

export default Footer;
