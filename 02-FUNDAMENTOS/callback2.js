let empleados = [{
    id: 1,
    nombre: 'René'
},{
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


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find( empleado =>  empleado.id === id )

    // console.log(empleadoDB);

    if( !empleadoDB ){
        callback(`No existe un empleado con el ID ${id}`);
    }else{
        // No hay error entonces se envia un null y el resultado
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {

    // Si encuentra un empleado 
    // respuesta debe ser nombre: 'rene', salario: 3000
    // pista propia: ID === ID_EMPLEADO

    // error
    // No se encontro un salario para el usuario fernadno osea tomar el nombre al menos para identificar
    // let empleadoDB = empleados.find( empleado => empleado.id === id);
    let salarioDB = salarios.find( salario => salario.id === empleado.id )

    if( !salarioDB ){
        callback(`No se encontró un salario para el usuario: ${empleado.nombre}`)
    }else{
        // Si tenemos muchas propiedas que enviar o necesitaos un objeto completo con sus propiedas mandamos el objeto completo
        // callback(null, salarioDB)
        // Si queremos simplemente sacar ciertos datos de objetos o de un solo objeto tenemos que usar otro objeto en si ej:
        callback(null,{
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
}

getEmpleado(1, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    // console.log(empleado);

    getSalario(empleado, (err, resp) => {

        if(err){
            return console.log(err);
        }

        console.log(`El salario de ${resp.nombre} es de $${resp.salario}`);
    })
});



// otra forma pero mas tosca, tenemos creda una funcion que busca al empleado pro id entonces por que no reutilizar en esa instancia para poder hacer mejor el uso de las funcioes
// getSalario(empleados[1], (err, salario) => {

//     if(err){
//         return console.log(err);
//     }

//     // console.log(`${empleados[1].nombre}, salario: ${salario.salario}`);
//     console.log('aqui:');
// })