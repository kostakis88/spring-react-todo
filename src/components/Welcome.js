import React from 'react';

function Welcome(props) {
  return (
    <h1>Welcome {props.match.params.name}</h1>
  );
}

export default Welcome;