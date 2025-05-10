const mongoose = require('mongoose');

const screeningSchema = new mongoose.Schema(
  {
    movie: { type: mongoose.Types.ObjectId, ref: 'movies', required: true },
    cinema: { type: mongoose.Types.ObjectId, ref: 'cinemas', required: true },
    version: [{ type: String }],
    price: { type: String },
    link: { type: String } //link para la compra del billete en el cine especifico
  },
  {
    timestamps: true,
    collections: 'screenings'
  }
);

const Screening = mongoose.model('screenings', screeningSchema, 'screenings');

module.exports = Screening;
