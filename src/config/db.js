const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectados a la BBDD ✔');
  } catch (error) {
    console.log('No conectados a la BBDD ❌');
  }
};

module.exports = { connectDB };
