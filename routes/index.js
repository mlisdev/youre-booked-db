var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function (req, res) {
  res.render('index', { title: 'Booked!'});
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/books',
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
