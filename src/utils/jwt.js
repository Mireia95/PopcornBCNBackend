const jwt = require('jsonwebtoken');

//genero el token pasandole el id y el email como parametros
const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '1y' });
};

//funcion para verificar si es token es válido
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };
