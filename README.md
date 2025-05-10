# POPCORNBCN - BACKEND

<div align="center">
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1746899721/PopcornBCN/Preview/PopcornBCNPreviewTotal_rjurio.png" alt="desktop and mobile preview" />
</div>

## Descripción

PopcornBCN es una página que permite ver la lista de películas disponibles en los cines de la ciudad de Barcelona. Enseña tanto la lista de cines disponibles como las sesiones de cada película. Además el user puede loguearse, añadir en su lista las películas favoritas y comentarlas. El admin es quien tiene la posibilidad de crear, editar, eliminar películas, cines, sesiones y comentarios, a través de formularios.

## Live Demo

link http://popcornbcn.cloudinary.com

## Features

Para el frontend uso Javascript Vanilla, HTML y CSS.
Como base de datos uso MongoDB. Levanto un servidor usando la libreria Express.
Los files como las imágenes se suben y se guardan mediante Cloudinary.

El proyecto tiene 5 modelos:

- user
- movie
- cinema
- comments
- screening

<div align="center">
<img src="https://res.cloudinary.com/dr2vohk2z/image/upload/v1746896438/PopcornBCN/Preview/models_qudpbz.jpg" alt="models" />
</div>

### User model

#### endpoints

| PETICIÓN | NOMBRE       | MIDDLEWARE                     | ROUTE     | DESCRIPCIÓN                                                                                                                                                                     |
| -------- | ------------ | ------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST     | registerUser | -                              | /register | permite al user de crear una cuenta y registrarse en la página                                                                                                                  |
| POST     | login        | isAuth                         | /login    | permite al user de hacer el login a la página, una vez se haya ya registrado                                                                                                    |
| GET      | getUsers     | isAdmin                        | /         | devuelve la lista de users registrados. Solo el user con role "admin" puede hacerlo                                                                                             |
| GET      | getUserById  | isAuth                         | /:id      | devuelve los datos del user que hace la petición. Tiene que ser un user logueado                                                                                                |
| PUT      | updateUser   | isAuth, upload.single("image") | /:id      | permite actualizar los datos de los users. Quien está logueado puede actualizar los datos de si mismo. El user con role "admin" puede modificar los datos de cualquier usuario. |
| DELETE   | deleteUser   | isAuth                         | /:id      | permite eliminar una cuenta de usuario. Los logueados se pueden eliminar su propia cuenta. El user con role "admin" puede elminar cualquier cuenta.                             |

### Movie model

#### endpoints

| PETICIÓN | NOMBRE       | MIDDLEWARE                                                                                 | ROUTE   | DESCRIPCIÓN                                                                                                      |
| -------- | ------------ | ------------------------------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------------------- |
| GET      | getMovies    | -                                                                                          | /       | devuelve todas las películas de mi colección.                                                                    |
| GET      | getMoviebyId | -                                                                                          | /:id    | devuelve la película con el id que le pasamos por params                                                         |
| GET      | getGenres    | -                                                                                          | /genres | devuelve la lista de géneros que pueden tener las películas. Sirve para pintar el filtro de GENEROS en el front. |
| GET      | getStates    | -                                                                                          | /states | devuelve la lista de estados que pueden tener las películas. Sirve para pintar el filtro de ESTADOS en el front. |
| POST     | postMovie    | isAdmin, upload.fields([{ name: 'image', maxCount: 1 },{ name: 'posterBG', maxCount: 1 }]) | /       | permite hacer post de una película. Solo el user con role admin lo puede hacer                                   |
| PUT      | updateMovie  | isAdmin, upload.fields([{ name: 'image', maxCount: 1 },{ name: 'posterBG', maxCount: 1 }]) | /:id    | permite actualizar los datos de una película ya existente. Solo el user con role admin lo puede hacer            |
| DELETE   | deleteMovie  | isAdmin                                                                                    | /:id    | permite eliminar una película existente. Solo el user con role admin lo puede hacer                              |

### Cinema model

#### endpoints

| PETICIÓN | NOMBRE        | MIDDLEWARE | ROUTE | DESCRIPCIÓN                                                                                      |
| -------- | ------------- | ---------- | ----- | ------------------------------------------------------------------------------------------------ |
| GET      | getCinemas    | -          | /     | devuelve la lista de los cines de mi colección.                                                  |
| GET      | getCinemabyId | -          | /:id  | devuelve el cine con el id que le pasamos por params                                             |
| POST     | postCinema    | isAdmin    | /     | permite hacer post de un cine. Solo el user con role admin lo puede hacer                        |
| PUT      | updateCinema  | isAdmin    | /:id  | permite actualizar los datos de un cine ya existente. Solo el user con role admin lo puede hacer |
| DELETE   | deleteCinema  | isAdmin    | /:id  | permite eliminar un cine existente. Solo el user con role admin lo puede hacer                   |

### Comments model

#### endpoints

| PETICIÓN | NOMBRE             | MIDDLEWARE | ROUTE   | DESCRIPCIÓN                                                                                                                                                                              |
| -------- | ------------------ | ---------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET      | getComments        | -          | /       | devuelve la lista de comentarios subidos por los users                                                                                                                                   |
| GET      | getCommentsByMovie | -          | /:movie | devuelve la lista de comentarios existentes en el movie con el id que le pasamos por params. Usado en la pagina de detalles de una película.                                             |
| POST     | postComment        | isAuth     | /       | permite postear un comentario debajo de una película. Solo los logueados pueden hacerlo                                                                                                  |
| DELETE   | deleteComment      | isAuth     | /:id    | permite eliminar un comentario existente. Los logueados pueden borrar sus proprios comentarios. El admin puede borrar cualquier comentario. No permitido para los que no están logueados |

### Screening model

#### endpoints

| PETICIÓN | NOMBRE              | MIDDLEWARE | ROUTE      | DESCRIPCIÓN                                                                                                                                                                                                                           |
| -------- | ------------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET      | getScreenings       | isAdmin    | /          | devuelve la lista de screenings existentes. Solo el admin puede conseguirla. No viene usada: útil si se quiere añadir la posibilidad de gestionar los screenings desde la página de "Admin" (de momento no está implementado).        |
| GET      | getScreeningById    | isAdmin    | /:id       | devuelve el screening con el id pasado por params. Solo el admin puede conseguirla. No viene usada: útil si se quiere añadir la posibilidad de gestionar los screenings desde la página de "Admin" (de momento no está implementado). |
| GET      | getScreeningByMovie | -          | /movie/:id | devuelve los screenings de la película con el id pasado por params. Usado en la página de detalles de la película.                                                                                                                    |
| POST     | postScreening       | isAdmin    | /          | permite postear un screening debajo de una película. Solo el user con role "admin" puede hacerlo                                                                                                                                      |
| PUT      | updateScreening     | isAdmin    | /:id       | permite actualizar los datos de un screening. Solo el user con role "admin" puede hacerlo                                                                                                                                             |
| DELETE   | deleteScreening     | isAdmin    | /:id       | permite eliminar un screening existente. Solo el user con role "admin" puede hacerlo                                                                                                                                                  |

**Mireia**
