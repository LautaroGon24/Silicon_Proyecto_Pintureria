const express = require('express');
const app = express();
app.use(express.json());
const morgan = require('morgan');
const mysqlConexion = require('./database/database')
//configuraciones
app.set('puerto', 3001)
//middlewares
app.use(morgan('dev'));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Ruta de aplicacion
app.use(require('./router/router'));

//inicio de server NODE
app.listen(app.get('puerto'), ()=>{
    console.log('el server se esta ejecutando en el puerto '+app.get('puerto'))
});