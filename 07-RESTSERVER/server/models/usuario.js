const mongoose = require('mongoose');

// Crear schema en mongo para que sea el objeto(Tabla) de la base de datos por su estructura
let Schema = mongoose.Schema;
// Se crean las propiedades del objeto de la entidad que tenemos en nuestra base de datos de las tabla ala cual estemos haciendo referencia
let usuarioSchema = new Schema({
    // En las propiedades nosotros podemos establecer restricciones en su uso, ya sea tipo de dato y campo obligatorio
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role:{
        type: String,
        default: 'USER_ROLE'
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});

// Al crear un modelo de datos debemos indicar primero el nombre clave que tendra y luego poner el schema en el cual se basa
module.exports = mongoose.model('Usuario', usuarioSchema);