import React from "react";
import arrow from "../assets/images/icon-arrow.svg";

class FAQ extends React.Component {
  constructor(props) {
    super();
    this.state = {
      btn1: false,
      btn2: false,
      btn3: false,
      btn4: false,
    };
  }

  seeAnswear = (e) => {
    this.setState(
      {
        [e.target.id]: this.state[e.target.id] ? false : true,
      },
      () => {
        console.log(this.state.btn1);
      }
    );
  };

  render() {
    return (
      <section className='faq' id='faq'>
        <div className='container'> 
          <div className='faq__content'>
            <h3 className='faq__title'>Frequently Asked Questions</h3>
            <p className='faq__text'>
              Here are some of our FAQs. If you have any other questions you'd
              like answered please feel free to email us.
            </p>
            <div className='faq__container'>
              <button className='faq__btn' id='btn1' onClick={this.seeAnswear}>
                What is bookmark?<img src={arrow} alt=''></img>
              </button>
              {this.state.btn1 && (
                <p className='faq__answer'>
                  Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
                  lorem ipsum{" "}
                </p>
              )}
            </div>
            <div className='faq__container'>
              <button className='faq__btn' onClick={this.seeAnswear} id='btn2'>
                How can I request a new browser?<img src={arrow} alt=''></img>
              </button>
              {this.state.btn2 && (
                <p className='faq__answer'>Lorem ipsum lorem ipsum</p>
              )}
            </div>
            <div className='faq__container'>
              <button className='faq__btn' onClick={this.seeAnswear} id='btn3'>
                Is there a mobile app?<img src={arrow} alt=''></img>
              </button>
              {this.state.btn3 && (
                <p className='faq__answer'>Lorem ipsum lorem ipsum</p>
              )}
            </div>
            <div className='faq__container'>
              <button className='faq__btn' onClick={this.seeAnswear} id='btn4'>
                What about Chromium browsers?<img src={arrow} alt=''></img>
              </button>
              {this.state.btn4 && (
                <p className='faq__answer'>Lorem ipsum lorem ipsum</p>
              )}
            </div>
            <button className='faq__btn-more-info'>More Info</button>
          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;
