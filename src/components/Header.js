import React from "react";
import logo from "../assets/images/logo-bookmark.svg";
import reversedLogo from "../assets/images/reversed-logo.svg";
import hamburgerOpen from "../assets/images/icon-hamburger.svg";
import hamburgerClose from "../assets/images/icon-close.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import OneFeature from "./OneFeature";
import img from "../assets/images/illustration-features-tab-2.svg";
import closeModal from "../assets/images/icon-close-modal.svg";

const title = "Intelligent search";
const text =
  "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      btnIcon: hamburgerOpen,
      showMenu: false,
      logo: logo,
      modalOpenOver: false,
      modalOpenTimeout: false,
      isModalOpen: false,
    };
  }

  openModal = () => {
    if (this.state.modalOpenOver || this.state.modalOpenTimeout) {
      clearTimeout(this.modalCountDown);
      return;
    }

    this.setState({
      modalOpenOver: true,
      modalOpenTimeout: true,
      isModalOpen: true,
    });
  };

  componentDidMount() {
    this.modalCountDown = setTimeout(() => {
      this.openModal();
    }, 30000);
  }

  componentWillUnmount() {
    clearTimeout(this.modalCountDown);
  }

  showMenu = () => {
    this.setState({
      btnIcon:
        this.state.btnIcon === hamburgerOpen ? hamburgerClose : hamburgerOpen,
      showMenu: this.state.showMenu ? false : true,
      logo: this.state.logo === logo ? reversedLogo : logo,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <>
        <header className='header' onMouseOver={this.openModal}>
          <div className='container'>
            <div className='header__flex'>
              <img className='logo' src={this.state.logo} alt='company-logo' />
              <button className='hamburger' onClick={this.showMenu} aria-label='Open the menu'>
                <img
                  src={this.state.btnIcon}
                  alt={
                    this.state.btnIcon === hamburgerOpen
                      ? "open-menu-btn"
                      : "close-menu-btn"
                  }
                ></img>
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
                <li className='nav__item nav__item-login'>
                  <a href='#login' className='nav__link nav__link-login'>
                    Login
                  </a>
                </li>
              </ul>
              <div className='nav__social-media'>
                <a
                  className='nav__social-media__link'
                  href='https://www.facebook.com/'
                >
                  <img
                    className='nav__social-media__img'
                    src={facebook}
                    alt='facebook-icon'
                  />
                </a>
                <a
                  className='nav__social-media__link'
                  href='https://twitter.com/'
                >
                  <img
                    className='nav__social-media__img'
                    src={twitter}
                    alt='twitter-icon'
                  />
                </a>
              </div>
            </nav>
            {this.state.isModalOpen && (
              <>
                <div className='modal'>
                  <button className='modal__btn' onClick={this.closeModal} aria-label='Close modal'>
                    <img src={closeModal} alt='close-modal-btn'></img>
                  </button>
                  <OneFeature
                    className='modal__content'
                    img={img}
                    title={title}
                    text={text}
                  />
                </div>
                <div
                  className='modal__background'
                  onClick={this.closeModal}
                ></div>
              </>
            )}
          </div>
        </header>
      </>
    );
  }
}

export default Header;
