const express = require('express');
const router = express.Router();
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');

const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');
const customHeader = require('../middleware/customHeader');
//TODO: ruta de tracks http://localhost/tracks GET, POST, DELETE, PUT

/**
 * Lista los items
 */
router.get("/", getItems);

/**
 * Obtener detalle de un item
 */
router.get("/:id",validatorGetItem, getItem);

/**
 * Crea un item
 */
router.post("/", validatorCreateItem, createItem);
/**
 * Actualizar una registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Detele record item
 */
router.delete("/:id",validatorGetItem, deleteItem);

//exportamos el modulo router para que pueda ser utilizado en lugares
module.exports = router;
