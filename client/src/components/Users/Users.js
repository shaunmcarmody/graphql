import React from 'react';
import axios from 'axios';
import requiresAuth from '../../HOC/requiresAuth/requiresAuth';

class Users extends React.Component {
  state= {
    users: []
  }
  render() {
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {
            this.state.users.map(user => (
              <li
                key={user.id}
              >
                {user.username}
              </li>
            ))
          }
        </ul>
      </>
    )
  }

  componentDidMount() {
    axios
      .get('/users')
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export default requiresAuth(Users);