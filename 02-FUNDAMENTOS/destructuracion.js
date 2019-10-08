let deadpoll = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function(){
        return `${ this.nombre } ${ this.apellido } ~ poder: ${ this.poder }`
    }
};

console.log(deadpoll.getNombre());

// let nombre = deadpoll.nombre;
// let apellido = deadpoll.apellido;
// let poder = deadpoll.poder;

// console.log(nombre, apellido, poder);

// Desestructurar un objeto usando las {propiedad: nombreVariable}
// podemos crear una variable nueva despues de la propiedad para que de esta forma nosotros podamos usarlar y no usemos la variable nombre dada por defecto en si de la propiedad por no asginarle un contenedor
// Formas
// 1- propiedadObjeto ej: let {nombre} = objetoPersona;
// console.log(nombre);
// 2- propiedadObjeto: variable ej: let {nombre:contenedorNombre} = objetoPersona
// console.log(contenedorNombre)
let { nombre: primerNombre, apellido, poder } = deadpoll;
// console.log(primerNombre);
console.log(primerNombre, apellido, poder);