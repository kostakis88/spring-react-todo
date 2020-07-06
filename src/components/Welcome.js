import React from 'react';
import { Link } from 'react-router-dom';

function Welcome(props) {
  return (
    <h1>Welcome {props.match.params.name}, here are your <Link to="/todos">todos</Link></h1>
  );
}

export default Welcome;