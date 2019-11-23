const express = require('express');
const app = express();

app.get('/Usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/Usuario', (req, res) => {

    let body = req.body;

    // console.log(body);

    if(!body.nombre){
        res.status(400).json({
            ok: false,
            message: 'El nombre es necesario'
        });
    }else{
        res.json({
            body
        });
    }
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