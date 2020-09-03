const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.get('/reviews', reviewsCtrl.index); 
router.get('/books/:id/reviews/new', reviewsCtrl.new);
router.post('/books/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;