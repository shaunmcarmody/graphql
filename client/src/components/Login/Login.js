import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    department: '',
    username: '',
    password: '',
    login: true
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input
          name="username"
          onChange={this.handleChange}
          placeholder="username"
          type="text"
          value={this.state.username}
        /> 
        <input
          name="password"
          onChange={this.handleChange}
          placeholder="password"
          type="text"
          value={this.state.password}
        />
        {
          !this.state.login ?
          <select
            name="department"
            onChange={this.updateDepartment}
          >
            <option value="teaching">Teaching</option>
            <option value="student development">Student Development</option>
            <option value="advisors">Advisors</option>
            <option value="students">Students</option>
          </select> :
          null
        }
        <button>{this.state.login ? 'Login' : 'Signup'}</button>
        <p
          onClick={this.toggleLogin}
        >
          Switch to {this.state.login ? 'Signup' : 'Login'}
        </p>
      </form>
    )
  }

  constructPayload = () => (
    this.state.login ?
    { username: this.state.username, password: this.state.password } :
    { username: this.state.username, password: this.state.password, department: this.state.department }
  )

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const payload = this.constructPayload();
    const endpoint = `http://localhost:5000/api/auth/${this.state.login ? 'login' : 'register'}`;
    axios
      .post(endpoint, payload)
      .then(res => {
        localStorage.setItem('token', res.data);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ username: '', password: '', department: '' });
  }

  toggleLogin = () => {
    this.setState(state => {
      return ({
        login: !state.login
      })
    });
  }

  updateDepartment = e => {
    this.setState({
      department: e.target.value
    });
  }
}

export default Login;