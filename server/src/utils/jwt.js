const { AuthenticationError, ApolloError } = require('apollo-server');
const jwt = require('jsonwebtoken');

const secret = 'keep it secret, keep it safe';

const sign = payload => {
  try {
    return jwt.sign(payload, secret, { expiresIn: '1d' });
  } catch (err) {
    console.log(err.name);
    throw new ApolloError('Failed to sign token', 500);
  }
};

const verify = token => {
  try {
    return jwt.verify(token, secret)
  } catch (err) {
    console.log(err.name);
    throw new AuthenticationError('Token invalid please log in', 401);
  }
}

module.exports = {
  sign,
  verify
}
