const express = require('express');
const fs = require('fs');
const router = express.Router();

const PATH_ROUTES = __dirname;  //dirname es un constante de Node que nos devuelve la ruta absoluta del archivo, en este caso index.js

const removeExtension = (fileName)=>{
    return fileName.split('.').shift()
}
//leer el directorio donde está index.js
fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file);
    if (name != 'index'){
        router.use(`/${name}`,require(`./${file}`)); //TODO http://localhost:3000/api/tracks
    }
})

module.exports = router;