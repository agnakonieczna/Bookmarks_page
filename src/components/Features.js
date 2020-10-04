import React from "react";
import img1 from "../assets/images/illustration-features-tab-1.svg";
import img2 from "../assets/images/illustration-features-tab-2.svg";
import img3 from "../assets/images/illustration-features-tab-3.svg";
import OneFeature from "./OneFeature";

const title1 = "Bookmark in one click";
const text1 =
  "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourites sites.";
const title2 = "Intelligent search";
const text2 =
  "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
const title3 = "Share your bookmarks";
const text3 =
  "Easily share your bookmarks and collections with others. Create shareable link that you can send at the click button.";

class Features extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeBtn: "btn1",
    };
  }

  render() {
    return (
      <>
        <section className='features' id='features'>
          <div className='container'>
            <div className='features__content'>
              <h3 className='features__title'>Features</h3>
              <p className='features__text'>
                Our aim is to make quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices so
                you can access them on the go.
              </p>
            </div>
            <div className='features__flex'>
              <div className='features__btn-wrapper'>
                <button
                  className='features__btn'
                  onClick={() => this.setState({ activeBtn: "btn1" })}
                >
                  Simple bookmarking
                </button>
                {this.state.activeBtn === "btn1" && (
                  <span className='red-line'></span>
                )}
              </div>
              <div className='features__btn-wrapper'>
                <button
                  className='features__btn'
                  onClick={() => this.setState({ activeBtn: "btn2" })}
                >
                  Speedy searching
                </button>
                {this.state.activeBtn === "btn2" && (
                  <span className='red-line'></span>
                )}
              </div>
              <div className='features__btn-wrapper'>
                <button
                  className='features__btn features__btn-3'
                  onClick={() => this.setState({ activeBtn: "btn3" })}
                >
                  Easy sharing
                </button>
                {this.state.activeBtn === "btn3" && (
                  <span className='red-line'></span>
                )}
              </div>
            </div>
          </div>
          {this.state.activeBtn === "btn1" && (
            <OneFeature img={img1} title={title1} text={text1} />
          )}
          {this.state.activeBtn === "btn2" && (
            <OneFeature img={img2} title={title2} text={text2} />
          )}
          {this.state.activeBtn === "btn3" && (
            <OneFeature img={img3} title={title3} text={text3} />
          )}
        </section>
      </>
    );
  }
}

export default Features;
