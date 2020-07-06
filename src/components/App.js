import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Error from './Error';
import ToDoList from './ToDoList';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/welcome/:name" component={Welcome} />
            <Route path="/todos" component={ToDoList} />
            <Route component={Error}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;