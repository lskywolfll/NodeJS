// paquetes
// Desestructurar un objeto o tambien puede verse como crear variables con la propiedad indicada del archivo.js que quiero extraer y usar
const {crearArchivo, crearArchivoCallback, obtenerCallback, obtenerPromise} = require('./multiplicar/multiplicar');

// console.log(module);

let base = 16;

// Promise
// crearArchivo(base, 10)
//     .then(resultado => {
//         console.log(`Se ha creado ${resultado} exitosamente!`);
//     })
//     .catch(err => console.log(err));

// Callback
// crearArchivoCallback(base, 10,(err, resultado) => {
//     if(err){
//         console.log(err);
//     }

//     console.log(`Se ha creadi la ${resultado} exitosamente!`);
// })

// Async-Await
// obtenerCallback(base, 10)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(err => console.log(err));

// multiplicar.obtenerPromise(base, 10)
//     .then((result) => {
//         console.log(result);
//     }).catch((err) => {
//         console.log(err);
//     });