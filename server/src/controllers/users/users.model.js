const db = require('../../data/dbConfig.js');

const getUsersByDepartment = department =>
  db('users')
    .where('department', department)
    .select('username', 'department')

module.exports = {
  getUsersByDepartment
}