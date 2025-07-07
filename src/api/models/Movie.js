const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    director: { type: String, required: true },
    image: {
      type: String,
      trim: true
    },
    description: { type: String, required: true },
    genre: [
      {
        type: String,
        enum: [
          'Acción',
          'Animación',
          'Aventura',
          'Biografía',
          'Catástrofe',
          'Ciencia Ficción',
          'Comedia',
          'Crimen',
          'Documental',
          'Drama',
          'Fantasía',
          'Misterio',
          'Musical',
          'Romantica',
          'Thriller',
          'Terror',
          'Fantasy'
        ]
      }
    ],
    duration: { type: Number },
    releaseDate: { type: Date },
    year: { type: Number },
    country: { type: String },
    originalLang: { type: String },
    state: [
      {
        type: String,
        required: true,
        enum: ['Disponible', 'No disponible', 'Próximamente'],
        default: 'Disponible'
      }
    ],
    trailer: { type: String },
    posterBG: {
      type: String,
      trim: true
    },
    comments: [{ type: mongoose.Types.ObjectId, ref: 'comments' }],
    stars: { type: Number, default: 0 }
  },
  {
    timestamps: true,
    collections: 'movies'
  }
);

const Movie = mongoose.model('movies', movieSchema, 'movies');

module.exports = Movie;
