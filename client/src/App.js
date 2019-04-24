import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import Form from './components/Signup/Signup';
import Users from './components/Users/Users';
import Logout from './components/Logout/Logout';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/logout">Logout</Link>
      </header>
        <Route exact path="/" component={Form} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/logout" component={Logout} />
      </div>
    );
  }
}

export default App;
