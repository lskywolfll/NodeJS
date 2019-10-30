// 2 comandos
// 1- crear y descripcion posee un alias -d para escribir un texto, 2- actualizar y descripcion tambien posee el mismo alias pero tiene un estado llamado completado con alias -c puede ser true o false
// Funcionar el help
// Si tenemos todas las propiedades juntas estas se mezclaran y al quere utilizar alguna este tome otras funciones que no deberia o tiene que usarse como funciona pero a ciertos casos
// const opts = {
//     descripcion: {
//         demand: true,
//         alias: 'd',
//         desc: 'Contenido'
//     },
//     completado: {
//         default: true,
//         type: 'boolean',
//         alias: 'c',
//         desc: 'Marca como completado o pendiente la tarea'
//     },
//     eliminar: {
//         demand: true,
//         alias: 'e',
//         desc: 'Contenido a eliminar'
//     }
// }

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Contenido'
};

const completado = {
    default: true,
    type: 'boolean',
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

// Desestructuracion del objeto y extraimos e inicializamos la variable que esta en el modulo yargs, si no tendrimos que declarar la propiedad y sacar las llaves del nombre que contiene el modulo
const { argv } = require('yargs')
    .command('crear', 'Crea una tarea para el TO DO', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea creada en el TO DO', {
        descripcion,
        completado
    })
    .command('eliminar', 'Borra una tarea', {
        descripcion
    })
    .help()

module.exports = argv;