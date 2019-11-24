//Gestionar la conexcion
const db = require('mongoose');
//Conexion con base de datos mongoose
//mongodb+srv://DB_USER:DB_PASSWORD@DB_HOST/DB_NAME
//mongodb+srv://db_user_sky:1llD1UgBueud8bAj@cluster0-b0vhf.mongodb.net/telegrom_db
db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    });

    console.log('[db] Conectada con éxito');
}

module.exports = connect;