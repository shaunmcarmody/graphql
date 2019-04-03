const db = require('../../data/dbConfig.js');

const getUsers = () =>
  db('users')
    .select('username', 'departments')

module.exports = {
  getUsers
}