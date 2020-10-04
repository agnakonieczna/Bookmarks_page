import React from "react";
import hero from "../assets/images/illustration-hero.svg";

function Baner() {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <img className='banner__hero' src={hero} alt='company-logo' />
          {/* <line
              x1='400'
              x2='700'
              y1='300'
              y2='300'
              stroke-width='320'
              stroke-height='200'
              stroke-linecap='round'
              stroke='#5368df'
            /> */}
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
