const express = require('express');
const bodyParser = require('body-parser');

const index = require('./rotas/index');
const livro = require('./rotas/livro');
const busca = require('./rotas/busca');
const genero = require('./rotas/genero');
const editora = require('./rotas/editora');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configurando os Headers HTTP para o response
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, PATCH, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

// registrando as rotas da api
app.use('/', index);
app.use('/api/v1/busca/', busca);
app.use('/api/v1/genero/', genero);
app.use('/api/v1/livro/', livro);
app.use('/api/v1/editora/', editora);

// exporta o app express
module.exports = app;
