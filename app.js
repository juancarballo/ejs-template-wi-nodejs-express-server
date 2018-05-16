'use strict';

const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const routes = require('./routes');

//instanciando el servidor
const app = express();

//configuraciones generales del servidor
app.set('server_name', 'Blog');
app.set('country', 'Costa Rica');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set(morgan('dev'));

//enrutadores
app.use(routes);
app.get('*', (req, res) => {
    console.log('we cant found this page');
})

//escuchando servidor
app.listen(3000, function () {
    console.log(`server ${app.get('server_name')} online`);
});








