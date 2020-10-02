import React from "react";
import logo from "../assets/images/logo-bookmark.svg";


function Footer() {
    return (
        <>
        <img src={logo}></img>
        <ul className='nav__list'>
        <li className='nav__list__item'>
          <a href='#features'>Features</a>
        </li>
        <li className='nav__list__item'>
          <a href='#pricing'>Pricing</a>
        </li>
        <li className='nav__list__item'>
          <a href='#contact'>Contact</a>
        </li>
        <li className='nav__list__item'>
          <a href='#login'>Login</a>
        </li>
      </ul>
      </>
    )
}

export default Footer;