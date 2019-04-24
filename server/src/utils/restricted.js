const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');

const secret = 'keep it secret, keep it safe'; // replace with .env

module.exports = async ({ headers, body }) => {
  const token = headers.authorization;
  const operation = body.operationName;
  try {
    if (operation !== 'SignupUser') {
      const { userId } = await jwt.verify(token, secret);
      return { userId };
    }
  } catch (err) {
    throw err;
  }
}