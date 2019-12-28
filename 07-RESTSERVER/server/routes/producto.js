const express = require('express');
const app = express();
// Toma de valores especifidos mediante una funcion
const _ = require('underscore');
// Middlewares de seguridad
const { verficarToken } = require('../middleware/autenticacion');
const Producto = require('../models/producto');
// Funciones del tiempo
const { Fecha_Formatear } = require('../Controllers/ControladorDeTiempo');

// Recibir todos los productos  y populados respectivos para las colecciones respectivas 
// populate => es como hacer un select * from table where nombre = 'nombre_user'
// Tambien se puede interpretar como hacer unos inner join o left join
// Practicamente recibir todos los datos que niosotros indiquemos de las colleciones de los object id para poder recibir los datos de esa tablas
app.get('/productos',verficarToken, (req, res) => {
    // Limites de paginacion por la inmensa cantidad de datos que esta tabla pueda tener por su rol dado
    const desde = Number(req.query.desde) || 0;
    const limite = Number(req.query.limite) || 16;
    // Este se puede ver como el estado del producto si es todavia les queda stock entonces aparecera habilitado y sino no lo estara
    const activacion = req.query.activacion || true;
    // find( { aqui va las restricciones que podamos querer ver si son los productos disponibles o los no disponibles } )
    Producto.find({ disponible: activacion })
        // Unir datos y si tenemos un id respectivo a esa tabla referenciadas en el esquema de datos que poseemos dentro de nuestro modelo este nos arrojara toda la info que posea
        // Practicamente por defecto se tomara el object id y esto puede cambiarse por una foreign key la cual estara de ejemplo en el archivo experimental
        // Tener en mente que el nombre debe ser se igual al nombre indicado al crear en el esquema ej: Categoria o Usuario revisar los modelos al final
        .populate('usuario', 'nombre email')
        .populate('categoria', 'tipo descripcion')
        // Limites de datos para ver
        .skip(desde)
        .limit(limite)
        .exec((err, productosDB) => {
            if(err){
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                productos: productosDB
            });
        });
});
// Recibir un product id y recibir todos los datos especirficos que posee pero teniendo en mente que este solo modificaremos la parte del producto en si
// Aun que tambien es posible cambiar el usuario quien lo hizo pero todo va a depender de la logica y seguridad que le queramos dar a los datos
app.get('/producto/:id',verficarToken, (req, res) => {

    const id = req.params.id;
    
    Producto.findById(id,(err, productoDB) => {
        if(err){
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if(!productoDB){
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No existe un usuario con el id ingresado'
                }
            });
        }

        return res.status(200).json({
            ok: true,
            producto: productoDB
        });
    })
    .populate('usuario categoria', 'nombre email tipo descripcion');
});
// Crea un producto con los datos que ncesita
app.post('/producto',verficarToken, (req, res) => {
    // Datos necesarios para poder un dato en base al esquema del modelo creado
    const body = _.pick(req.body, ['nombre', 'precioUni', 'descripcion', 'categoria']);
    const fecha = Fecha_Formatear(new Date());

    const producto = new Producto({
        ...body,
        disponible: true,
        fecha,
        usuario: req.usuario._id
    });

    producto.save((err, productoDB) => {
        if(err){
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if(!productoDB){
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No se ha podido crear el producto'
                }
            });
        }

        return res.status(200).json({
            ok: true,
            producto: productoDB
        });
    });
});
// Actualizar un producto en base a su id correspondiente
app.put('/producto/:id',verficarToken, (req, res) => {
    // Datos necesarios
    const id = req.params.id;
    // Falta definir si es que la categoria puede cambiar al igual que el usuario
    const body = _.pick(req.body, ['nombre', 'precioUni', 'descripcion', 'disponible']);
    const fecha = Fecha_Formatear(new Date());
    // ECMAC it's very happy and revolucionary
    const cambios = {
        ...body,
        fecha
    }

    Producto.findByIdAndUpdate(id, cambios, (err, productoDB) => {
        if(err){
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if(!productoDB){
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No existe un producto con el id ingresado'
                }
            });
        }

        return res.status(200).json({
            ok: true,
            producto: productoDB
        });
    });
});
// Eliminar un producto respectivo al id 
app.delete('/producto/:id',verficarToken, (req, res) => {
    // Los params son aquellos que son insertado de inmediato en donde sale el :id ej: /producto/1
    const id = req.params.id;

    Producto.findByIdAndRemove(id, (err, productoDB) => {
        if(err){
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if(!productoDB){
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No existe un producto con el id ingresado'
                }
            });
        }

        return res.status(200).json({
            ok: true,
            producto: productoDB
        });
    });
});


module.exports = app;