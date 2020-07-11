import React, { Component } from 'react';
import TodoDataService from '../api/TodoDataService';
import Authentication from './Authentication';

class ToDoList extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    let username = Authentication.getLoggedInUsername();
    TodoDataService.retrieveAllTodos(username)
      .then(response => {
        this.setState({
          todos: response.data
        });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>ToDos</h1>
        <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Due Date</th>
            <th>is it Completed?</th>
          </tr>
        </thead>
        <tbody>
          {this.state.todos.map(todo => 
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>{todo.targetDate.toString()}</td>
              <td>{todo.done.toString()}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    );
  }
}

export default ToDoList;