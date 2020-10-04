import React from "react";
import OneQuestion from "./OneQuestion";

const data = [
  {
    id: "btn1",
    btnQuestion: "What is bookmark?",
    btnAnswear:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    id: "btn2",
    btnQuestion: "How can I request a new browser?",
    btnAnswear:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    id: "btn3",
    btnQuestion: "Is there a mobile app?",
    btnAnswear:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
  {
    id: "btn4",
    btnQuestion: "Is there a mobile app?",
    btnAnswear:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
  },
];

class FAQ extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activeBtn: ''
    }
  }

  seeAnswear = (e) => {
    const newId = this.state.activeBtn === e.target.id ? "" : e.target.id;
    this.setState ({
      activeBtn: newId
    })
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
            {data.map((question) => {
              return (
                <OneQuestion
                  key={question.id}
                  id={question.id}
                  btn={this.state.activeBtn === question.id}
                  question={question.btnQuestion}
                  answear={question.btnAnswear}
                  seeAnswear={this.seeAnswear}
                />
              );
            })}
            <button className='faq__btn-more-info'>More Info</button>
          </div>
        </div>
      </section>
    );

  }
  
};

export default FAQ;
