const { ApolloServer, AuthenticationError } = require('apollo-server');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ token: req.headers.authorization })
});

module.exports = server;