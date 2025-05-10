const { removeDuplicated } = require('./removeDuplicate');

const updateUserMyList = ({ user, movieId }) => {
  //recupero la lista de movies y la paso a string (ahora son ObjectId)
  const list = user.myList.map((id) => id.toString());
  //chequeo que no haya duplicados en el array, devuelvo el array sin duplicados
  const listNoDuplicate = removeDuplicated(list);
  //chequeo si el movie ya esta en mi List
  const movieInList = listNoDuplicate.find((id) => id === movieId);

  let updatedMyList = [];

  if (movieInList) {
    //si ya esta, lo quito
    updatedMyList = listNoDuplicate.filter((movie) => movie !== movieId);
  } else {
    //si no está lo añado
    updatedMyList = [...listNoDuplicate, movieId];
  }
  return updatedMyList;
};

module.exports = { updateUserMyList };
