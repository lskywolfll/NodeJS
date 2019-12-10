const express = require('express');
const app = express();
// Paquete de alertas para encriptar las contraseñas
const bcrypt = require('bcrypt');
// Tokens Web Json
const jwt = require('jsonwebtoken');
// Validaciones de google
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
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
            , {
                expiresIn: process.env.CADUCIDAD_TOKEN
            });

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        });
    });
});

// Configuraciones de Google
async function verify(token) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    // Propiedades a retornar con los datos obtenidos a partir del token del usuario
    return {
        nombre: payload.name,
        email: payload.email,
        imageUrl: payload.picture
    }
}

app.post('/google', async (req, res) => {

    try {
        const googleUser = await verify(req.body.idtoken)
            .catch(err => {
                return res.status(403).send({
                    ok: false,
                    err: err
                });
            });

        res.json({
            usuario: googleUser
        });
    } catch (error) {
        res.status(500).send({
            ok: false,
            err: error
        })
    }
});

module.exports = app;