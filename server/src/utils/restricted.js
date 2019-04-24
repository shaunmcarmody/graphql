const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');

const secret = 'keep it secret, keep it safe'; // replace with .env

module.exports = ({ headers, body }) => {
  const token = headers.authorization;
  const operation = body.operationName;
  try {
    // Require auth token validation all operations, but bypass for SignupUser & LoginUser Mutations
    if (operation !== 'SignupUser' && operation !== 'LoginUser') {
      const { userId } = jwt.verify(token, secret);
      return { userId };
    }
  } catch (err) {
    throw new AuthenticationError('You must be logged in', 401); 
  }
}