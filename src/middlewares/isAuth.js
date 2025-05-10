const User = require('../api/models/Users');
const { verifyToken } = require('../utils/jwt');

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(400).json({ message: 'Autorización denegada' });
    }

    const verify = verifyToken(token);
    const user = await User.findById(verify.id);

    //paso el user en la req, pero antes escondo su password
    user.password = null;
    req.user = user;

    next();
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Autorización denegada', error: error });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(400).json({ message: 'Autorización denegada.' });
    }

    const { id } = verifyToken(token);
    const user = await User.findById(id);

    if (user.role === 'admin') {
      user.password = null;
      req.user = user;
      next();
    } else {
      return res.status(400).json({ message: 'Autorización denegada.' });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Autorización denegada', error: error });
  }
};

module.exports = { isAuth, isAdmin };
