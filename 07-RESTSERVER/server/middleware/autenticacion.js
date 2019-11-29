const jwt = require('jsonwebtoken');

/**
 * Verificar Token
 */
const verficarToken = (req, res, next) => {

    // Propiedad del header y el valor que enviamos a la api
    const token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        // Si no es valido con el seed(secreto) nuestro lanzara un error
        if(err){
            return res.status(401).json({
                ok: false,
                err: err
            });
        }

        req.usuario = decoded.usuario;
        console.log(decoded.usuario);
        next();
    });
};


module.exports = {
    verficarToken
}