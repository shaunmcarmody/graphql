import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  headers: {
    authorization: localStorage.getItem('token')
  }
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root'));
