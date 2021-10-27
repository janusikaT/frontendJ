import React from "react";

const Footer = () => {
  return (
    <section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">dishes</a>
            <a href="#">about</a>
            <a href="#">menu</a>
            <a href="#">reivew</a>
            <a href="#">order</a>
        </div>

        <div class="box">
            <h3>contact info</h3>
            <br>0770123456</br>
            <b>0761234567</b>
            <a href="#">yarlbite.info@gmail.com</a>
            <br>Jaffna,</br>
            <br>Northern Province,</br>
            <br>Sri Lanka</br>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
            <a href="#">linkedin</a>
        </div>

    </div>

    <div class="credit"> copyright @ 2021 by <span>Yarl Bite</span> </div>

</section>

  );
};

export default Footer;
