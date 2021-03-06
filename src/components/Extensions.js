import React from "react";
import img1 from "../assets/images/logo-chrome.svg";
import img2 from "../assets/images/logo-firefox.svg";
import img3 from "../assets/images/logo-opera.svg";
import OneExtension from "./OneExtension";
import SimpleText from "./SimpleText";

const title = "Download the extensions";
const text = "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to priortize."
const data = [
  {
    id: 1,
    img: img1,
    title: "Add to Chrome",
    text: "Minimum version 62",
  },
  {
    id: 2,
    img: img2,
    title: "Add to Firefox",
    text: "Minimum version 55",
  },
  {
    id: 3,
    img: img3,
    title: "Add to Opera",
    text: "Minimum version 46",
  },
];

function Extensions() {
    return (
      <>
        <section className='extension' id='pricing'>
          <div className='container'>
            <SimpleText title={title} text={text} />
            <div className='extension__container'>
              {data.map((extension) => {
                return (
                  <OneExtension
                    key={extension.id}
                    img={extension.img}
                    title={extension.title}
                    text={extension.text}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
}

export default Extensions;
