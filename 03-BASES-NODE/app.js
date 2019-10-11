// paquetes
// Desestructurar un objeto o tambien puede verse como crear variables con la propiedad indicada del archivo.js que quiero extraer y usar
const {crearArchivo, crearArchivoCallback, obtenerCallback, obtenerPromise} = require('./multiplicar/multiplicar');

// console.log(module);

let base = 'asdf';
let limite = 10;

// Promise
// crearArchivo(base, limite)
//     .then(resultado => {
//         console.log(`Se ha creado ${resultado} exitosamente!`);
//     })
//     .catch(err => console.log(err));

// Callback
crearArchivoCallback(base, limite,(err, resultado) => {
    if(err){
        console.log(err);
    }

    console.log(`Se ha creado la ${resultado} exitosamente!`);
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