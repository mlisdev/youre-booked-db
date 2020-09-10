var express = require('express');
var router = express.Router();
const booksCtrl = require('../controllers/books'); 


router.get('/', isLoggedIn, booksCtrl.index);
router.get('/new', isLoggedIn, booksCtrl.new);
router.get('/:id', isLoggedIn, booksCtrl.show);
router.post('/', isLoggedIn, booksCtrl.create);
router.get('/:id/edit', isLoggedIn, booksCtrl.edit); 
router.put('/:id', isLoggedIn, booksCtrl.update);
router.delete('/:id', isLoggedIn, booksCtrl.delete); 

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}


module.exports = router;