const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./signup.model.js');

const secret = 'keep it secret, keep it safe'; // replace with .env

module.exports = async (parent, args, context) => {
  args.password = bcrypt.hashSync(args.password, 4);
  try {
    const [id] = await db.insertUser(args);
    if (id) {
      const token = await jwt.sign({ userId: id }, secret, { expiresIn: '1d' });
      return { token };
    }
  } catch (err) {
    console.log(err.name);
    return err;
  }
}