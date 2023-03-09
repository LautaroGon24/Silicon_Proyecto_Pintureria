const mysql = require('mysql');

const mysqlConexion= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'pintureria'
});
mysqlConexion.connect(function(err){
    if(err){
        console.log('error de conexion', err);
        return;
    }else{
        console.log('conexion exitosa')
    }
});

module.exports= mysqlConexion;