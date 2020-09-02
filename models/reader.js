let mongoose = require('mongoose');

let Schema = mongoose.Schema; 

var readerSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Reader', readerSchema);