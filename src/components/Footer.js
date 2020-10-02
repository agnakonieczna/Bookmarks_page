import React from "react";
import logo from "../assets/images/reversed-logo.svg";

function Footer() {
  return (
    <footer className='footer' id='contact'>
      <img src={logo} alt='company-logo'></img>
      <ul className='nav__list'>
        <li className='nav__item'>
          <a className='nav__link' href='#features'>Features</a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='#pricing'>Pricing</a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='#contact'>Contact</a>
        </li>
        <li className='nav__item'>
          <a className='nav__link' href='#login'>Login</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
