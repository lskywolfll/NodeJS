
// =================================
//  Configuraciones
// =================================
const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://user:<password>@cluster0-b0vhf.mongodb.net/cafe',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    // publicRoute: process.env.PUBLIC_ROUTE || '/app',
    // filesRoute: process.env.FILES_ROUTE || 'files',
};

module.exports = config;