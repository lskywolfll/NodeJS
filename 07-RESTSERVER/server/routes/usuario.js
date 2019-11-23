const express = require('express');
const app = express();
const Usuario = require('../models/usuario');

app.get('/Usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/Usuario', (req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        // Formas de recoleccion de datos enviados a la api, Locura completa
        // 1- req.body.propiedad
        // 2- body.propiedad
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    });

    // Al guardar en mongo recibimos 2 parametros un erro y el usuario
    usuario.save((err, usuarioDB) => {
        if(err){
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
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

module.exports = app;