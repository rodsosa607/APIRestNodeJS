const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const {createItem} = require('../controllers/storage');

//TODO: http://localhost:3001/storage

/**
 * Aquí especificamos el tipo de método HTTP que utilizaremos en la route. En este caso POST
 */
router.post("/",uploadMiddleware.single("myfile"), createItem);

module.exports = router;