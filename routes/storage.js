const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const {createItem, getItem, getItems, deleteItem, updateItem} = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storges');

//TODO: http://localhost:3001/storage

/**
 * Aquí especificamos el tipo de método HTTP que utilizaremos en la route. En este caso POST
 */

/**
 * Listado de storages
 */
router.get("/", getItems);

/**
 * Detalle de un storage
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * delete item storage
 */
router.delete("/:id", validatorGetItem, deleteItem);
/**
 * crear item storage
 */
router.post("/",uploadMiddleware.single("myfile"), createItem);

module.exports = router;