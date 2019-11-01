const axios = require('axios');

const getClima = async (latitud, longitud) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&units=metric&appid=db8f39ef85675b370c61c76cd1dddaa7`);

    return respuesta.data.main.temp;
}

module.exports = {
    getClima
};