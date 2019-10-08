console.log('Inicio del programa');

//setTimeout( callback(Para poder hacer alguna accion) )
//Formas
// 1- setTimeout( function(){*code*}, 1000 ) 1000 = 1 segundo
// 2- setTimeout( () => {*code*}, 1000)

setTimeout( function(){
    console.log('Primer Timeout');
}, 3000)

setTimeout( function(){
    console.log('Segundo Timeout');
}, 0)

setTimeout( function(){
    console.log('Tercer Timeout');
}, 0)

console.log('Fin del programa');