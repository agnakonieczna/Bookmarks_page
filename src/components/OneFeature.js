import React from "react";

function OneFeature({ img, title, text }) {
  return (
    <div className='one-feature'>
      <div className='container'>
        <img className='one-feature__img' alt={title} src={img} />
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className='one-feature__svg-bg'><line
              x1='0%'
              x2='50%'
              y1='35%'
              y2='35%'
              stroke-width='50%'
              stroke-height='90%'
              stroke-linecap='round'
              stroke='#5368df'
            /></svg> */}
        <div className='one-feature__content'>
          <h3 className='one-feature__title'>{title}</h3>
          <p className='one-feature__text'>{text}</p>
          <button className='one-feature__btn'>More info</button>
        </div>
      </div>
    </div>
  );
}

export default OneFeature;
