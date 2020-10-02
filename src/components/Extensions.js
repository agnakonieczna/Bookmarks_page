import React from "react";
import img1 from "../assets/images/illustration-features-tab-1.svg";
import img2 from "../assets/images/illustration-features-tab-2.svg";
import img3 from "../assets/images/illustration-features-tab-3.svg";
import OneFeature from "./OneFeature";

class Features extends React.Component {
  constructor(props) {
    super();
    this.state = {
      btn1: true,
      img1: img1,
      title1: "Bookmark in one click",
      text1:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourites sites.",
      btn2: false,
      img2: img2,
      title2: "Intelligent search",
      text2:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      btn3: false,
      img3: img3,
      title3: "Share your bookmarks",
      text3:
        "Easily share your bookmarks and collections with others. Create shareable link that you can send at the click button.",
    };
  }

  render() {
    return (
      <>
        <section className='extensions' id='extensions'>
          <h2>Download the extensions</h2>
          <p>
            We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to priortize.
          </p>
         
        </section>
      </>
    );
  }
}

export default Features;
