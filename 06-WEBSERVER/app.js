

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'application/json'});

    let salida = {
        name: 'Rene',
        edad: 32,
        url: req.url
    }
    res.write('Hola mundo');
    res.write(JSON.stringify(salida))
    // Si no le indicamos que se ha terminado el escribir en el dom, entonces no terminara la ejecucion aun que se arranque el servidor
    res.end()
})
    .listen(8080);

console.log('Escuchado el puerto 8080');