//array de objetos movies
const arrayMovies = [
  {
    name: 'Mufasa The lion King',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735563739/PopcornBCN/Movies/mufasathelionking_p4zehd.webp',
    description:
      'En las Tierras del Reino de Tanzania despues de los eventos de El rey león (2019), el mandril Rafiki le cuenta la historia del origen de dos leones, Mufasa y Taka, a Kiara, la nieta de Mufasa e hija de Simba y Nala. La historia sigue al huérfano Mufasa, que se hace amigo del joven príncipe Taka y es adoptado por la familia de Taka; el par se vuelve tan cercano como hermanos. Timón, el suricata, y Pumba, el jabalí, añaden comentarios coloridos.',
    director: 'Barry Jenkins',
    genre: ['Animación', 'Aventura', 'Drama', 'Musical'],
    duration: '117',
    year: '2024',
    country: 'Estados Unidos',
    releaseDate: new Date('2024-12-20'),
    originalLang: 'Inglés',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/Yg4cOLXxcOU?si=Wf,i743XAwiHr3JZ',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735814369/PopcornBCN/MoviesBG/MufasaBG_miaa1p.png'
  },
  {
    name: 'Nosferatu',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735561421/PopcornBCN/Movies/Nosferatu_sfieym.jpg',
    description:
      'La trama de Nosferatu se ubica en la Alemania de 1838 y sigue la historia de Thomas Hutter (Nicholas Hoult) y su mujer Ellen (Lily,Rose Depp), una pareja que vive feliz en la ciudad de Wisborg. Hutter trabaja para Heer Knock (Simon McBurney), un agente inmobiliario que lo envía a las montañas de Transilvania, en los Montes Cárpatos, para ultimar la venta de una finca con el Conde Orlok (Bill Skarsgård). Tras un complicado y siniestro viaje lleno de escalofriantes experiencias para cerrar el lucrativo negocio, Hutter, tras ser recibido por el anfitrión solícito y hospitalario de Orlok, se descubre la marca de unos colmillos en su cuello y pronto comprenderá que el Conde es en realidad un vampiro.',
    director: 'Robert Eggers',
    genre: ['Fantasy', 'Misterio', 'Terror'],
    duration: '132',
    year: '2024',
    country: 'Reino Unido',
    releaseDate: new Date('2024-12-25'),
    originalLang: 'Inglés',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/i7MM8_M4a8U?si=m1,9RgalKdmwemip',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735814308/PopcornBCN/MoviesBG/nosferatu_pmshq4.png'
  },
  {
    name: 'Parthenope',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735561411/PopcornBCN/Movies/parthenope_cyxlrk.webp',
    description:
      'Una carta de amor a ese Nápoles que ríe, hechiza y enamora, que nos hace viajar por la vida de Parthenope (Celeste Dalla Porta) desde su nacimiento en los años 50 hasta hoy. Un cuento que rebosa pasión y libertad y nos sumerge en los grandes amores y decisiones que todo lo cambian para siempre. La vida de esta mujer sin prejuicios y adelantada a su tiempo es un viaje bellísimo, caótico y fascinante mientras descubre y aprende el oficio de vivir, en un entorno tan puritano como opresor.',
    director: 'Paolo Sorrentino',
    genre: ['Drama', 'Fantasy'],
    duration: '137',
    year: '2024',
    country: 'Italia',
    releaseDate: new Date('2024-12-25'),
    originalLang: 'Italiano',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/3qX321SLH,I?si=uc,pecLSrGatc6,f',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735897270/PopcornBCN/MoviesBG/ParthenopeBG_edif0l.png'
  },
  {
    name: 'Sonic 3: La película',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735561412/PopcornBCN/Movies/sonic3pelicula_itjjxr.jpg',
    description:
      'Sonic, Tails y Knuckles se enfrentarán al Dr. Eggman antes de que conquiste el mundo. Eggman tendrá un nuevo aliado (Project Shadow).',
    director: 'Jeff Fowler',
    genre: ['Acción', 'Aventura', 'Animación'],
    duration: '109',
    year: '2024',
    country: 'Estados Unidos , Japón',
    releaseDate: new Date('2024-12-25'),
    originalLang: 'Inglés',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/ahNH6B645IQ?si=jSQm9N_KECfQR5Xx',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735897317/PopcornBCN/MoviesBG/Sonic3BG_qpjlq5.png'
  },
  {
    name: 'Conclave',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735561575/PopcornBCN/Movies/Conclave_n5kjlk.webp',
    description:
      'Tras la inesperada muerte del Sumo Pontífice, el cardenal Lawrence es designado como responsable para liderar uno de los rituales más secretos y antiguos del mundo: la elección de un nuevo Papa. Cuando los líderes más poderosos de la Iglesia Católica se reúnen en los salones del Vaticano, Lawrence se ve atrapado dentro de una compleja conspiración a la vez que descubre un secreto que podría sacudir los cimientos de la Iglesia.',
    director: 'Edward Berger',
    genre: ['Thriller'],
    duration: '120',
    year: '2024',
    country: 'Estados Unidos',
    releaseDate: new Date('2024-12-20'),
    originalLang: 'Inglés',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/J0E78tL6CxY?si=yAfkCSPXpmQzwBS7',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735897182/PopcornBCN/MoviesBG/ConclaveBG_xmqrhr.png'
  },
  {
    name: 'Wicked',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735561986/PopcornBCN/Movies/wicked_ff1h11.webp',
    description:
      'Wicked narra la historia de las brujas de El mago de Oz: la Bruja Buena y la Malvada Bruja del Oeste. En esta película, las dos brujas se conocen siendo estudiantes de la Universidad Shiz, en la Tierra de Oz, donde forjan una profunda amistad.',
    director: 'Jon M. Chu',
    genre: ['Fantasy', 'Musical', 'Romantica'],
    duration: '160',
    year: '2024',
    country: 'Estados Unidos',
    releaseDate: new Date('2024-11-22'),
    originalLang: 'Inglés',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/JDSRDbFqc_E?si=L0CZag9aDvizH2kD',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735897832/PopcornBCN/MoviesBG/WickedBG_glgcly.png'
  },
  {
    name: 'Emilia Perez',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735562424/PopcornBCN/Movies/EmiliaPerez_y7okvj.webp',
    description:
      'Rita es una abogada de un gran bufete que un día recibe una oferta inesperada: ayudar a transicionar y desaparecer a la temida jefa de un cártel de la droga.',
    director: 'Jacques Audiard',
    genre: ['Comedia', 'Crimen', 'Musical', 'Thriller'],
    duration: '132',
    year: '2024',
    country: 'Francia',
    releaseDate: new Date('2024-12-05'),
    originalLang: 'Castellano',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/BpCsJoNXMIc?si=IXSO3H2cmkGpvd02',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735897954/PopcornBCN/MoviesBG/EmiliaPerezBG_ltlna7.png'
  },
  {
    name: 'Gladiator II',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735562569/PopcornBCN/Movies/gladiator2_hox5o2.webp',
    description:
      'Con un corazón desbordado de furia y con el futuro del Imperio en juego, Lucius tendrá que apelar a su pasado en busca de la fuerza y el honor que la ayudarán a regresar al pueblo la gloria perdida de Roma.',
    director: 'Ridley Scott',
    genre: ['Acción', 'Aventura', 'Drama'],
    duration: '147',
    year: '2024',
    country: 'Reino Unido',
    releaseDate: new Date('2024-11-15'),
    originalLang: 'Inglés',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/vZQm2ZRYz00?si=vszz0NkQhHI7P3sL',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735898076/PopcornBCN/MoviesBG/GladiatorIIBG_q1hvkj.png'
  },
  {
    name: 'La infiltrada',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735562751/PopcornBCN/Movies/lainfiltrada_slxzir.webp',
    description:
      'Tras pasar varios años infiltrada en los ambientes de la izquierda abertzale como una joven simpatizante más de la banda terrorista ETA, una agente de policía consigue lo que buscaba: ETA contacta con ella. Necesitan que aloje en su piso a dos etarras que tienen el objetivo de preparar varios atentados.',
    director: 'Arantxa Echevarría',
    genre: ['Thriller'],
    duration: '118',
    year: '2024',
    country: 'España',
    releaseDate: new Date('2024-10-11'),
    originalLang: 'Castellano , Euskera',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/_bF5Nd3eTYg?si=ThDpUMMPNbrQSM7F',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735898172/PopcornBCN/MoviesBG/LaInfiltradaBG_jdvia0.png'
  },
  {
    name: 'La sustancia',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735562927/PopcornBCN/Movies/lasustancia_rfr6z5.webp',
    description:
      'Con The Substance, puedes generar otra versión de ti mismo, más joven, más bella, más perfecta. Todo lo que tienes que hacer es compartir el tiempo. Una semana para uno, una semana para el otro, mientras que el cuerpo inactivo permanece inconsciente.',
    director: 'Coralie Fargeat',
    genre: ['Drama', 'Terror'],
    duration: '141',
    year: '2024',
    country: 'Estados Unidos',
    releaseDate: new Date('2024-10-11'),
    originalLang: 'Inglés',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/bb10YAiF8nE?si=FS8FJiOMWL4c9L8i',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735898245/PopcornBCN/MoviesBG/LasustanciaBG_sdbkwj.png'
  },
  {
    name: 'El 47',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735563064/PopcornBCN/Movies/el47_xmzj6s.webp',
    description:
      'El 47 cuenta la historia de un acto de disidencia pacífica y el movimiento vecinal de base que en 1978 transformó Barcelona y cambió la imagen de sus suburbios para siempre. Manolo Vital era un conductor de autobús que se adueñaba del bus de la línea 47 para desmontar una mentira que el Ayuntamiento se empeñaba en repetir: los autobuses no podían subir las cuestas del distrito de Torre Baró. Un acto de rebeldía que demostró ser un catalizador para el cambio, de que las personas se enorgullecen de sus raíces, de una lucha del vecindario, de la clase trabajadora que ayudó a crear la Barcelona moderna de los años 70.',
    director: 'Marcel Barrena',
    genre: ['Biografía'],
    duration: '110',
    year: '2024',
    country: 'España',
    releaseDate: new Date('2024-09-06'),
    originalLang: 'Castellano , Catalano',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/pfaG5OXWMEc?si=D9RrHC4O2f1v7bVD',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735898348/PopcornBCN/MoviesBG/EL47BG_butw5q.png'
  },
  {
    name: 'Hereje',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735563293/PopcornBCN/Movies/hereje_y4qxjs.webp',
    description:
      'Dos jóvenes misioneras se ven obligadas a demostrar su fe cuando llaman a la puerta equivocada y son recibidas por el diabólico Sr. Reed (Hugh Grant). Los tres se verán envueltos en un brutal juego del gato y el ratón durante una larga noche de tormenta.',
    director: 'Bryan Woods, Scott Beck',
    genre: ['Terror', 'Thriller'],
    duration: '110',
    year: '2024',
    country: 'Estados Unidos',
    releaseDate: new Date('2025-01-01'),
    originalLang: 'Inglés',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/Q22lsDfMHxY?si=UGxxia93xRauOcZn',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735899085/PopcornBCN/MoviesBG/HerejeBG_oiqs6i.png'
  },
  {
    name: 'Vivir el momento',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735563404/PopcornBCN/Movies/vivirelmomento_iitfg1.webp',
    description:
      'Almut y Tobias se conocen en un encuentro inesperado que cambia sus vidas. A través de pasajes de su vida en común, se enamoran, construyen un hogar, forman una familia,  se nos revela una difícil verdad que amenaza con sacudir sus cimientos. A medida que emprenden un camino que los límites del tiempo desafían, los protagonistas aprenderán a apreciar cada momento del inusual camino que ha tomado su historia de amor, que abarca una década.',
    director: 'John Crowley',
    genre: ['Drama', 'Romantica'],
    duration: '107',
    year: '2024',
    country: 'Reino Unido',
    releaseDate: new Date('2025-01-01'),
    originalLang: 'Inglés',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/bTNnpcqjceI?si=v6q3nclvtFYFlx0q',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735899235/PopcornBCN/MoviesBG/VivirelmomentoBG_xcbfpq.png'
  },
  {
    name: 'Vaiana 2',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735563669/PopcornBCN/Movies/vaiana2_kq1ft5.webp',
    description:
      'Tras recibir una inesperada llamada de sus antepasados, Vaiana debe viajar a los lejanos mares de Oceanía y adentrarse en peligrosas aguas perdidas para vivir una aventura sin precedentes',
    director: 'Dave Derrick Jr.',
    genre: ['Musical', 'Aventura', 'Animación'],
    duration: '99',
    year: '2024',
    country: 'Estados Unidos',
    releaseDate: new Date('2024-11-29'),
    originalLang: 'Inglés',
    state: 'Disponible',
    trailer: 'https://www.youtube.com/embed/O5lPAcMEKvE?si=2NAoYQ3CmBK73j,L',
    posterBG:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735897097/PopcornBCN/MoviesBG/VaianaBG_dhyqgn.png'
  },
  {
    name: 'Joker: Folie A Deux',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1735901979/PopcornBCN/Movies/Joker_Folie_aa_Deux_vni37w.jpg',
    description:
      'Tras crear el caos, Arthur Fleck ha sido internado en el Asilo Arkham a la espera de juicio por sus crímenes como Joker. Mientras lucha con su doble identidad, Arthur no sólo tropieza con el amor verdadero, sino que también encuentra la música que siempre ha estado dentro de él.',
    director: 'Todd Phillips',
    genre: ['Acción', 'Drama', 'Crimen'],
    duration: '137',
    year: '2024',
    country: 'Estados Unidos',
    releaseDate: new Date('2024-12-04'),
    originalLang: 'Inglés',
    state: 'No disponible',
    trailer: 'https://www.youtube.com/embed/7SZfThvjt5I?si=lp3Vk5XuNB_I8WB5'
  }
];

module.exports = arrayMovies;
