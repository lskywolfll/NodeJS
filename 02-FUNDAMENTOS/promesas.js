let empleados = [{
    id: 1,
    nombre: 'René'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];


let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}

// getEmpleado(1)
//     .then(empleado => {
//         // console.log(empleado);

//         getSalario(empleado)
//             .then((resp) => {
//                 console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
//             }).catch((error) => {
//                 console.log(error);
//             });
//     })
//     .catch(err => console.log(err));
// Promesas de cadena
getEmpleado(3).then(empleado => {

    return getSalario(empleado)
    
})
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    });

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario: ${empleado.nombre}`);
        } else {
            // Solo se puede devolver una resuelto con las promesas, aun que hayamos puesto 2 resueltos solo se enviara una vez y el primero se toma en cuenta e devuelve, pero el otro no hara nada
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });
}

// Promesas de manipulas con then(callback()) si todo fue bien y cath(callback()) para los errores de esa funcion que nso devolviera una promesa
/* new Promise( (resolve,reject) => {
    reject('error');
    resolve('todo bien');
})
*/

marca.ObtenerMarcas().then(respuesta => {
    datosTabla = respuesta.Descripcion.recordset;
    return cliente.ObtenerCliente()
})