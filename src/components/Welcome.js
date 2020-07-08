import React from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../api/HelloWorldService';

function Welcome(props) {
  const retrieveWelcomeMessage = () => {
    HelloWorldService.executeHelloWorldService();
  }

  return (
    <div className="container">
      <h1>Welcome {props.match.params.name}, here are your <Link to="/todos">todos</Link></h1>
      <h2>Click here to get a customized Welcome Message</h2>
      <button className="btn btn-success" onClick={retrieveWelcomeMessage}>Get Welcome Message</button>
    </div>
  );
}

export default Welcome;