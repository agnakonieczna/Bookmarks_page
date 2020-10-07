import React from "react";

function SimpleText({ title, text }) {
  return (
    <div className='content'>
      <h3 className='title'>{title}</h3>
      <p className='text'>
        {text}
      </p>
    </div>
  );
}

export default SimpleText;
