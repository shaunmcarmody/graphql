const router = require('express').Router();
const bcrypt = require('bcryptjs');
const db = require('./auth.model.js');
const jwt = require('../../utils/jwt.js');

// Post to register
router.post('/register', async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 4);
  try {
    const result = await db.insertUser(req.body);
    if (result) {
      const id = await db.getUserId(req.body.username); // { id: n }
      const token = await jwt.sign(id) // object literal, buffer or string representing valid JSON is required.
      res.status(201).json(token);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// Post to login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.getUser(username)
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = await jwt.sign({ id: user.id })
      res.status(201).json(token);
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;