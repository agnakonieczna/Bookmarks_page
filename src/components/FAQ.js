import React from 'react';

class FAQ extends React.Component {
    render() {
        return(   <section className='faq' id='faq'>
        <h2>Frequently asked questions</h2>
        <p>
         Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
        </p>
        <button>What is bookmark?</button>
        <p></p>
        <button>How can I request a new browser?</button>
        <p></p>
        <button>Is there a mobile app?</button>
        <p></p>
        <button>What about Chromium browsers?</button>
        <p></p>
        <button>More Info</button>
      </section>
    )
    }
}

export default FAQ;