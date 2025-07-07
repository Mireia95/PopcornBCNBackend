const { upload } = require('../../middlewares/file');
const { isAdmin } = require('../../middlewares/isAuth');
const {
  getMovieById,
  getMovies,
  postMovie,
  updateMovie,
  deleteMovie,
  getGenres,
  getStates
} = require('../controllers/Movie');

const moviesRouter = require('express').Router();
moviesRouter.get('/states', getStates); //para obtener la lista de estados y pintarlos en el frontend
moviesRouter.get('/genres', getGenres); //para obtener la lista de generos y pintarlos en el frontend
moviesRouter.get('/:id', getMovieById);

moviesRouter.get('/', getMovies);
moviesRouter.post(
  '/',
  isAdmin,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'posterBG', maxCount: 1 }
  ]),
  postMovie
);
moviesRouter.put(
  '/:id',
  isAdmin,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'posterBG', maxCount: 1 }
  ]),
  updateMovie
);
moviesRouter.delete('/:id', isAdmin, deleteMovie);

module.exports = moviesRouter;
