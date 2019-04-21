const bcrypt = require('bcryptjs');
const { sign } = require('../../utils/jwt.js');
const db = require('./auth.model.js');

module.exports = async (parent, args) => {
  args.password = bcrypt.hashSync(args.password, 4);
  try {
    const [id] = await db.insertUser(args);
    if (id) {
      const user = await db.getUserById(id);
      token = await sign(user);
      return { token };
    }
  } catch (err) {
    console.log(err);
  }
}