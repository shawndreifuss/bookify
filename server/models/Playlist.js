const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        ref: 'User'
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateModified: {
        type: Date,
        required: false
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book',
    }]
},
{
    toJSON: {
      virtuals: true,
      timestamp: true,
    },
    id: false,
  }
);

module.exports = mongoose.model("Playlist", PlaylistSchema)