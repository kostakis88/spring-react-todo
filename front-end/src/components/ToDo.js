import React from 'react';

function Todo(props) {
  return (<div>Welcome to ToDo {props.match.params.id}</div>);
}

export default Todo;