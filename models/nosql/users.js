const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        //aquí vamos a declarar la estructura del objeto
        name: { type: String },
        age: { type: Number },
        email: {
            type: String,
            unique: true
        },
        password: { type: String },
        role: {
            type: ["user", "admin"],
            default: "user"
        }

    },
    {
        //aquí se van a registrar datos adicionales para el schema
        timestamps: true,
        versionKey: false
    }
);

//aquí se exporta un modelo de mongoose, se asigna el nombre "users" a la collección a partir del
//schema UserSchema
module.exports = mongoose.model("users", UserSchema)
