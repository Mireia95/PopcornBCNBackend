const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//creo Schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, trim: true, required: true },
    password: {
      type: String,
      trim: true,
      minlength: [5, 'Password con minimo 5 carácteres'],
      required: true
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user'
    },
    image: {
      type: String,
      trim: true
    },
    myList: [{ type: mongoose.Types.ObjectId, ref: 'movies' }],
    comments: [{ type: mongoose.Types.ObjectId, ref: 'comments' }]
  },
  {
    timestamps: true,
    collections: 'users'
  }
);

//hashear el password usando bcrypt
userSchema.pre('save', function (next) {
  //ATENCION: asi cada vez que se usa User.save() hashea el password de nuevo
  //posible error en hacer login despues
  //solucion: añadir esta linea de código:
  if (!this.isModified('password')) return next();
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

//creo modelo
const User = mongoose.model('users', userSchema, 'users');

module.exports = User;
