import React from "react";

function OneFeature({ img, title, text }) {
  return (
    <div>
      <img alt={title} src={img} />
      <h2>{title}</h2>
      <p>
       {text}
      </p>
    </div>
  );
}

export default OneFeature;
