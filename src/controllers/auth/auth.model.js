const db = require('../../data/dbConfig.js');

const getUser = username =>
  db('users')
    .where('username', username)
    .first();

const insertUser = user =>
  db('users')
    .insert({
      ...user,
      departments: JSON.stringify(user.departments),
    })

module.exports = {
  getUser,
  insertUser
}