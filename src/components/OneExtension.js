import React from "react";

function OneExtension({ img, title, text }) {
  return (
    <div>
      <img alt={title} src={img} />
      <h3>{title}</h3>
      <p>
       {text}
      </p>
      <button>Add & Install Extension</button>
    </div>
  );
}

export default OneExtension;