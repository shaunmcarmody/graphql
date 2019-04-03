const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const auth = require('../controllers/auth/auth.routes.js');
const users = require('../controllers/users/users.routes.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api/auth/', auth);
server.use('/api/users', users);

module.exports = server;