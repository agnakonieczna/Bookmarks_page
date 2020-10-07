import React from "react";
import svgBg from "../assets/images/svg-bg.svg";

function OneFeature({ img, title, text }) {
  return (
    <article className='one-feature'>
      <div className='container'>
        <div className='one-feature__img-wrapper'>
          <img className='one-feature__img' alt={title} src={img} />
          <img className='one-feature__svg-bg' src={svgBg} alt=''></img>
        </div>
        <div className='one-feature__content'>
          <h3 className='one-feature__title'>{title}</h3>
          <p className='one-feature__text'>{text}</p>
          <button className='one-feature__btn'>More info</button>
        </div>
      </div>
    </article>
  );
}

export default OneFeature;
