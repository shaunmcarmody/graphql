const { ApolloServer, AuthorizationError } = require('apollo-server');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');
const restricted = require('../utils/restricted.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => restricted(req).then(res => res).catch(err => {
    console.log('Server.js Error:', err.message);
    throw new AuthorizationError('you must be logged in'); 
  })
});

module.exports = server;