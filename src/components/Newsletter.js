import React from "react";

class Newsletter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      emailErr: "",
      number: 35000,
    };
  }

  submit = (e) => {
    e.preventDefault();

    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (!this.state.email || !validateEmail(this.state.email)) {
      this.setState({
        emailErr: "Whoops make sure it's an email",
      });
    } else {
      this.setState({
        email: "",
        emailErr: "",
      });
    }
  };

  render() {
    return (
      <section className='newsletter'>
        <p className='newsletter__info'>{this.state.number}+ already joined</p>
        <h3 className='newsletter__title'>
          Stay up to date with what we're doing
        </h3>
        <form className='newsletter__form' onSubmit={this.submit}>
          <input
            className={ this.state.emailErr ? 'newsletter__input newsletter__input-error' : 'newsletter__input'}
            type='text'
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
          {this.state.emailErr && (
            <div className='newsletter__error'>
              <em>{this.state.emailErr}</em>
            </div>
          )}
          <button className='newsletter__btn' type='submit'>
            Contact Us
          </button>
        </form>
      </section>
    );
  }
}

export default Newsletter;
