const router = require('express').Router();
const db = require('./users.model.js');
const { restricted } = require('../../utils/auth.js');

router.get('/', restricted, async (req, res) => {
  const departments = JSON.parse(req.decodedJwt.departments);
  console.log(departments); 
  try {
    const resource = await db.getUsers();
    const payload = resource.map(user => ({
        ...user,
        departments: JSON.parse(user.departments)
    }));
    res.status(200).json(payload);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;