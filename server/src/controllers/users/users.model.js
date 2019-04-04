const db = require('../../data/dbConfig.js');

const getUsersByDepartment = department =>
  db('users')
    .where('department', department)
    .select('username', 'department', 'id')

module.exports = {
  getUsersByDepartment
}