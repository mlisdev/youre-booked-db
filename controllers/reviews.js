const Book = require('../models/book'); 
const Review = require('../models/review');


module.exports = {
    new: newReview,
    create,
    delete: deleteReview
}; 


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
            res.redirect(`/books`)
        }
    })
}; 


function deleteReview(req, res) {
    Review.findByIdAndDelete(req.params.id, function (err) {
        res.redirect('/books')
    })
}

