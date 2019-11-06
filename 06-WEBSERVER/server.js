const express = require('express');
const path = require('path');
const app = express();

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
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname + '/public/views'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Rene', 
        year:new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('El servidor esta corriendo en: http://localhost:3000');
});