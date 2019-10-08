let deadpoll = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre: function(){
        return `${ this.nombre } ${ this.apellido } ~ poder: ${ this.poder }`
    }
};


console.log(deadpoll.getNombre());