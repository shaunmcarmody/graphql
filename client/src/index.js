import React from 'react';
import ReactDOM from 'react-dom';
// import ApolloClient from 'apollo-boost';
import ApolloClient from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/',
//   headers: {
//     authorization: localStorage.getItem('token')
//   }
// });

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext((request, previousContext) => ({
  headers: {
    authorization: localStorage.getItem('token')
  }
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Router>,
  document.getElementById('root'));
