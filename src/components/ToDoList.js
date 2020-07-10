import React, { Component } from 'react';

class ToDoList extends Component {
  state = {
    todos: [
      {id : 1, description: "Lean React", isCompleted: false, dueDate: new Date()},
      {id : 2, description: "Lean Java", isCompleted: false, dueDate: new Date() },
      {id : 3, description: "Lean TypeScript", isCompleted: false, dueDate: new Date() }
    ]
  };

  render() {
    return (
      <div className="container">
        <h1>ToDos</h1>
        <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {this.state.todos.map(todo => 
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>{todo.isCompleted.toString()}</td>
              <td>{todo.dueDate.toString()}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    );
  }
}

export default ToDoList;