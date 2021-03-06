import React from "react";
import PropTypes from "prop-types";

class SignUpForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
    });
  };
  render() {
    return (
      <form onSubmit={e => this.props.handle_signup(e, this.state)}>
        <h4>sign up</h4>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handle_change}
        />
        <label htmlFor="username">password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handle_change}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SignUpForm;
SignUpForm.propTypes = { handle_signup: PropTypes.func.isRequired };
