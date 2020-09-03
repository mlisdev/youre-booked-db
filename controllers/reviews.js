const Movie = require('../models/review');

module.exports = {
    create
};

function create(req, res) {
    Review.findById(req.params.id, function (err, movie) {
        book.reviews.push(req.body);
        book.save(function (err) {
            res.redirect(`/books/${book._id}`);
        });
    })}; 