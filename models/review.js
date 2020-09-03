let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let reviewSchema = new mongoose.Schema({
    content: String,
    rating: { type: Number, min: 1, max: 5, default: 5 }
}, {
    timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);