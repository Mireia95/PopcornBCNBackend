const { deleteImgCloudinary } = require('../../utils/File/deleteFile');
const { removeDuplicated } = require('../../utils/removeDuplicate');
const Comment = require('../models/Comments');
const Movie = require('../models/Movie');
const User = require('../models/Users');

//* GET
//todos los usuarios pueden ver los Movies, tanto logueados como no logueados. NO necesita middleware
const getMovies = async (req, res, next) => {
  try {
    const allMovies = await Movie.find().populate({
      path: 'comments',
      populate: {
        path: 'user',
        model: 'users'
      }
    });

    return res.status(200).json(allMovies);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición GET', error: error });
  }
};

//*GET BY ID
//todos los usuarios pueden ver los Movies, tanto logueados como no logueados. NO necesita middleware
const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id).populate({
      path: 'comments',
      populate: {
        path: 'user',
        model: 'users'
      }
    });
    return res.status(200).json(movie);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición GETBYID', error: error });
  }
};

//*POST
// solo los ADMIN pueden postar un cine. SI necesita middleware
const postMovie = async (req, res, next) => {
  try {
    if (req.user.role === 'admin') {
      const newMovie = new Movie(req.body);
      if (req.files) {
        newMovie.image = req.files.image?.[0]?.path || '';
        newMovie.posterBG = req.files.posterBG?.[0]?.path || '';
      }
      const MovieSaved = await newMovie.save();

      return res
        .status(201)
        .json({ message: 'Movie creado correctamente!', movie: MovieSaved });
    } else {
      return res.status(400).json({
        message: 'Acceso denegado. No tienes permisos',
        error: 'permission error'
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición POST', error: error });
  }
};

//* PUT
// solo los ADMIN pueden modificar cines. SI necesita middleware
const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (req.user.role !== 'admin') {
      return res
        .status(400)
        .json({
          message: 'Acceso denegado. No tienes permisos',
          error: 'permission error'
        });
    }

    const existedMovie = await Movie.findById(id); //busco el movie
    if (!existedMovie) {
      return res
        .status(400)
        .json({ message: 'Película no encontrada', error: 'error' });
    }

    //check si hay nuevos comentarios
    const comments = req.body.comments || '';

    //creo objeto con todos los campos pasados en req.body, y preservo los datos antiguos de los campos de tipo array
    const newMovie = {
      ...req.body,
      comments: [...existedMovie.comments, ...comments]
    };

    newMovie._id = id;

    //chequeo duplicados en los campos de tipo array
    const genresFinal = removeDuplicated(newMovie.genre);
    newMovie.genre = genresFinal;

    const commentsFinal = removeDuplicated(newMovie.comments);
    newMovie.comments = commentsFinal;

    if (req.files) {
      if (req.files.image?.[0]?.path) {
        if (existedMovie.image) {
          deleteImgCloudinary(existedMovie.image);
        }
        newMovie.image = req.files.image[0].path;
      }

      if (req.files.posterBG?.[0]?.path) {
        if (existedMovie.posterBG) {
          deleteImgCloudinary(existedMovie.posterBG);
        }
        newMovie.posterBG = req.files.posterBG[0].path;
      }
    }

    const updateMovie = await Movie.findByIdAndUpdate(id, newMovie, {
      new: true
    });

    return res.status(200).json({
      message: 'Movie actualizado correctamente!',
      movie: updateMovie
    });
  } catch (error) {
    return res.status(400).json({ message: 'Error en la petición PUT', error });
  }
};

//*DELETE
// solo los ADMIN pueden eliminar movies. SI necesita middleware
const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.user.role === 'admin') {
      const deletedMovie = await Movie.findByIdAndDelete(id);
      if (deleteMovie.image) {
        deleteImgCloudinary(deletedMovie.image); //elimino imagen de Cloudinary
      }

      if (deleteMovie.posterBG) {
        deleteImgCloudinary(deletedMovie.posterBG); //elimino imagen de Cloudinary
      }

      //eliminar movie de la lista de favoritos de user
      const user = await User.findByIdAndUpdate(
        req.user.id,
        {
          $pull: { myList: id }
        },
        { new: true }
      );

      //elimino los comments tambien
      const comments = await Comment.find({ movie: id });
      if (comments.length > 0) {
        //console.log(comments);
        await Comment.deleteMany({ movie: id });
        console.log('eliminados comentarios');
      }

      return res.status(200).json({
        message: 'Movie eliminado correctamente',
        deletedMovie: deletedMovie
      });
    } else {
      return res
        .status(400)
        .json({
          message: 'Permiso denegado. No puedes eliminar el elemento.',
          error: 'permission error'
        });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición DELETE', error: error });
  }
};

//CONTROL PARA OBTENER LA LISTA DE GENEROS EN EL FRONTEND, EN LA PARTE DE <select> para filtrar las peliculas según el GENERO
const getGenres = async (req, res) => {
  try {
    const genres = await Movie.schema.path('genre').caster.enumValues;
    res.status(200).json(genres);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'No se ha podido obtener los géneros.', error: error });
  }
};

//CONTROL PARA OBTENER LA LISTA DE ESTADOS EN EL FRONTEND, EN LA PARTE DE <select> para filtrar las peliculas según el ESTADO
const getStates = async (req, res) => {
  try {
    const states = await Movie.schema.path('state').caster.enumValues;
    res.status(200).json(states);
  } catch (error) {
    res
      .status(400)
      .json({ message: 'No se ha podido obtener los estados.', error: error });
  }
};

module.exports = {
  getMovies,
  getMovieById,
  postMovie,
  updateMovie,
  deleteMovie,
  getGenres,
  getStates
};
