var express = require('express');
var router = express.Router();
let readersCtrl = require('../controllers/readers'); 

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
