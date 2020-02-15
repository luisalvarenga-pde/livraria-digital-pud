const express = require('express');
const bodyParser = require('body-parser');
const execSQLQuery = require('../BD/config');

//definindo as rotas 
const router = express.Router();

// rota clientes
router.get('/livro/isbn/:id',
    (req, res) => {
        let sqlQry = 'SELECT * FROM livro where isbn = ?';
        let values = [req.params.id];

        execSQLQuery(sqlQry, values, res);

    }
);

module.exports = router;
