const express = require('express');

const router = express.Router();

router.route('/user')
  .get((req,res) => {
  	const { user } = req.session;
  	return res.status(200).json(user);
  })

router.route('/login')
  .get((req, res, next) => {
    const { user } = req.query;
    req.session.user = user;
    next();
  });

module.exports = router;
