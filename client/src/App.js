import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import Form from './components/Login/Login';
import Users from './components/Users/Users';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <button
          onClick={this.logout}
        >
          Logout
        </button>
      </header>
        <Route exact path="/" component={Form} />
        <Route exact path="/users" component={Users} />
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('token');
  }
}

export default App;
