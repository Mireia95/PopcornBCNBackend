//funcion para actualizar la media de estrellas del movie. Las estrellas vienen de los comentarios

const updateMovieStarsAverage = ({ movie, bodyStars, type = 'POST' }) => {
  let totStars = 0;
  console.log(movie.comments);
  //filtro los comments con stars
  movie.comments.forEach((comment) => {
    totStars = totStars + comment.stars;
  });

  console.log(`totStars en updateMovie es: ${totStars}`);

  if (type === 'POST') {
    //estamso posteando un comment
    //sumo tambien las estrellas del nuevo comment
    const newStar = Number(bodyStars);
    totStars = totStars + newStar;

    //hago la media, y redondeo el resultado
    //el +1 porque aun no hemos añadido el new comment a nuestro movie

    const averageStars = Math.round(totStars / (movie.comments.length + 1));
    return averageStars;
  }

  if (type === 'DELETE') {
    //estamos eliminando un comment, entonces NO añadimos boydStars
    //hago la media, y redondeo el resultado
    const averageStars = Math.round(totStars / movie.comments.length);
    return averageStars;
  }
};

module.exports = { updateMovieStarsAverage };
