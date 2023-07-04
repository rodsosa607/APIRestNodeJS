require('dotenv').config();

const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('storage'));

const port = process.env.PORT || 3000;

/**
 * aquí invocamos a las rutas! 😎
 */
//TODO localhost/api/_______
app.use('/api',require('./routes'));

app.listen(port, () => {
    console.log('la aplicación está corriendo en http://localhost:'+ port);
})

dbConnect();