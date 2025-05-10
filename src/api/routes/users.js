const { upload } = require('../../middlewares/file');
const { isAuth, isAdmin } = require('../../middlewares/isAuth');
const {
  getUserById,
  getUsers,
  registerUser,
  loginUser,
  updateUser,
  deleteUser
} = require('../controllers/User');

const usersRouter = require('express').Router();

usersRouter.get('/:id', isAuth, getUserById);
usersRouter.get('/', isAdmin, getUsers);
usersRouter.post('/register', registerUser);
usersRouter.post('/login', loginUser);
usersRouter.put('/:id', isAuth, upload.single('image'), updateUser);

usersRouter.delete('/:id', isAuth, deleteUser);

module.exports = usersRouter;
