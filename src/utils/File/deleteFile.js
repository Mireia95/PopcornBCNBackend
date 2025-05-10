const cloudinary = require('cloudinary');

//funcion para eliminar las imagenes de Cloudinary al eliminar el dato en la BBDD
const deleteImgCloudinary = (imgUrl) => {
  //accedo a la ruta de donde está guardada la imagen
  const imgSplitted = imgUrl.split('/'); //divido la URL por /
  const imgFolderName = imgSplitted.at(-3); //busco la posición -3 para obtener el nombre de la carpeta de Cloudinary (PopcornBCN)
  const imgSubFolder = imgSplitted.at(-2); //busco la posición -2 para obtener el nombre de la subcarpeta (user, o movie))
  const imgName = imgSplitted.at(-1).split('.')[0]; //busco el nombre de la imagen, quitando la extension .jpeg

  const public_id = `${imgFolderName}/${imgSubFolder}/${imgName}`;
  console.log(public_id);

  //eliminamos la imagen de cloudinary
  cloudinary.uploader.destroy(public_id, () => {
    console.log('Imagen eliminada de Cloudinary');
  });
};

module.exports = { deleteImgCloudinary };
