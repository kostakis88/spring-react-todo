import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import Error from './Error';
import ToDoList from './ToDoList';
import Header from './Header';
import Footer from './Footer';
import Logout from './Logout';
import AuthenticatedRoute from './AuthenticatedRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/login" component={Login}/>
            <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
            <AuthenticatedRoute path="/todos" component={ToDoList} />
            <AuthenticatedRoute path="/logout" component={Logout} />
            <Route component={Error}/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;