// =================================
// Puerto
//==================================
process.env.PORT=process.env.PORT || 3000;

// =================================
// Entorno
//==================================
process.env.NODE_ENV=process.env.NODE_ENV || 'dev';

// =================================
// Base de datos
//==================================

let urlDB;

if(process.env.NODE_ENV==='dev'){
    urlDB="mongodb://localhost:27017/cocoa";
}else{
    urlDB=process.env.MONGO_URI
}

process.env.URLDB=urlDB;

// =================================
// Vencimiento del Token
//==================================
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN=60*60*24*30;

// =================================
// seed DE AUTENTICACION
//==================================

process.env.SEED=process.env.SEED || 'este-es-la-clave-en-dev';
