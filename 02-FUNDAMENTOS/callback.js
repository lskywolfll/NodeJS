// Se ejecuta despues de que algo sucede

// SetTimeout se ejecuta solo una vez
// setTimeout( () => {
//     console.log('Hola mundo');
// }, 3000);

let getUsuarioById = (id, callback ) => {

    let usuario = {
        nombre: 'René',
        // si una propiedad con el mismo nombre es igual entonce no es necesario poner id:id ya que es como redundante, solo hace falta poder id y tomara la propiedad e valor como uno haciendo mas facil el desarrollo
        id,
    }

    if (id === 20) {
        callback(`El usuario con id ${id}, no existe en la BD`);
    }else{
        // Para verificar si una funcion es correcta es indicar como primer parametro que no hay nada y se ejecutara loq ue indicamos en al funcion misma
        callback(null,usuario);
    }
}
// el primer parametro de un callback sea un error
getUsuarioById(1, (err, usuario) => {

    // Cualquier instruccion que sean objeto no es bueno usarl los templates literales `${variable}`
    // pero podemos manipulas su variable entonces nosotros podemos hacer objeto.propiedad y podremos ver su valor en concreto que nostros queremos que se muestre
    if(err){
        return console.log(err);
    }

    console.log(`Usuario de base de datos`, usuario);
})