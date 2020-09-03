let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let reviewSchema = new mongoose.Schema({
    review: String,
    rating: { type: Number, min: 1, max: 5, default: 5 }, 
    book: { type: Schema.Types.ObjectId, ref: 'Book' }, 
    date: { type: Date, default: Date.now }
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);