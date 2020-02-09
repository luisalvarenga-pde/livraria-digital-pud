const express = require('express');
const bodyParser = require('body-parser');
const execSQLQuery = require('../BD/config');

// configurando as rotas para Livro
const router = express.Router();

// rota /api/v1/livro/
router.get('/',
    async (req, res) => {
        let sqlQry = 'select lv.*, ar.* from livro lv join autorlivro al on al.idLivro = lv.idLivro join autor ar on ar.idAutor = al.idAutor';
        let values = [];

        await execSQLQuery(sqlQry, values, res);

    }
);

module.exports = router;





