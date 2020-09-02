const Reader = require('../models/reader');

module.exports = {
    index
};

function index(req, res, next) {
    console.log(req.query)
    let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
    let sortKey = req.query.sort || 'name';
    Reader.find(modelQuery)
        .sort(sortKey).exec(function (err, readers) {
            if (err) return next(err);
            res.render('books/index', { readers, name: req.query.name, sortKey });
        });
}