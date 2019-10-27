
// Modulo con el cual tendremos superpoderes para manejar archivos,leer,crear,eliminar y otras muchas cosas que se te ocurra!!
const fs = require('fs');

let listadoPorHacer = [];

const guardarDatos = (mensaje = 'Se han registrado los datos en la BD') => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`BD/data.json`,data, (err) => {
        if (err) throw new Error('No se pudo guardar los datos en BD', err);

        console.log(mensaje);
    });
}

const ObtenerDatosBD = () => {

    try {
        listadoPorHacer = require('../BD/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    ObtenerDatosBD();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDatos();

    return porHacer;
}

const getListado = () => {
    
    ObtenerDatosBD();

    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) =>{
    ObtenerDatosBD();

    let posicion = listadoPorHacer.findIndex( tarea  => tarea.descripcion === descripcion);

    if (posicion >= 0){
        console.log(posicion);
        listadoPorHacer[posicion].completado = completado;
        if(listadoPorHacer[posicion]){
            console.log(listadoPorHacer[posicion]);
        }
        guardarDatos();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    ObtenerDatosBD();

    let posicion = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if(posicion >= 0){
        listadoPorHacer.splice(posicion, 1);
        guardarDatos("Se ha eliminado correctamente :)");
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}