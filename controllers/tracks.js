//aquí va a contener la lógica de la app
const { matchData, matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const  { handleHttpError } = require('../utils/handleError');

/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({}) //en mongoose así se dice que traiga todo
        res.send({data});
    } catch (error) {
        handleHttpError( res, 'ERROR_GET_ITEMS');     
    }
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req); //matchedData es express-validator y limpia de acuerdo a middleware

        const {id} = req;
        const data = await tracksModel.findById(id) //en mongoose filtra por id
        res.send({ data });        
    } catch (error) {
        //console.log(error);
        handleHttpError(res,'ERROR_GET_ITEM')
    }
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req); //matchedData limpia la info recibida en este caso JSON (ejemplo) y
        // la valida con la estuctura definida en express-validator
        const data = await tracksModel.create(body);
        console.log({data});
        res.send({data});
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS', 403);        
    }
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(
            { _id: id },
            body,
            { new: true }
        );
        res.status(200).json({data});
    } catch (error) {
        console.log(err)
        handleHttpError(res, 'ERROR_UPDATE_ITEM', 403);        
    }    
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);

        const {id} = req;
        const data = await tracksModel.deleteOne({_id:id});
        res.send({ data });        
    } catch (error) {
        //console.log(error);
        handleHttpError(res,'ERROR_DELETE_ITEM')
    }   
};

//se exporta aplicando destructuración = aplicar llaves {}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem };