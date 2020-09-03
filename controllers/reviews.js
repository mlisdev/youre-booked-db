const Book = require('../models/book'); 
const Review = require('../models/review');


module.exports = {
    index, 
    new: newReview,
    create,
    show, 
    delete: deleteReview
}; 

function index(req, res) {
    Review.find({}, function (err, reviews) {
        res.render('reviews/index', { reviews, title: 'Reviews' })
    });
}

function newReview(req, res) {
    res.render('reviews/new', {
        bookID: req.params.id,
        title: 'Add Review'
    })
}

function create(req, res) {
    let reviewObj = {
        book: req.params.id,
        review: req.body.review,
        rating: req.body.rating
    }
    const newReview = new Review (reviewObj);
    newReview.save(function (err) {
        if (err) {
            console.log(err);
            res.render('reviews/new', {
                bookID: req.params.id,
                title: 'Add Review'
            })
        } else {
            res.redirect(`/reviews`)
        }
    })
}; 

function show(req, res) {
    Review.findById(req.params.id)
        .populate('book').exec(function (err, review) {
            Book.find(
                { _id: { $nin: book.review } },
                function (err, performreviewers) {
                    console.log(review);
            res.render('review/index', { title: 'reviews', review, book });
        });
})}

function deleteReview(req, res) {
    Review.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/books')
    })
}

