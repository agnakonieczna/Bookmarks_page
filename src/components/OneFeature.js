import React from "react";

function OneFeature({ img, title, text }) {
  return (
    <div className='one-feature'>
      <img className='one-feature__img' alt={title} src={img} />
      <h3 className='one-feature__title'>{title}</h3>
      <p className='one-feature__text'>
       {text}
      </p>
    </div>
  );
}

export default OneFeature;
