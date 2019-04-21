const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers.js');
const { verify } = require('../utils/jwt.js');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || 'null';
    return verify(token)
      .then(res => res)
      .catch(err => console.log(err));
  },
});

module.exports = server;