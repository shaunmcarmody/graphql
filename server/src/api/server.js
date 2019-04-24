const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');
const restricted = require('../utils/restricted.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => restricted(req)
});

module.exports = server;