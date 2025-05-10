const { isAdmin } = require('../../middlewares/isAuth');
const {
  getCinemas,
  getCinemaById,
  postCinema,
  updateCinema,
  deleteCinema
} = require('../controllers/Cinema');

const cinemasRouter = require('express').Router();

cinemasRouter.get('/:id', getCinemaById);
cinemasRouter.get('/', getCinemas);

cinemasRouter.post('/', isAdmin, postCinema);
cinemasRouter.put('/:id', isAdmin, updateCinema);
cinemasRouter.delete('/:id', isAdmin, deleteCinema);

module.exports = cinemasRouter;
