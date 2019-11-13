const express = require('express');
const path = require('path');
const app = express();
// Sistema de vistas dinamicas handlebars
const hbs = require('hbs');
// Importar helpers de handlebars
// Cuando importamos un modulo este se ejecutara en si mismo en este caso es lo unico que queremos que se registre el helper
require(path.join(__dirname + '/public/hbs/helpers/helpers'));

const port = process.env.PORT || 3000;

// Crear archivos estaticos para acceder a el de forma global o que sean publicos

app.use(express.static(path.join(__dirname + '/public')));

// Con expres nosotros podemos crear rutas que serian en este punto funcionar como api como para redirigir a una pagina respectiva, o tambinen en su defecto renderizar una vista(pagina) mediante el uso de la api

// app.metodoHttp('/ruta', callback)

// ej:  app.get('/data', (req, res) => {res.send('data')}) != app.get('/data/test', (req, res) => {res.send('data')})
// app.get('/', (req, res) => {
//     // res.send('Hello world');
//     let salida = {
//         name: 'Rene',
//         edad: 32,
//         url: req.url
//     }

//     res.send(salida);
// });

// Si tu pides a alguna ruta que no exista se toamara como error con express ya que su comunicacion esta con las rutas

// Creacion de renderizacion de vistas del motor de express
hbs.registerPartials(path.join(__dirname + '/public/views/parciales'));
// Establecer template engine y configurarlo con las opciones que tenga 
// app.engine('.hbs', hbs({
//     helpers: require(path.join(__dirname + '/public/hbs/helpers'))
// }))
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname + '/public/views'));
// Helpers

// Para enviar datos conjunto a la vista que nosotros hayamos indicado simplemente poner unas {key:value} con la cual en el template engine de hbs nosotros usando {{key}} ya tendriamos su valor
// De esta forma podemos agregar informacion mediante peticiones de manera dinamica para desarrollar todas las vistas para que se conviertan en unicas
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Rene'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'download',
        extension: 'jpg'
    })
})

app.listen(port, () => {
    console.log(`El servidor esta corriendo en: http://localhost:${port}`);
});