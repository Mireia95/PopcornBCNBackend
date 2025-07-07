const Cinema = require('../models/Cinema');
const Screening = require('../models/Screening');

//*GET
// solo los ADMIN pueden obtener la lista de screenings. SI necesita middleware
const getScreenings = async (req, res, next) => {
  try {
    const allScreenings = await Screening.find()
      .populate('movie')
      .populate('cinema');
    return res.status(200).json(allScreenings);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición GET', error: error });
  }
};

//*GET BY ID
// solo los ADMIN pueden obtener la lista de screenings. SI necesita middleware
const getScreeningById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const screening = await Screening.findById(id)
      .populate('movie')
      .populate('cinema');
    return res.status(200).json(screening);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición GETBYID', error: error });
  }
};

//*GET SCREENING BY MOVIE
//controller que permite filtrar los screenings por pelicula
const getScreeningByMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const screenings = await Screening.find({ movie: id }).populate('cinema');
    return res.status(200).json(screenings);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición GETBYID', error: error });
  }
};

//*POST
// solo los ADMIN pueden postat un screening. SI necesita middleware
const postScreening = async (req, res, next) => {
  try {
    if (req.user.role === 'admin') {
      //busco el cine que me pasa el user
      const cinema = await Cinema.findOne({ name: req.body.cinema });

      const newScreening = new Screening(req.body);
      newScreening.cinema = cinema._id;

      const ScreeningSaved = await newScreening.save();
      return res.status(201).json({ screening: ScreeningSaved });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición POST', error });
  }
};

//* PUT
// solo los ADMIN pueden modificar un screening. SI necesita middleware
const updateScreening = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.user.role === 'admin') {
      const newScreening = new Screening(req.body);
      newScreening._id = id;

      const updateScreening = await Screening.findByIdAndUpdate(
        id,
        newScreening,
        {
          new: true
        }
      );

      return res.status(200).json({ screening: updateScreening });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición PUT', error: error });
  }
};

//* DELETE
// solo los ADMIN pueden eliminar screening. SI necesita middleware
const deleteScreening = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.user.role === 'admin') {
      const deletedScreening = await Screening.findByIdAndDelete(id);
      return res.status(200).json({
        message: 'Screening eliminado correctamente',
        deletedScreening: deletedScreening
      });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición DELETE', error: error });
  }
};

module.exports = {
  getScreenings,
  getScreeningById,
  getScreeningByMovie,
  postScreening,
  updateScreening,
  deleteScreening
};
