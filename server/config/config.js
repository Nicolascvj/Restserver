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
    urlDB="mongodb+srv://cocoa-user:YS0MqpLdHzpBHMOl@cluster0.l2gsu.mongodb.net/cocoa"
}

process.env.URLDB=urlDB;
