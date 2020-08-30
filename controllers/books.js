const Book = require('../models/book'); 

module.exports = { 
    index
}; 

function index(req, res) {
        res.render('books/index', { title: 'your books' });
    ;
}; 