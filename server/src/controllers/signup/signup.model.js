const db = require('../../data/dbConfig.js');

const getUserById = id =>
  db('users')
    .where('id', id)
    .select('id', 'username')
    .first();

const insertUser = user =>
  db('users')
    .insert(user)

module.exports = {
  getUserById,
  insertUser
}