const axios = require('axios');
const {getClima} = require('../clima/clima');
// Ya que es una funcion asincrona nos deovlvera una promesa
const getLugarLatLng = async (direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '70bc61062cmshc47d454342ff977p15c12djsnebcd016e23bf'
        }
    });

    const respuesta = await instance.get();

    if(respuesta.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`)
    }
    // Abreviatura para pdoer acceder a los datos recibidor por la peticion rest
    const data = respuesta.data.Results[0];

    const direction = data.name;
    const latitud = data.lat;
    const longitud = data.lon;
    const grados = await getClima(latitud, longitud);

    return {
        direction,
        latitud,
        longitud,
        grados
    }
};

module.exports = {
    climaLugar: getLugarLatLng,
};