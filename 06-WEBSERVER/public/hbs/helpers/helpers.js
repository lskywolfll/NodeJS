const hbs = require('hbs');

hbs.registerHelper('get_year', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    
    let palabras = texto.split(' ');
    palabras.forEach((palabra, indice) => {
        palabras[indice] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});