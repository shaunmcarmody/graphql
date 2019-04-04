import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

axios.interceptors.request.use((requestConfig) => {
  requestConfig.headers.authorization = localStorage.getItem('token');
  return requestConfig;
});


export default (Component => {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem('token');
      const notLoggedIn = <h3>Please login to see the users</h3>
      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>
    }
  }
})