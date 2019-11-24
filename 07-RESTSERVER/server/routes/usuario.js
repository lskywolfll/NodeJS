const express = require('express');
const app = express();
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const _ = require('underscore');

app.get('/Usuario', (req, res) => {

    const desde = Number(req.query.desde) || 0;
    const limite = Number(req.query.limite) || 16;

    // desde = Number(desde);
    // hasta = Number(hasta);

    // 2-parametros nos sirve para indicar que datos queremos recibir al buscar en la bd de mongo, usamos simplemente un string con las propiedades respectivas a quere los cuales se separan mediante un espacio
    Usuario.find({}, 'nombre email google role estado img')
        .skip(desde)
        .limit(limite)
        .exec( (err, usuarios) => {
            if(err){
                return res.status(400).json({
                    ok: false,
                    err: err
                });
            }

            // Contar la cantidad de registros
            // el uso del {} como primer parametros si lo mandamos vacio entonces este nos mandara todos los datos completos indepeniente de lo que sea
            // Parametros
            // 1- filtro => {propiedad:valorDeseado} con los cuales solamente nos saldran los datos que entren en el Match de nuestro filtro ya sea nada o un dato especifico
            // 2- callback
            Usuario.countDocuments({}, (err, conteo) => {
                res.json({
                    ok: true,
                    usuarios,
                    cuantos: conteo
                });
            });
        })
});

app.post('/Usuario', (req, res) => {

    let body = req.body;

    let usuario = new Usuario({
        // Formas de recoleccion de datos enviados a la api, Locura completa
        // 1- req.body.propiedad
        // 2- body.propiedad
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
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
        // usuarioDB.password = null;
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });
});

app.delete('/Usuario', (req, res) => {
    res.json('delete Usuario');
});

app.put('/Usuario/:id', (req, res) => {
    // El parametros que se toman mediante la url con los (:variable) se tienen que llamar de la misma manera para que podamos obtener el dato enviado
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre','email','img', 'role', 'estado']);

    Usuario.findByIdAndUpdate(id, body,{ new: true, runValidators: true},(err, usuarioDB) => {

        if(err){
            return res.status(404).json({
                ok: false,
                err
            });
        }
        
        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });

    // Con el estandar ES6 es redundaten poner id: id, ya que por si solo poniendo id este lo instanciara con el mismo nombre de la variable
});

module.exports = app;