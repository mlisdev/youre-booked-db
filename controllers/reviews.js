const Review = require('../models/review');

module.exports = {
    new: newReview,
    create,
    delete: deleteReview
}

function newReview(req, res) {
    res.render('reviews/new', {
        reviewID: req.params.id,
        title: 'Add Review'
    })
}

function create(req, res) {
    Book.findById(req.params.id, function (err, book) {
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        book.comments.push(req.body);
        book.save(function (err) {
            res.redirect(`/books/${book._id}`);
        });
    });
}

function deleteReview(req, res) {
    Review.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/books')
    })
}

