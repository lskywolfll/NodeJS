
const {climaLugar} = require('./lugar/lugar');
const {getClima} = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

climaLugar(argv.direccion)
    .then(resp => {
        console.log(`Ciudad: ${resp.direction}`);
        console.log(`Latitud: ${resp.latitud}`);
        console.log(`Longitud: ${resp.longitud}`);
        console.log(`Grados: ${resp.grados}`);
    })
    .catch(err => console.log(err));