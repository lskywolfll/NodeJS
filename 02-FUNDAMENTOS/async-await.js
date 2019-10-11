/**
 * Async Await
 */

// let getNombre = async () => 'René';

// let getNombre = async () => {
//     // Crear un error u nos devolvere el error en caso no se pueda hacer
//     throw new Error('No existe un nombre para ese usuario');

//     return 'René';
// }

let getNombre = () => {
    // Cuando se devuelve una promesa no es necesario usar un funcion async(asincrona) ya que en si ya estamos devolviendo una promesa
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('René')
        }, 3000)

    });
}
// Las funciones asincronas siguen intentando obtener el dato que nosotros le hayamos indicamos para que esperaran obtener algo, seguiran intentando hasta obtenerlo y por lo cual se debe tener mucho cuidado por que no sino se puede quedar hasta un largo tiempo esperando ese dato por llegar
// Las promesas y callbacks no intentan mas de una vez para pdoer obtener un dato
let saludo = async () => {
    // Al usar uan funcion que nso devolvia una promesa pudimos manipularlo con el then cuadno eset preparado el dato o de esta forma donde por defecto buscara lo resuelto de la promesa, por lo cual hace inncesaria el uso del then a excepcionq ue nosotros queramos hacer algo mas con ella para poder hacer mas procedimientos
    let nombre = await getNombre();

    return `Hola ${nombre}`;
}

// getNombre()
//     .then(nombre => {
//         console.log(nombre);
//     })
//     .catch(e => {
//         console.log(`Error de ASYNC`, e);
//     })

saludo()
    .then(mensaje => {
        console.log(mensaje);
    }).catch(e => {
        console.log(`Error de async: ${e}`);
    })