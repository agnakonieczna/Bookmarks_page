import React from "react";
import arrow1 from "../assets/images/icon-arrow.svg";
import arrow2 from "../assets/images/red-arrow.svg";

function OneQuestion({id, btn, question, answear, seeAnswear}) {
    return(
        <div className='faq__container'>
        <button className='faq__btn' onClick={seeAnswear} id={id}>
          {question}
          <img
            className={btn ? "arrow-rotate" : ""}
            src={btn ? arrow2 : arrow1}
            alt=''
          ></img>
        </button>
        {btn && (
          <p className='faq__answer'>{answear}</p>
        )}
      </div>
    )
}

export default OneQuestion