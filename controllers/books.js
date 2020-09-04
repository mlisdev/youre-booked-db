const Book = require('../models/book'); 
const Review = require('../models/review'); 
const moment = require('moment'); 


module.exports = { 
    index,  
    new: newBook, 
    create, 
    show, 
    edit, 
    update, 
    delete: deleteEntry
};

// chris o helped me with this 
function index(req, res) {
    console.log(req.query)
    Book.find({'user':req.user._id}, function (err, books) {
        Review.find({}, function (err, reviews) {
        res.render('books/index', { books, reviews, moment, title: 'your books' });
        })
    }).sort('-endDate');
}; 

function newBook(req, res) {
    let newBook = new Book(); 
    res.render('books/new', { newBook, title: 'Add a Book' });
}; 

function create(req, res) {
    const book = new Book(req.body);
    book.user = req.user._id;
    book.save(function (err) {
        if (err){ 
            console.log(err)
            return res.render('books/new')
        } 
    res.redirect(`books/${book._id}`);
  });
}; 

function show(req, res) {
    Book.findById(req.params.id, function (err, book) {
        console.log(book)
        if (book.user.equals(req.user._id)) return res.redirect('/books');
        book.user.push(req.user._id);
        book.save(function (err) {
            res.redirect(`/books/${book._id}`);
        });
    });
}; 

function edit(req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err) {
            console.log(err)
        }
        else if (!book.user.equals(req.user._id)) return res.redirect('/books');
        // let startDt = book._id.startDate; 
        // let endDt = book._id.endDate; 
        res.render('books/edit', { book, moment });
    });
}; 

function update(req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            console.log(err)
        }
        else console.log(book); 
        res.redirect('/books')
})}; 

function deleteEntry(req, res){ 
    Book.findByIdAndDelete(req.params.id, function(err, book){ 
        if (err) { 
    console.log(err) }; 
    res.redirect('/books');
}    )}; 