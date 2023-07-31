const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const { tracksModel } = require('..');

const TracksSchema = new mongoose.Schema(
    {
        //aquí vamos a declarar la estructura del objeto
        name: { type: String },
        album: { type: String },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist: {
            name: { type: String },
            nickname: { type: String },
            nationality: { type: String }
        },
        duration: {
            start: { type: Number },
            end: { type: Number }
        },
        mediaId: {
            type: mongoose.Schema.Types.ObjectId
        }

    },
    {
        //aquí se van a registrar datos adicionales para el schema
        timestamps: true,
        versionKey: false
    }
);

//aquí se exporta un modelo de mongoose, se asigna el nombre "tracks" a la collección a partir del
//schema TracksSchema

TracksSchema.plugin(mongooseDelete, {overrideMethods:"all"});
module.exports = mongoose.model("tracks", TracksSchema)