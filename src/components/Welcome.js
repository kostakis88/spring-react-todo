import React from 'react';
import { Link } from 'react-router-dom';

function Welcome(props) {
  return (
    <div className="container">
      <h1>Welcome {props.match.params.name}, here are your <Link to="/todos">todos</Link></h1>
    </div>
  );
}

export default Welcome;