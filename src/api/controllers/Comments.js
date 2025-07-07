const {
  updateMovieStarsAverage
} = require('../../utils/updateMovieStarsAverage');
const Comment = require('../models/Comments');
const Movie = require('../models/Movie');
const User = require('../models/Users');

//* GET
//todos los usuarios pueden ver los Comments, tanto logueados como no logueados. NO necesita middleware
const getComments = async (req, res, next) => {
  try {
    const allComments = await Comment.find().populate('user').populate('movie');
    return res.status(200).json(allComments);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición GET', error: error });
  }
};

//* GET BY MOVIE
//para obtener los comentarios de una pelicula especifica
const getCommentsByMovie = async (req, res, next) => {
  try {
    const { movie } = req.params;
    const commentsMovie = await Comment.find({ movie: movie });
    return res.status(200).json(commentsMovie);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición GET', error: error });
  }
};

//*POST
// solo los logueados pueden postar un comment. SI necesita middleware isAuth
const postComment = async (req, res, next) => {
  try {
    //en el body hay que pasarle el _id del movie y el _id del user
    const newComment = new Comment(req.body);
    const CommentSaved = await newComment.save();

    //actualizar Movie pasandole el comment creado
    if (req.body.movie) {
      const existedMovie = await Movie.findById(req.body.movie).populate(
        'comments'
      );

      //Actualizar Movie.stars
      if (req.body.stars) {
        const totComments = existedMovie.comments.length;
        if (totComments > 0) {
          //quiere decir que si hay stars. Entonces hacemos la media
          //sumo las estrellas
          const averageStars = updateMovieStarsAverage({
            movie: existedMovie,
            bodyStars: req.body.stars
          });
          //actualizo Movie.stars:
          existedMovie.stars = averageStars;
        } else {
          //si no hay comments previos, le paso las estrellas del nuevo comment
          existedMovie.stars = req.body.stars;
        }
      }
      //añado el nuevo comment al movie
      existedMovie.comments.push(CommentSaved._id); //le añado el nuevo comentario al campo "comments"
      await existedMovie.save(); //guardo el movie con estos cambios
    } else {
      return res.status(404).json({ message: 'Película no encontrada' });
    }

    //actualizar user pasandole el comment creado
    //chequeo que el id del user pasado desde el frontend sea el mismo del que está haciendo la petición
    if (req.body.user === req.user._id.toString()) {
      //le añado el nuevo comentario al campo "comments" del user
      const userUpdate = await User.findByIdAndUpdate(
        req.user._id,
        { $push: { comments: CommentSaved._id } },
        { new: true }
      );
      return res.status(201).json({ comment: CommentSaved, user: userUpdate });
    } else {
      return res.status(400).json({
        message: 'Se ha producido un error. Por favor, logueate de nuevo.',
        error: error
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición POST', error: error });
  }
};

//* DELETE COMMENT
// solo los logueados pueden eliminar sus proprios comments. Si eres admin puedes eliminar cualquier comment. SI necesita middleware
const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params; //recogemos el id del comment que quiero eliminar
    const comment = await Comment.findById(id); //busco el comment

    //me aseguro que el user sea o admin o es el logueado
    if (
      req.user.role === 'admin' ||
      req.user.id === comment.user._id.toString()
    ) {
      //actualizo media estrellas del movie
      const movie = await Movie.findById(comment.movie._id).populate(
        'comments'
      );
      //1.quito el comment eliminado de movie.comments
      movie.comments = movie.comments.filter(
        (commentList) => commentList._id.toString() !== comment._id.toString()
      );

      //2.hago de nuevo la media
      if (movie.comments.length > 0) {
        //quiere decir que habia mas de un comentario. Entonces hago la media otra vez
        const averageStars = updateMovieStarsAverage({
          movie: movie,
          type: 'DELETE'
        });
        movie.stars = averageStars;
      } else {
        //nos hemos quedado sin comentarios. Estrellas = 0
        movie.stars = 0;
      }

      await movie.save(); //guardo el movie con estos cambios

      //actualizo user.comments
      const user = await User.findByIdAndUpdate(
        req.user.id,
        {
          $pull: { comments: id }
        },
        { new: true }
      );

      //elimino el comment
      const deletedComment = await Comment.findByIdAndDelete(id);

      return res.status(200).json({
        message: 'Comment eliminado correctamente',
        comment: deletedComment
      });
    } else {
      return res.status(400).json({ message: 'No estás autorizado.' });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición DELETE', error: error });
  }
};

module.exports = {
  getComments,
  getCommentsByMovie,
  postComment,
  deleteComment
};
