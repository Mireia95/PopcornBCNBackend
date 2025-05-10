const cloudinary = require('cloudinary').v2;

const connectCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      api_key: process.env.CLOUDINARY_API_KEY
    });
    console.log('Conectados a Cloudinary con éxito!');
  } catch (error) {
    console.log('Error en la conexión con Cloudinary');
  }
};

module.exports = { connectCloudinary };
