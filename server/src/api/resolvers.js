const users = require('../controllers/users/users.resolvers.js');
const signupUser = require('../controllers/signup/signup.resolvers.js');

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    info: () => 'webauth api',
    users
  },
  Mutation: {
    signupUser
  }
};

module.exports = resolvers;