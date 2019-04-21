const { getUsers } = require('./users.model.js');

module.exports = async (parent, args, context) => {
  console.log(context)
  try {
    const resource = await getUsers();
    return resource;
  } catch (err) {
    return err;
  }
}


// const restricted = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     req.decodedJwt = await jwt.verify(token);
//     next();
//   } catch (err) {
//     res.status(401).json(err);
//   }
// }

// module.exports = {
//   restricted,
// }