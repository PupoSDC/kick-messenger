const express = require('express');

const router = express.Router();

router.route('/login')
  .get((req, res, next) => {
    const { user } = req.query;
    req.session.user = user;
    next();
  });

module.exports = router;
