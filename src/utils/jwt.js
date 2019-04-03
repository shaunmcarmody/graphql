const jwt = require('jsonwebtoken');

const secret = 'keep it secret, keep it safe';

const sign = payload =>
  new Promise((resolve, reject) => {
    const options = {
      expiresIn: '1d'
    }

    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        reject()
      } else {
        resolve(token)
      }
    });
  })

const verify = token =>
  new Promise((resolve, reject) => {
    console.log('verify touched')
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        reject()
      } else {
        resolve(decodedToken)
      }
    })
  })

module.exports = {
  sign,
  verify
}