const Cinema = require('../models/Cinema');

//*GET
//todos los usuarios pueden ver los cinemas, tanto logueados como no logueados. NO necesita middleware
const getCinemas = async (req, res, next) => {
  try {
    const allCinemas = await Cinema.find();
    return res.status(200).json(allCinemas);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición GET', error: error });
  }
};

//*GET BY ID
//todos los usuarios pueden ver los cinemas, tanto logueados como no logueados. NO necesita middleware
const getCinemaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cinema = await Cinema.findById(id);
    return res.status(200).json(cinema);
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición  GETBYID', error: error });
  }
};

//*POST
//solo los ADMIN pueden postar un cine. SI necesita middleware
const postCinema = async (req, res, next) => {
  try {
    console.log('creando nuevo cine...');
    const newCinema = new Cinema(req.body);
    if (req.user.role === 'admin') {
      const cinemaSaved = await newCinema.save();
      return res.status(201).json({ cinema: cinemaSaved });
    } else {
      return res
        .status(400)
        .json({ message: 'No estás autorizado.', error: error });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición POST', error: error });
  }
};

//*PUT
// solo los ADMIN pueden modificar cines. SI necesita middleware
const updateCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCinema = new Cinema(req.body);
    newCinema._id = id;
    if (req.user.role === 'admin') {
      const updateCinema = await Cinema.findByIdAndUpdate(id, newCinema, {
        new: true
      });

      return res.status(200).json({ cinema: updateCinema });
    } else {
      return res.status(400).json({ message: 'No estás autorizado' });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Error en la petición PUT', error: error });
  }
};

//* DELETE
// solo los ADMIN pueden eliminar cines. SI necesita middleware
const deleteCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.user.role === 'admin') {
      const deletedCinema = await Cinema.findByIdAndDelete(id);
      return res.status(200).json({
        message: 'Cinema eliminado correctamente',
        deletedCinema: deletedCinema
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
  getCinemas,
  getCinemaById,
  postCinema,
  updateCinema,
  deleteCinema
};
