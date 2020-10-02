import React from "react";
import baner from "../assets/images/illustration-hero.svg";

function Baner() {
  return (
    <>
      <section className='banner'>
        <img className='banner_hero' src={baner} alt='company-logo' />
          <h1>A simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser taband see your sites load instantly. Try it for
            free.
          </p>
          <button>
            Get it on Chrome
          </button>
          <button>
            Get it on Firefox
          </button>
      </section>
    </>
  );
}

export default Baner;
