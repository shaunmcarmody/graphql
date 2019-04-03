const db = require('../../data/dbConfig.js');

const getUserId = username =>
  db('users')
    .where('username', username)
    .select('id')
    .first()

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
  getUserId,
  insertUser
}