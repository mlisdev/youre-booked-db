const Book = require('../models/book'); 
const book = require('../models/book');
const { replaceOne } = require('../models/book');

module.exports = { 
    index,  
    new: newBook, 
    create, 
    show, 
    edit, 
    update
    
}; 

function index(req, res) {
    console.log(req.query)
    Book.find({'user':req.user._id}, function (err, books) {
        res.render('books/index', { title: 'your books', books });
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
        res.render('books/edit', { book });
    });
}; 

function update(req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.render('books/edit', { book, title: 'Edit Book'})
        }
        res.redirect(`/books`)
    })
}