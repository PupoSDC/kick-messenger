const express = require('express');

const router = express.Router();

router.route('/login')
  .get((req, res) => {
    const { user } = req.body;
    req.session.user = user;
    res.status(200).json(user);
  });

module.exports = router;
