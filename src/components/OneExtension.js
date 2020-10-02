import React from "react";
import dotsBg from "../assets/images/bg-dots.svg"

function OneExtension({ img, title, text }) {
  return (
    <div className='one-extension'>
      <img className='one-extension__logo' alt={title} src={img} />
      <h5 className='one-extension__title'>{title}</h5>
      <p className='one-extension__text'>
       {text}
      </p>
      <img className='one-extension__dots' src={dotsBg} alt=""></img>
      <button className='one-extension__btn'>Add & Install Extension</button>
    </div>
  );
}

export default OneExtension;