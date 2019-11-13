const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// Serializar el contenido a json con bodyparser
// Este extraer una porcion del cuepor de los datos que se envian por el req.body
// Pasear a: buffer, textos y urls decodificando los datos enviados mediante una peticion post

// Example

// // create application/json parser
// var jsonParser = bodyParser.json()
 
// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// // POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//   res.send('welcome, ' + req.body.username)
// })
 
// // POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
//   // create user in req.body
// });

// end Example

app.get('/', (req, res) => {
    res.send('Hola');
});

app.get('/Usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/Usuario', (req, res) => {

    let body = req.body;

    // console.log(body);

    res.json({
        body
    });
});

app.delete('/Usuario', (req, res) => {
    res.json('delete Usuario');
});

app.put('/Usuario/:idUser', (req, res) => {
    // El parametros que se toman mediante la url con los (:variable) se tienen que llamar de la misma manera para que podamos obtener el dato enviado
    let id = req.params.idUser;
    // Con el estandar ES6 es redundaten poner id: id, ya que por si solo poniendo id este lo instanciara con el mismo nombre de la variable
    res.json({
        id
    });
});

app.listen(3000, () => {
    console.log(`Se ha iniciado el servidor en: http://localhost:3000`);
})