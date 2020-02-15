const express = require('express');
const bodyParser = require('body-parser');
const execSQLQuery = require('../BD/config');

//definindo as rotas
const router = express.Router();

// rota - busca livros por isbn
router.get('/livro/isbn/:id',
    (req, res) => {
        let sqlQry = 'SELECT * FROM livro where isbn = ?';
        let values = [req.params.id];

        execSQLQuery(sqlQry, values,
            function(err, rows) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
            }
        );

    }
);

module.exports = router;
