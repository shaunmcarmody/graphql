const jwt = require('./jwt.js');

const restricted = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    req.decodedJwt = await jwt.verify(token);
    next();
  } catch (err) {
    res.status(401).json(err);
  }
}

module.exports = {
  restricted,
}