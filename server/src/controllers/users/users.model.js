const db = require('../../data/dbConfig.js');

const getUsers = () => db('users');

module.exports = {
  getUsers
}