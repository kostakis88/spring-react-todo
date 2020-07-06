import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Authentication from './Authentication';

function Header() {
  const isUserLoggedIn = Authentication.isUserLoggedIn();

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div><a href="#0" className="navbar-brand">Website</a></div>
        <ul className="navbar-nav">
          {isUserLoggedIn && <li><Link to="/welcome/kostas" className="nav-link">Home</Link></li>}
          {isUserLoggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
        </ul>
        <ul className="navbar-nav navbar-collapse justify-content-end">
          {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
          {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={Authentication.logout}>Logout</Link></li>}
        </ul>
      </nav>
    </header>
  );
}

export default withRouter(Header);