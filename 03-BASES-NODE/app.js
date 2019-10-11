// paquetes
const fs = require('fs');


let base = 5;
let data = ``;

function multiplicacion(base, limite) {
    
    for(let i = 1; i <= limite; i++){
        data += `${base} * ${i} = ${base * i}\n`;
    }
}

multiplicacion(base, 10);

// 1- Nombre del archivo y extencion a crear, 2- el contenido que tendra 3- callback
// en el nombre del archivo nosotros podemos indicar una carpeta carpeta/nombre.extencion
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

  if (err) throw err;

  console.log(`El archivo con la tabla del ${base} ha sido creada`);
});