const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    link: { type: String, required: true },
    specialDay: { type: String }
  },
  {
    timestamps: true,
    collections: 'movies'
  }
);

const Cinema = mongoose.model('cinemas', cinemaSchema, 'cinemas');

module.exports = Cinema;
