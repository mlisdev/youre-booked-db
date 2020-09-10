var express = require('express');
var router = express.Router();
let readersCtrl = require('../controllers/readers'); 

router.get('/books', isLoggedIn, readersCtrl.index);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;
