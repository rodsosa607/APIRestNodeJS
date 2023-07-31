const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

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
        //aquí se va a declarar para que registre el createAt y el updateAt en mongodb
        timestamps: true,
        versionKey: false
    }
);

//aquí se exporta un MODELO DE MONGOOSE, donde se asigna el nombre de la COLLECTION
//en MongoDB a partir del SCHEMA. Se asigna el nombre "users" a la collección a partir del schema UserSchema
UserSchema.plugin(mongooseDelete, {overrideMethods:"all"});
module.exports = mongoose.model("users", UserSchema)
