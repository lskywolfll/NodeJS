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
// Para el manejo de errores en als funciones asincronas se puede usar un throw new Error(contenido) para el envio del error
let getEmpleado = async (id) => {


    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
}

let getSalario = async (empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el usuario: ${empleado.nombre}`);
    } else {
        // Solo se puede devolver una resuelto con las promesas, aun que hayamos puesto 2 resueltos solo se enviara una vez y el primero se toma en cuenta e devuelve, pero el otro no hara nada
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        };
    }
}

let getInformacion = async (id) => {

    let empleado = await getEmpleado(id);
    let respuesta = await getSalario(empleado);

    return `${respuesta.nombre} tiene un salario de $${respuesta.salario}`;
}

getInformacion(1)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));