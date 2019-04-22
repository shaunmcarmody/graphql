const { AuthenticationError } = require('apollo-server');
const { getUsers } = require('./users.model.js');
const { verify } = require('../../utils/jwt.js');

module.exports = async (parent, args, { token }) => {
  try {
    const { id, username } = await verify(token);
    console.log(id, username);
    const resource = await getUsers();
    return resource;
  } catch (err) {
    throw new AuthenticationError('You must be logged in');
  }
}