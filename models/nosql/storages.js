const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const StorageSchema = new mongoose.Schema(
    {
        //aquí vamos a declarar la estructura del objeto
        url: { type: String },
        filename: { type: String }
    },
    {
        //aquí se van a registrar datos adicionales para el schema
        timestamps: true,
        versionKey: false
    }
);

//aquí se exporta un modelo de mongoose, se asigna el nombre "users" a la collección a partir del
//schema StorageSchema
StorageSchema.plugin(mongooseDelete, {overrideMethods:"all"});
module.exports = mongoose.model("storages", StorageSchema)
