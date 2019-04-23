const { getUsers } = require('./users.model.js');
const { verify } = require('../../utils/jwt.js');

module.exports = async (parent, args, { token }) => {
  try {
    await verify(token);
    const resource = await getUsers();
    return resource;
  } catch (err) {
    return err;
  }
}