const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// Configuraciones del server
require('./config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));

// Serializar el contenido a json con bodyparser
// Este extraer una porcion del cuepor de los datos que se envian por el req.body
// Pasear a: buffer, textos y urls decodificando los datos enviados mediante una peticion post
// urlencoded true => recibir cualquier cosa y false recibir solo json,urlparams,objectos ningun otro tipo mas
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

mongoose.connect('mongodb://localhost:27017/cafe', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
},
    (err, res) => {
        if (err) throw err;

        console.log('Base de datos corriendo localmente y conectada');
    }
);

app.listen(process.env.PORT, () => {
    console.log(`Se ha iniciado el servidor en: http://localhost:3000`);
});