const mongoose = require('mongoose');

const arrayScreenings = [
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf45'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9568'),
    version: ['VE'],
    price: '9,50',
    link: 'https://www.moobycinemas.com/mufasa-el-rey-leon'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf45'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9572'),
    version: ['VOSE'],
    price: '9,50',
    link: 'https://www.moobycinemas.com/mufasa-el-rey-leon'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf45'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba956f'),
    version: ['VE'],
    price: '9,50',
    link: 'https://www.moobycinemas.com/mufasa-el-rey-leon'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf45'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9576'),
    version: ['VE'],
    price: '11,50',
    link: 'https://www.cinesa.es/peliculas/mufasa-el-rey-leon/HO00001633/'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf45'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9575'),
    version: ['VE'],
    price: '9,50',
    link: 'https://www.moobycinemas.com/mufasa-el-rey-leon'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf45'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9574'),
    version: ['VE', '4DX', '3D'],
    price: '17,40',
    link: 'https://www.cinesfilmax.com/mufasa-el-rey-leon'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf45'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9579'),
    version: ['VE', 'VOSE'],
    price: '9,50',
    link: 'https://kinepolis.es/movies/detail/32900/HO00005129/0/mufasa-el-rey-leon'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf46'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9572'),
    version: ['VOSE'],
    price: '9,50',
    link: 'https://www.moobycinemas.com/nosferatu'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf46'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9579'),
    version: ['VE', 'VOSE', 'DOLBY', 'ATMOS'],
    price: '9,50',
    link: 'https://kinepolis.es/movies/detail/33198/HO00005131/0/nosferatu'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf48'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9578'),
    version: ['VE'],
    price: '11,50',
    link: 'https://www.cinesa.es/peliculas/sonic-3-la-pelicula/HO00001765/'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf48'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9579'),
    version: ['VE', 'VOSE', 'DOLBY', 'ATMOS'],
    price: '9,50',
    link: 'https://kinepolis.es/movies/detail/33183/HO00005130/0/sonic-3-la-pelicula'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf47'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9570'),
    version: ['VOSE'],
    price: '8,00',
    link: 'https://barcelona.cines-verdi.com/parthenope-vose'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf49'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba956b'),
    version: ['VE'],
    price: '9,50',
    link: 'https://www.moobycinemas.com/conclave'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf4a'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9568'),
    version: ['VE'],
    price: '9,50',
    link: 'https://www.moobycinemas.com/wicked'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf4a'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9575'),
    version: ['VE'],
    price: '9,50',
    link: 'https://www.moobycinemas.com/wicked'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf4a'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9579'),
    version: ['VE', 'VOSE', 'DOLBY', 'ATMOS'],
    price: '9,50',
    link: 'https://kinepolis.es/movies/detail/32914/HO00005127/0/wicked'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf4b'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba9570'),
    version: ['VOSE'],
    price: '8,00',
    link: 'https://barcelona.cines-verdi.com/emilia-pe9rez'
  },
  {
    movie: new mongoose.Types.ObjectId('67c45917c2bfc8611aaadf4b'),
    cinema: new mongoose.Types.ObjectId('6794c7220a17010cc3ba956f'),
    version: ['VE'],
    price: '9,50',
    link: 'https://www.moobycinemas.com/emilia-perez'
  }
];

module.exports = arrayScreenings;
