const router = require('express').Router();
const db = require('./users.model.js');
const { restricted } = require('../../utils/auth.js');

router.get('/', restricted, async (req, res) => {
  try {
    const resource = await db.getUsersByDepartment(req.decodedJwt.department);
    res.status(200).json(resource);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;