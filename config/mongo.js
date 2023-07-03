const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
      const DB_URI = process.env.DB_URI;
      await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conexión exitosa a MongoDB');
    } catch (error) {
      console.error('Error al conectar a MongoDB'); //, error);
    }
  };

module.exports = dbConnect;