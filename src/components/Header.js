import React from "react";
import logo from "../assets/images/logo-bookmark.svg";
import hamburgerOpen from "../assets/images/icon-hamburger.svg";
import hamburgerClose from "../assets/images/icon-close.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      btnIcon: hamburgerOpen,
      showMenu: false,
    };
  }

  showMenu = () => {
    this.setState({
      btnIcon:
        this.state.btnIcon === hamburgerOpen ? hamburgerClose : hamburgerOpen,
      showMenu: this.state.showMenu ? false : true,
    });
  };

  render() {
    return (
      <>
        <header
          className={this.state.showMenu ? "header header-show" : "header"}
        >
          <div className='header__row'>
            <img
              className='logo'
              src={logo}
              alt='company-logo'
            />
            <button className='hamburger' onClick={this.showMenu}>
              <img src={this.state.btnIcon} alt='menu'></img>
            </button>
          </div>
          <nav className={this.state.showMenu ? "nav show" : "nav"}>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a href='#features' className='nav__link'>
                  Features
                </a>
              </li>
              <li className='nav__item'>
                <a href='#pricing' className='nav__link'>
                  Pricing
                </a>
              </li>
              <li className='nav__item'>
                <a href='#contact' className='nav__link'>
                  Contact
                </a>
              </li>
              <li className='nav__item'>
                <a href='#login' className='nav__link'>
                  Login
                </a>
              </li>
            </ul>
            <div className='nav__links'>
              <a href='https://www.facebook.com/'>
                <img src={facebook} alt='facebook-icon'/>
              </a>
              <a href='https://twitter.com/'>
                <img src={twitter} alt='twitter-icon'/>
              </a>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
