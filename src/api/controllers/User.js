const { deleteImgCloudinary } = require('../../utils/File/deleteFile');
const { generateToken } = require('../../utils/jwt');

const User = require('../models/Users');
const bcrypt = require('bcrypt');

const { updateUserMyList } = require('../../utils/updateUserMyList');

//*REGISTER
const registerUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    user.role = 'user';

    const existUserMail = await User.findOne({ email: user.email });
    const existUsername = await User.findOne({ username: user.username });

    if (existUserMail) {
      //user ya existente
      return res
        .status(400)
        .json(
          'Email ya registrado. Por favor, crear otro usuario o hacer el login'
        );
    }

    //si username ya existe, poner otro
    if (existUsername) {
      return res
        .status(400)
        .json('Username ya registrado. Por favor, usar otro');
    }

    const userSave = await user.save();
    return res.status(201).json(userSave);
  } catch (error) {
    return res.status(400).json(`Error en la registración. ${error}`);
  }
};

//*LOGIN
const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username }).populate([
      {
        path: 'comments',
        populate: [
          {
            path: 'user',
            model: 'users'
          },
          {
            path: 'movie',
            model: 'movies'
          }
        ]
      },
      { path: 'myList' }
    ]);

    if (!user) {
      return res.status(400).json('Usuario o contraseña incorrectos');
    }

    //check password
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user._id, user.email);
      return res.status(200).json({ token, user });
    } else {
      return res.status(400).json('Usuario o contraseña incorrectos');
    }
  } catch (error) {
    return res.status(400).json({ message: 'Error en el login', error: error });
  }
};

//*GET
//solo los ADMIN pueden obtener los users. SI necesita middleware isAdmin
const getUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find().populate('myList').populate('comments');
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json({ message: 'Error en la petición GET' });
  }
};

//*GET BY ID
//los ADMIN pueden obtener los datos de todos los users. Los logueados solo los datos de si mismo- SI necesita middleware isAuth
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params; //id pasado en la url
    const idUser = req.user.id; //id del user que hace la petición

    //si no es admin chequeo que el id de la url es el mismo que el del user, para que busque info solo de si mismo
    if (req.user.role !== 'admin') {
      if (idUser !== id) {
        return res.status(400).json({
          message:
            'No estás autorizado. Puedes obtener datos solo de tu usuario.'
        });
      }
    }

    const user = await User.findById(id).populate([
      {
        path: 'comments',
        populate: [
          {
            path: 'user',
            model: 'users'
          },
          {
            path: 'movie',
            model: 'movies'
          }
        ]
      },
      { path: 'myList' }
    ]);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: 'Error en la petición GETBYID' });
  }
};

//* PUT
//los logueados pueden modificarse solo a si mismo + los ADMIN pueden modificar cualquier usuario. SI necesita middleware isAuth
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idUser = req.user.id; //id del user que hace la petición

    if (req.user.role !== 'admin' && idUser !== id) {
      return res.status(400).json({
        message: 'No estás autorizado. Puedes modificar solo tu propio usuario.'
      });
    }

    const existedUser = await User.findById(id); //busco el user
    console.log(`existedUser: `, existedUser);

    //preservar myList: añadir o quitar movies de la lista myList
    let updatedMyList = [];

    if (req.body.myList) {
      updatedMyList = updateUserMyList({
        user: existedUser,
        movieId: req.body.myList[0]
      });
    }

    //chequeo si se ha cambiado la contraseña. Si si, la hasheo de nuevo:
    if (req.body.password) {
      if (req.user.role === 'admin' && idUser !== id) {
        //la estoy cambiando para otro usuario. Entonces la hasheo de nuevo
        req.body.password = bcrypt.hashSync(req.body.password, 10);
      } else {
        //check si puedo enviar newPassword
        console.log(`req.body.password: ${req.body.password}`);
        console.log(`req.body.newPassword: ${req.body.newPassword}`);
        if (bcrypt.compareSync(req.body.password, existedUser.password)) {
          //hashear el password
          req.body.password = bcrypt.hashSync(req.body.newPassword, 10);
          delete req.body.newPassword;
        } else {
          console.log('Password no correcta');
          return res.status(400).json({
            message:
              'Contraseña actual incorrecta. Por favor, introduzca la contraseña correcta'
          });
        }
      }
    }

    //preservar comentarios, si hay nuevos añadirlos
    const newComment = req.body.comments || '';

    const newUser = {
      ...req.body,
      comments: [...existedUser.comments, ...newComment],
      myList: updatedMyList
    };
    console.log(`newUser: : `, newUser);
    //chequeo si se ha subido una imagen
    if (req.file) {
      newUser.image = req.file.path;
      if (existedUser.image) {
        deleteImgCloudinary(existedUser.image);
      }
    }

    //actualizo user
    const updateUser = await User.findByIdAndUpdate(id, newUser, {
      new: true
    }).populate([
      {
        path: 'comments',
        populate: [
          {
            path: 'user',
            model: 'users'
          },
          {
            path: 'movie',
            model: 'movies'
          }
        ]
      },
      { path: 'myList' }
    ]);

    return res.status(200).json({ user: updateUser });
  } catch (error) {
    return res.status(400).json({ message: 'Error en la petición PUT', error });
  }
};

//*DELETE
//los logueados pueden eliminarse solo a si mismo + los ADMIN pueden eliminar cualquier usuario. SI necesita middleware
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idUser = req.user.id; //id del user que hace la petición

    if (req.user.role !== 'admin') {
      if (idUser !== id) {
        return res.status(400).json({
          message: 'No estás autorizado. Puedes eliminarte solo a ti mismo.'
        });
      }
    }

    const deletedUser = await User.findByIdAndDelete(id);
    if (deletedUser.image) {
      deleteImgCloudinary(deletedUser.image);
    }

    return res
      .status(200)
      .json({ message: 'User eliminado correctamente', user: deletedUser });
  } catch (error) {
    return res.status(400).json({ message: 'Error en la petición DELETE' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
