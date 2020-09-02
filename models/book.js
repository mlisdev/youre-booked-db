let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let authorSchema = new Schema({
    authorName: {
        type: String,
        required: true
    },
    bipoc: Boolean,
    queer: Boolean,
    gender: String
}) 

let bookSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    pages: Number, 
    startDate: Date, 
    endDate: Date, 
    ficType: { 
        type: String, 
        enum: [ 'Fiction', 'Non-fiction']
    }, 
    format: { 
        type: String, 
        enum: [ 'Prose', 'Poetry', 'Novella', 'GraphicNovel', 'EssayCollection', 'ShortStory', 'Play']
    }, 
    genre: { 
        type: String, 
        enum: [ 'Business/SelfHelp', 'CurrentEvents/Politics', 'Nature/Science', 'Travel/Food', 'Memoir/Biography', 'GeneralFiction', 'Classics', 'Horror', 'Mystery/Crime', 'Historical', 'Romance', 'Fantasy', 'Sci-Fi']
    }, 
    source: { 
        type: String, 
        enum: [ 'OwnTBR', 'Purchased2020', 'Library', 'ReviewCopy', 'Gift', 'Borrowed' ]
    }, 
    ownVoices: Boolean, 
    reRead: Boolean, 
    reason: { 
        type: String, 
        enum: [ 'Fun', 'Work', 'School', 'BookClub', 'PersonalDevelopment']
    }, 
    medium: { 
        type: String, 
        enum: [ 'Print', 'Digital', 'Audiobook' ]
    }, 
    user: { type: Schema.Types.ObjectId, ref: 'Reader' }, 
    author: [ authorSchema ]
});



module.exports = mongoose.model('Book', bookSchema);