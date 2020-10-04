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
            <button
              className={
                this.state.btn1 ? "features__btn red-border" : "features__btn"
              }
              onClick={() => {
                this.setState({ btn1: true, btn2: false, btn3: false });
              }}
            >
              Simple bookmarking
            </button>
            {this.state.btn1 && <span className='red-line'></span>}
            <button
              className={
                this.state.btn2 ? "features__btn red-border" : "features__btn"
              }
              onClick={() => {
                this.setState({ btn1: false, btn2: true, btn3: false });
              }}
            >
              Speedy searching
            </button>
            {this.state.btn2 && <span className='red-line'></span>}
            <button
              className={
                this.state.btn3 ? "features__btn red-border" : "features__btn features__btn-3"
              }
              onClick={() => {
                this.setState({ btn1: false, btn2: false, btn3: true });
              }}
            >
              Easy sharing
            </button>
            {this.state.btn3 && <span className='red-line'></span>}
          </div>
          {this.state.btn1 && (
            <OneFeature
              img={this.state.img1}
              title={this.state.title1}
              text={this.state.text1}
            />
          )}
          {this.state.btn2 && (
            <OneFeature
              img={this.state.img2}
              title={this.state.title2}
              text={this.state.text2}
            />
          )}
          {this.state.btn3 && (
            <OneFeature
              img={this.state.img3}
              title={this.state.title3}
              text={this.state.text3}
            />
          )}
        </section>
      </>
    );
  }
}

export default Features;
