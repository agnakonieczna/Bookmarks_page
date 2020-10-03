import React from "react";
import logo from "../assets/images/footer-logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";

function Footer() {
  return (
    <footer className='footer' id='contact'>
      <div className='container'>
        <div className='footer__flex'>
          <img className='footer__logo' src={logo} alt='company-logo'></img>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a className='footer__link' href='#features'>
                Features
              </a>
            </li>
            <li className='footer__item'>
              <a className='footer__link' href='#pricing'>
                Pricing
              </a>
            </li>
            <li className='footer__item'>
              <a className='footer__link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__links'>
          <a href='https://www.facebook.com/'>
            <img src={facebook} alt='facebook-icon' />
          </a>
          <a href='https://twitter.com/'>
            <img src={twitter} alt='twitter-icon' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
