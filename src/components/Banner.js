import React from "react";
import hero from "../assets/images/illustration-hero.svg";
import svgBg from "../assets/images/svg-bg.svg";

function Baner() {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div className='banner__img-wrapper'>
            <img className='banner__hero' src={hero} alt='' />
            <img className='banner__svg-bg' src={svgBg} alt='' />
          </div>
          <div className='banner__content'>
            <h1 className='banner__title'>A Simple Bookmark Manager</h1>
            <p className='banner__text'>
              A clean and simple interface to organize your favourite websites.
              Open a new browser taband see your sites load instantly. Try it
              for free.
            </p>
            <div className='banner__btns'>
              <button className='banner__btn banner__btn-1'>
                Get it on Chrome
              </button>
              <button className='banner__btn banner__btn-2'>
                Get it on Firefox
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Baner;
