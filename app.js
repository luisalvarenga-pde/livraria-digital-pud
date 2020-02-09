const express = require('express');
const bodyParser = require('body-parser');

const index = require('./rotas/index');
const livro = require('./rotas/livro');

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

// registrando as rotas
app.use('/', index);
app.use('/api/v1/livro/', livro);

module.exports = app;

