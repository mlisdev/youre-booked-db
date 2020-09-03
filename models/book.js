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
    ownVoices: { 
        type: Boolean, 
        default: false }, 
    reRead: { 
        type: Boolean, 
        default: false }, 
    bipoc: { 
        type: String, 
        enum: [ 'Neither', 'Author', 'Protagonist', 'AuthorProtagonist' ] }, 
    queer: { 
        type: String, 
        enum: [ 'Neither', 'Author', 'Protagonist', 'AuthorProtagonist']
    },
    gender: { 
        type: String, 
        enum: [ 'Female', 'Male', 'Non-binary', 'Other' ]}, 
    reason: { 
        type: String, 
        enum: [ 'Fun', 'Work', 'School', 'BookClub', 'PersonalDevelopment']
    }, 
    medium: { 
        type: String, 
        enum: [ 'Print', 'Digital', 'Audiobook' ]
    }, 
    user: { type: Schema.Types.ObjectId, ref: 'Reader' }, 
    review: { type: Schema.Types.ObjectId, ref: 'Review' }
});



module.exports = mongoose.model('Book', bookSchema);