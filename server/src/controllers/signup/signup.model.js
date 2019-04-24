const db = require('../../data/dbConfig.js');

const insertUser = user =>
  db('users')
    .insert(user)

module.exports = {
  insertUser
}