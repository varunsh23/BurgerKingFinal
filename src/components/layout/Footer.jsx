import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Burger King</h2>
        <p>Wake up with the King.</p>
        <br />
        <p> We give attention to our lovely customers.</p>
        <br />
        <strong>BURGER KING COMPANY LLC. All Rights Reserved</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/burgerkingindia/">
          <AiFillFacebook />
        </a>
        <a href="https://www.instagram.com/burgerkingindia/">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/burgerkingindia">
          <AiFillTwitterCircle />
        </a>
        <a href="https://www.youtube.com/user/BurgerKingIndia">
          <AiFillYoutube />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
