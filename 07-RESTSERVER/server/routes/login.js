const express = require('express');
const app = express();
// Paquete de alertas para encriptar las contraseñas
const bcrypt = require('bcrypt');
// Tokens Web Json
const jwt = require('jsonwebtoken');
// Modelo de la tabla en mongodb
const Usuario = require('../models/usuario');

app.post('/Login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    Usuario.findOne({ email: email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        // Si no se encuentra ningun usuario
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario o contraseña incorrrectos'
                }
            });
        }
        // Comparacion de contraseñas con la que encriptada en la base de datos
        if (!bcrypt.compareSync(password, usuarioDB.password)) {
            return res.status(400).json({
                ok: true,
                message: 'Usuario o contraseña incorrrectos'
            });
        }
        // Se crear el token en base al objeto que nosotros le indiquemos
        let token = jwt.sign({
            usuario: usuarioDB
        },
            process.env.SEED
        ,{
            expiresIn: process.env.CADUCIDAD_TOKEN
        });

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        });
    });
});


app.post('/google', (req, res) => {
    // let token = req.body.idtoken;

    // console.log(token);

    res.json({
        body: req.body
    })
});

module.exports = app;