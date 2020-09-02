const Book = require('../models/book'); 
const book = require('../models/book');
const { replaceOne } = require('../models/book');

module.exports = { 
    index,  
    new: newBook, 
    create, 
    show
}; 

function index(req, res) {
    console.log(req.query)
    Book.find({'user':req.user._id}, function (err, books) {
        res.render('books', { title: 'your books', books });
    });
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
}