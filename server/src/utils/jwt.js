const jwt = require('jsonwebtoken');

const secret = 'keep it secret, keep it safe';

const sign = payload =>
  new Promise((resolve, reject) => {
    const options = {
      expiresIn: '1d'
    }

    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        reject('Failed to sign token');
      } else {
        resolve(token)
      }
    });
  })

const verify = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, { id, username }) => {
      if (err) {
        reject('Failed to verify token');
      } else {
        resolve({ userId: id, username })
      }
    })
  })

module.exports = {
  sign,
  verify
}