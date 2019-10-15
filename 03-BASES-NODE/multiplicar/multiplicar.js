// requireds
const fs = require('fs');

// Number
// Este convertira a numero siempre y cuadno sea un numeral, entonces '5' = 5 usandolo por lo cual al usarlo para validar resultados concretos de nuestra funcion nos beneficia gratamente ya que no limite el uso y alcance de este para ser implementado

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        let data = ``;

        function multiplicacion(base, limite) {

            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;
            }
        }

        if (!Number(base) | !Number(limite)) {
            if (!Number(base) && !Number(limite)) {
                return reject(`El valor introducido ${base} y ${limite} no son numeros!!`);
            } else {
                return reject(`El valor introducido ${base} no es un numero!`);
            }
        } else {
            multiplicacion(base, limite);

            // 1- Nombre del archivo y extencion a crear, 2- el contenido que tendra 3- callback
            // en el nombre del archivo nosotros podemos indicar una carpeta carpeta/nombre.extencion
            fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`tabla-${base}.txt`)
            });
        }
    });
}

// convertirlo a callback
let crearArchivoCallback = (base, limite, callback) => {

    let data = ``;

    function multiplicacion(base, limite) {

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
    }

    if (!Number(base)) {
        if (!Number(base) && !Number(limite)) {
            return callback(`El valor introducido ${base} y ${limite} no son numeros!!`);
        } else {
            return callback(`El valor introducido ${base} no es un numero!`);
        }

    } else {
        multiplicacion(base, limite);
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                callback(`No se ha podido crear!!`);
            else
                callback(null, `tabla-${base}.txt`)
        });
    }


}
// convertirlo a async-await
let obtenerCallback = async (base, limite) => {

    let archivoCallback = await crearArchivo(base, limite);

    return archivoCallback
}

let obtenerPromise = async (base, limite) => {

    let archivoPromise = await crearArchivo(base, limite);

    return archivoPromise;
}
// Exportar funcionalidades
module.exports = {
    crearArchivo,
    crearArchivoCallback,
    obtenerCallback,
    obtenerPromise
}