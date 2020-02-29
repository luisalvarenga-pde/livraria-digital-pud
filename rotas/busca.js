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

// rota - busca livros por autor
router.get('/livro/autor/',
    (req, res) => {
        let sqlQry = 'SELECT l.nome, a.nome ';
        sqlQry += 'FROM livro as l ';
        sqlQry += 'INNER JOIN autorlivro as al ';
        sqlQry += 'ON l.idLivro = al.idAutor ';
        sqlQry += 'INNER JOIN autor as a ';
        sqlQry += 'ON a.idAutor = al.idAutor ';
        sqlQry += 'WHERE a.nome like ?';

        let nome = '%' + req.query.nome + '%';

        let values = [nome];

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

// rota - busca livros por editora
router.get('/livro/editora/',
    (req, res) => {
        let sqlQry = 'SELECT * FROM livro where editora = ?';
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
