const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem } = require('../controllers/tracks');
//TODO: ruta de tracks http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems);
router.post("/", createItem);

//exportamos el modulo router para que pueda ser utilizado en lugares
module.exports = router;