const { isAuth } = require('../../middlewares/isAuth');
const {
  getComments,
  postComment,
  deleteComment,
  getCommentsByMovie
} = require('../controllers/Comments');

const commentsRouter = require('express').Router();

commentsRouter.get('/', getComments);
commentsRouter.get('/:movie', getCommentsByMovie);
commentsRouter.post('/', isAuth, postComment);
commentsRouter.delete('/:id', isAuth, deleteComment);

module.exports = commentsRouter;
