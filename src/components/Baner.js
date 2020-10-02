import React from "react";
import baner from "../assets/images/illustration-hero.svg";

function Baner() {
  return (
    <>
      <section className='banner'>
      <img className='banner_hero' src={baner} alt='company-logo' />

        <div className='container'>
          <div className='banner_content'>
            <h1 className='banner__title'>A Simple Bookmark Manager</h1>
            <p className='banner__text'>
              A clean and simple interface to organize your favourite websites.
              Open a new browser taband see your sites load instantly. Try it
              for free.
            </p>
            <button className='banner__btn banner__btn-1'>
              Get it on Chrome
            </button>
            <button className='banner__btn banner__btn-2'>
              Get it on Firefox
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Baner;
