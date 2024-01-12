const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    userRating: {
        type: Number,
        required: false,
    },
    userId: {
        type: String,
        required: true,
        ref: 'User'
    },
    playlistId: {
        type: String,
        required: true,
        ref: 'Playlist'
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
},
{
    toJSON: {
      virtuals: true,
      timestamp: true,
    },
    id: false,
  }
);

module.exports = mongoose.model("Book", BookSchema)