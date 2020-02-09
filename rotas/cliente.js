const express = require('express');
const bodyParser = require('body-parser');
const execSQLQuery = require('../BD/db');

//definindo as rotas 
const router = express.Router();

// rota clientes
router.get('/',
    async (req, res) => {
        let sqlQry = 'select lv.*, ar.* from livro lv join autorlivro al on al.idLivro = lv.idLivro join autor ar on ar.idAutor = al.idAutor';
        let values = [];

        await execSQLQuery(sqlQry, values, res);

    }
);

module.exports = router;





