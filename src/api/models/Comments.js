const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
    movie: { type: mongoose.Types.ObjectId, ref: 'movies', required: true },
    cinema: { type: String },
    version: { type: String },
    text: { type: String },
    stars: { type: Number, min: 1, max: 5 },
    date: { type: Date, default: Date.now }
  },
  {
    timestamps: true,
    collections: 'movies'
  }
);

const Comment = mongoose.model('comments', commentSchema, 'comments');

module.exports = Comment;
