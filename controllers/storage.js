const fs = require('fs');
const { matchedData } = require('express-validator');
const { storageModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
/**
 * Obtener lista de la base de datos!
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({}) //en mongoose así se dice que traiga todo
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
        const {id} = matchedData(req);
        const data = await storageModel.findById(id); //en mongoose así se dice que traiga un id
        res.send({data});
    } catch (error) {
        handleHttpError( res, 'ERROR_GET_ITEM_DETAIL');            
    }
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
    try{
    const { body, file } = req;
    console.log(file);

    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }

    const data = await storageModel.create(fileData);
    res.send({data});
} catch (error){
    handleHttpError(res,'ERROR_CREATE_ITEM');
}
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
    try {
        const {id} = matchedData(req);
        const dataFile = await storageModel.findById(id); //en mongoose find por Id
        await storageModel.delete({_id: id}); //uso delete para eliminar solo lógicamente sino debe utilizar deleteOne

        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}` //TODO toda la ruta

        //fs.unlinkSync(filePath); //comento para que no elimine el archivo físico local
        const data = {
            filePath,
            delete:1
        }

        res.send({data});
    } catch (error) {
        handleHttpError( res, 'ERROR_GET_ITEM_DETAIL');            
    }    
};

//se exporta aplicando destructuración = aplicar llaves {}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem };


// (req, res)=>{
//     res.send({a:1});
// });