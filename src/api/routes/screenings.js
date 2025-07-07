const { isAdmin } = require('../../middlewares/isAuth');
const {
  getScreeningById,
  getScreenings,
  postScreening,
  updateScreening,
  deleteScreening,
  getScreeningByMovie
} = require('../controllers/Screening');

const screeningsRouter = require('express').Router();

screeningsRouter.get('/:id', getScreeningById);
screeningsRouter.get('/movie/:id', getScreeningByMovie);
screeningsRouter.get('/', getScreenings);
screeningsRouter.post('/', isAdmin, postScreening);
screeningsRouter.put('/:id', isAdmin, updateScreening);
screeningsRouter.delete('/:id', isAdmin, deleteScreening);

module.exports = screeningsRouter;
