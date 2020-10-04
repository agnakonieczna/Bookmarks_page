import React from "react";
import hero from "../assets/images/illustration-hero.svg";

function Baner() {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div className='banner__img-wrapper'>
            <img className='banner__hero' src={hero} alt='company-logo' />
            <svg
              className='svg-bg'
              xmlns='http://www.w3.org/2000/svg'
              width='600'
              height='700'
              preserveAspectRatio='xMidYMid meet'
            >
              <g>
                <rect
                  x='200'
                  y='300'
                  rx='100'
                  ry='100'
                  width='500'
                  height='200'
                  stroke='#5368df'
                  fill='#5368df'
                  stroke-width='250'
                  strokeLinecap='round'
                />
              </g>
              {/* <line
                x1='400'
                x2='850'
                y1='420'
                y2='420'
                strokeWidth='400'
                strokeLinecap='round'
                stroke='#5368df'
              /> */}
            </svg>
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
