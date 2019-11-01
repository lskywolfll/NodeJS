
const { climaLugar } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

// climaLugar(argv.direccion)
//     .then(resp => {
//         console.log(`Ciudad: ${resp.direction}`);
//         console.log(`Latitud: ${resp.latitud}`);
//         console.log(`Longitud: ${resp.longitud}`);
//         // console.log(`Grados: ${resp.grados}`);
//     })
//     .catch(err => console.log(err));


// Desafio!
// Crear una funcion que reciba una direccion y este me envie una mensaje por consola si paso bien: El clima de direccion es de n° grados y si no se pudo obtener se imprime: No se pudo determinar el cliam de direccion

const getInfo = async (direccion) => {
    const coordenadas = await climaLugar(direccion);
    const temperatura = await getClima(coordenadas.latitud, coordenadas.longitud);

    if (!temperatura || !coordenadas) {
        return new Error(`No se pudo determinar el clima de ${direccion}`);
    }

    return {
        coordenadas,
        temperatura
    }

    // 2 forma
    // try {
    //     const coordenadas = await climaLugar(direccion);
    //     const temperatura = await getClima(lugar.latitud, lugar.longitud);
    //     return `El clima de ${coordenadas.direction} es de ${temperatura}`
    // } catch (e) {
    //     return `No se pudo determinar el clima de ${direccion}`
    // }
}

getInfo(argv.direccion)
    .then(resp => {
        console.log(`El clima de ${resp.coordenadas.direction} es de ${resp.temperatura}`);
    })
    .catch(err => console.log(err));
// 2 forma
// getInfo(argv.direccion)
//     .then(console.log)
//     .catch(console.log);