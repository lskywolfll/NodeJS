
// Funcion normal
// function name(params) {
    
// }

// Funcion flecha o Arrow Functions
// var o let pero mejor const para el contenedor
// const nombre = (parametros) => {*code*} o const resultado = (num1,num2) => num1 + num2 o const nada = () => 'hola';
// con las {} creamos objetos y si queremos devolver algo o imprimir por consola se tendra que hacer dentro y no fuera
// sin las {} entonces nos retornara el valor o lo que sea que se les ocurra que tenga algo sea ya texto,numero,decimal,objeto completo y etc

function sumar(a, b){
    return a + b;
}
// Para el retorno del resultado no es necesario usar las {} con las funciones flechas
const suma = (a , b) => a + b;

function saludar() {
    return 'Hola Mundo';
}

const saludo = () => 'Hola Mundo';
// cuando solo es un parametro entonces se peude obviar el () pero las dos formas sirven de igual manera, elige la cual se te haga ams facil de comprender o a tu gusto
const saluda = nombre => `Hola ${nombre}`;

// console.log(suma(10,20));
// console.log(saludar());
// console.log(saludo());
console.log(saluda('rene'));

// Base
// let deadpoll = {
//     nombre: 'Wade',
//     apellido: 'Winston',
//     poder: 'Regeneración',
//     getNombre: function(){
//         return `${ this.nombre } ${ this.apellido } ~ poder: ${ this.poder }`
//     }
// };

// Arrow function o funcion flecha
// el valor del this apunta al valro que tenga el objeto this fuera de la funcion, osea fuera del objeto
// En node no tenemos el window como instancia como en el navegador donde se ejecuta primero, esta presente global 
let deadpoll = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    // Error por que el this no se usa en donde invoca, esta afuera de la funcion
    // getNombre = () => `${this.nombre} ${this.apellido} ~ poder: ${this.poder}`
    getNombre(){
       return `${this.nombre} ${this.apellido} ~ poder: ${this.poder}` 
    }
};

console.log(deadpoll.getNombre());