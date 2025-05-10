const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

//middleware para subir ficheros
const storage = new CloudinaryStorage({
  cloudinary,

  params: async (req) => {
    const model = req.baseUrl.split('/')[3]; //le paso en que modelo estamos
    return {
      folder: `PopcornBCN/${model}`,
      allowedFormats: ['jpg', 'png', 'jpeg', 'webp']
    };
  }
});

const upload = multer({ storage });

module.exports = { upload };
