let mongoose = require('mongoose');


let Schema = mongoose.Schema;

let bookSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    author: String,
    pages: Number, 
    startDate: Date, 
    endDate: Date, 
    ficType: { 
        type: String, 
        enum: [ 'Fiction', 'Non-fiction']
    }, 
    format: { 
        type: String, 
        enum: [ 'Prose', 'Poetry', 'Novella', 'Graphic Novel', 'Essay Collection', 'Short Story', 'Play']
    }, 
    genre: { 
        type: String, 
        enum: [ 'Business/SelfHelp', 'CurrentEvents/Politics', 'Nature/Science', 'Travel/Food', 'Memoir/Biography', 'General Fiction', 'Classics', 'Horror', 'Mystery/Crime', 'Historical', 'Romance', 'Fantasy', 'Sci-Fi']
    }, 
    source: { 
        type: String, 
        enum: [ 'Owned/To Be Read', 'Purchased', 'Library', 'Review Copy', 'Gift', 'Borrowed' ]
    }, 
    ownVoices: { 
        type: Boolean, 
        default: false }, 
    reRead: { 
        type: Boolean, 
        default: false }, 
    bipoc: { 
        type: String, 
        enum: [ 'Neither', 'Author', 'Protagonist', 'Author and Protagonist' ] }, 
    queer: { 
        type: String, 
        enum: [ 'Neither', 'Author', 'Protagonist', 'Author and Protagonist']
    },
    gender: { 
        type: String, 
        enum: [ 'Female', 'Male', 'Non-binary', 'Other' ]}, 
    reason: { 
        type: String, 
        enum: [ 'Fun', 'Work', 'School', 'Book Club', 'Personal Development']
    }, 
    medium: { 
        type: String, 
        enum: [ 'Print', 'Digital', 'Audiobook' ]
    }, 
    user: { type: Schema.Types.ObjectId, ref: 'Reader' }, 
});



module.exports = mongoose.model('Book', bookSchema);