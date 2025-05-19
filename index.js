require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { connectDB } = require('./src/config/db');
const mainRouter = require('./src/api/routes/main');
const { connectCloudinary } = require('./src/config/cloudinary');

const app = express();

connectDB(); //nos conetamos a la BBDD
connectCloudinary(); //nos conectamos a cloudinary para las imagenes
app.use(cors()); //para hacer pruebas entre front y back
app.use(express.json()); //para procesar datos en formato json

app.use('/api/v1', mainRouter);

//ruta general de error
app.use('*', (req, res, next) => {
  const error = new Error('route not found');
  error.status = 404;
  next(error);
});

//levanto servidor
app.listen(3000, () => {
  console.log('Servidor levantado en http//localhost:3000');
});

//si despliego en Vercel:
//module.exports = app;
