import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../api/HelloWorldService';

function Welcome(props) {

  const [welcomeMessage, setWelcomeMessage] = useState('');

  const retrieveWelcomeMessage = () => {
    HelloWorldService.executeHelloWorldService()
    .then( response => setWelcomeMessage(response.data.message) );
  }

  return (
    <div className="container">
      <h1>Welcome {props.match.params.name}, here are your <Link to="/todos">todos</Link></h1>
      <h2>Click here to get a customized Welcome Message</h2>
      <button className="btn btn-success" onClick={retrieveWelcomeMessage}>Get Welcome Message</button>
      { welcomeMessage && <h3>{welcomeMessage}</h3> }
    </div>
  );
}

export default Welcome;