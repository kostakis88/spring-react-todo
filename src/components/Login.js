import React, { Component } from 'react';
import Authentication from './Authentication.js';

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
      Authentication.registerSuccessfullLogin(username, password)
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
        <div className="container">
          <h1>Login</h1>
          {this.state.logginFailed && <div className="alert alert-warning">Email or Password is wrong!</div>}
          User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button className="btn btn-primary" onClick={this.handleLoginClick}>Login</button>
        </div>
      </div>
    );
  }
}

export default Login;