
// =================================
//  Configuraciones
// ================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let BD = ''

if(process.env.NODE_ENV === 'dev'){
    BD = 'mongodb://localhost:27017/cafe';
}else{
    BD = 'mongodb+srv://db_user_sky:1llD1UgBueud8bAj@cluster0-b0vhf.mongodb.net/cafe';
}

const config = {
    entorno: process.env.NODE_ENV || 'dev',
    dbUrl: BD,
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    // publicRoute: process.env.PUBLIC_ROUTE || '/app',
    // filesRoute: process.env.FILES_ROUTE || 'files',
};


module.exports = config;