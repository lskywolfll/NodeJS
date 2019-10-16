// paquetes
const argv = require('yargs')
    .command('listar', 'Imprime ne consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea una tabla', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
// Desestructurar un objeto o tambien puede verse como crear variables con la propiedad indicada del archivo.js que quiero extraer y usar
const { crearArchivo, crearArchivoCallback, obtenerCallback, obtenerPromise, listarTabla } = require('./multiplicar/multiplicar');

// console.log(module);

// let base = 'asdf';
let limite = 10;
// argv => argumentos que se tomaran por consola ej: nodemon app (--numero=5 este es un parametro por consola incluyendo los --)
// process son lso precedimientos que se estan ejecutando del cual nos mostrar todos los datos de nuestra computadora
let argv2 = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limit)
        .then(archivo => {
            console.log(`Archivo creado: ${archivo}`);
        }).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

console.log(`Limite: ${argv.limite}\nBase: ${argv.base}`);
// console.log(argv2);

// let parametro = argv[2];
// Split es para separar y convierte el string en un arreglo(cajita)
// let base = parametro.split('=')[1];

// Promise
// crearArchivo(base, limite)
//     .then(resultado => {
//         console.log(`Se ha creado ${resultado} exitosamente!`);
//     })
//     .catch(err => console.log(err));

// Callback
// crearArchivoCallback(base, limite, (err, resultado) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`Se ha creado la ${resultado} exitosamente!`);
//     }
// })

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