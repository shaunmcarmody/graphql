const { getUsers } = require('./users.model.js');

module.exports = async (parent, args, context) => {
  try {
    console.log('context user resolvers', context);
    const resource = await getUsers();
    return resource;
  } catch (err) {
    return err;
  }
}