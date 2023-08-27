const { Schema, model } = require('mongoose')

//TABLA DE USUARIOS 

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,
        trim: true, //me ayuda a eliminar espacios en blanco al principio y final de la cadena.
        minlength: 2,
        maxlength: 30
    },
    lastName:{
        type: String,
        required: true,
        trim: true, //me ayuda a eliminar espacios en blanco al principio y final de la cadena.
        minlength: 2,
        maxlength: 30
    },
    email:{
        type: String,
        required: true,
        trim: true, //me ayuda a eliminar espacios en blanco al principio y final de la cadena.
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true, //me ayuda a eliminar espacios en blanco al principio y final de la cadena.
        minlength: 8,
        maxlength: 30
    }
}, {
    timestamps: true //Genera la marca de tiempo de cuando se crea o se edita un registro.
}
)

model.exports = model('User', userSchema) //Necesito un archivo por esquema