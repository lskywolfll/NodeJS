
// Modulo con el cual tendremos superpoderes para manejar archivos,leer,crear,eliminar y otras muchas cosas que se te ocurra!!
const fs = require('fs');
// lista de tareas
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

    const porHacer = {
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
        listadoPorHacer[posicion].completado = completado;
        guardarDatos();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    ObtenerDatosBD('Se ha eliminado correctamente!!');
    // Creamos una nueva cajita que contendra todos los valores excepto el que nosotros queremos eliminar y despues lo transferimos la nueva cajita a la cajita que contiene todas las tareas por hacer
    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion);
    // Cantidad de elementos que tiene cada cajita
    if(listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDatos();
        return true;
    }

    //funcionalidad sin necesidad del filter
    // let posicion = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    // if(posicion >= 0){
    //     eliminamos la tarea en base a su posicion dentro de la cajita y nosotros indicamos la cantidad que nosotros queremos borrar dentro de la posicion
    //     listadoPorHacer.splice(posicion, 1);
    //     guardarDatos("Se ha eliminado correctamente :)");
    //     return true;
    // }else{
    //     return false;
    // }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}