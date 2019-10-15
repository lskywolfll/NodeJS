// paquetes
// Desestructurar un objeto o tambien puede verse como crear variables con la propiedad indicada del archivo.js que quiero extraer y usar
const { crearArchivo, crearArchivoCallback, obtenerCallback, obtenerPromise } = require('./multiplicar/multiplicar');

// console.log(module);

// let base = 'asdf';
let limite = 10;
// argv => argumentos que se tomaran por consola ej: nodemon app (--numero=5 este es un parametro por consola incluyendo los --)
// process son lso precedimientos que se estan ejecutando del cual nos mostrar todos los datos de nuestra computadora
let argv = process.argv;
let parametro = argv[2];
// Split es para separar y convierte el string en un arreglo(cajita)
let base = parametro.split('=')[1];

// Promise
// crearArchivo(base, limite)
//     .then(resultado => {
//         console.log(`Se ha creado ${resultado} exitosamente!`);
//     })
//     .catch(err => console.log(err));

// Callback
crearArchivoCallback(base, limite, (err, resultado) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Se ha creado la ${resultado} exitosamente!`);
    }
})

// Async-Await
// obtenerCallback(base, limite)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => console.log(err));

// multiplicar.obtenerPromise(base, limite)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });

// console.log(process.argv);