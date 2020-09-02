let express = require('express');
let router = express.Router();
let authorsCtrl = require('../controllers/authors');

router.post('/books/:id/authors', authorsCtrl.create);



module.exports = router;