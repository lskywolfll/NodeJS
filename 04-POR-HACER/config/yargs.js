// 2 comandos
// 1- crear y descripcion posee un alias -d para escribir un texto, 2- actualizar y descripcion tambien posee el mismo alias pero tiene un estado llamado completado con alias -c puede ser true o false
// Funcionar el help

const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Contenido'
    },
    completado: {
        default: true,
        type: 'boolean',
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    },
    eliminar: {
        alias: 'e',
        desc: 'Contenido a eliminar'
    }
}

// Desestructuracion del objeto y extraimos e inicializamos la variable que esta en el modulo yargs, si no tendrimos que declarar la propiedad y sacar las llaves del nombre que contiene el modulo
const { argv } = require('yargs')
    .command('crear', 'Crea una tarea para el TO DO', opts)
    .command('actualizar', 'Actualiza una tarea creada en el TO DO', opts)
    .command('eliminar', 'Borra una tarea', opts)
    .help()

module.exports = argv;