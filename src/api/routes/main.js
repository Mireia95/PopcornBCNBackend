const cinemasRouter = require('./cinema');
const commentsRouter = require('./comments');
const moviesRouter = require('./movies');
const screeningsRouter = require('./screenings');
const usersRouter = require('./users');

const mainRouter = require('express').Router();

mainRouter.use('/cinemas', cinemasRouter);
mainRouter.use('/comments', commentsRouter);
mainRouter.use('/movies', moviesRouter);
mainRouter.use('/screenings', screeningsRouter);
mainRouter.use('/users', usersRouter);

module.exports = mainRouter;
