import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: '',
    password: '',
    logginFailed: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  handleLoginClick = () => {
    const { username, password } = this.state;
    if (username === "kostas" && password === "test") {
      this.props.history.push(`/welcome/${username}`);
    } else {
      this.setState({
        logginFailed: true
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.logginFailed && <div>Email or Password is wrong!</div>}
        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <button onClick={this.handleLoginClick}>Login</button>
      </div>
    );
  }
}

export default Login;