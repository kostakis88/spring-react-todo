import React, { Component } from 'react';
import TodoDataService from '../api/TodoDataService';
import Authentication from './Authentication';
import moment from 'moment';

class ToDoList extends Component {
  state = {
    todos: [],
    message: null
  };

  componentDidMount() {
    let username = Authentication.getLoggedInUsername();
    this.refreshTodos(username);
  }

  refreshTodos = (username) => {
    TodoDataService.retrieveAllTodos(username)
    .then(response => {
      this.setState({
        todos: response.data
      });
    });
  }

  handleDeleteClick = (id) => {
    let username = Authentication.getLoggedInUsername();
    TodoDataService.deleteTodo(username, id)
      .then(response => {
        this.setState({
          message: `Todo with id ${id} is successfully deleted!`
        }); 
        this.refreshTodos(username);
      });
  }

  handleUpdateClick = (id) => {
    this.props.history.push(`/todos/${id}`);
  }

  handleAddClick = () => {
    this.props.history.push('/todos/-1');
  }

  render() {
    return (
      <div className="container">
        <h1>ToDos</h1>
        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
        <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Due Date</th>
            <th>is it Completed?</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.state.todos.map(todo => 
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
              <td>{todo.done.toString()}</td>
              <td><button className="btn btn-success" onClick={() => this.handleUpdateClick(todo.id)}>Update</button></td>
              <td><button className="btn btn-warning" onClick={() => this.handleDeleteClick(todo.id)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="row">
        <button className="btn btn-success" onClick={this.handleAddClick}>Add</button>
      </div>
      </div>
    );
  }
}

export default ToDoList;