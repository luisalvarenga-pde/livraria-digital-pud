const express = require('express');
const bodyParser = require('body-parser');
const execSQLQuery = require('../BD/config');

//definindo as rotas
const router = express.Router();

//Rota Genero
//Metodo HTTP GET
router.get('/:id?',
    (req, res) => {
        let sqlQry = 'select * from editora ';
        let values = [];

        if(req.params.id){
            sqlQry += ' WHERE idEditora = ?';
            values = [parseInt(req.params.id)];
        }

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

//Metodo HTTP Post
router.post('/',
    (req, res) => {
        const nome = req.body.nome;
        const cnpj = req.body.cnpj;

        const sqlQry = 'insert into editora (nome, cnpj) values (?)';
        const values = [[nome, cnpj]];

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

//Metodo HTTP DELETE
router.delete('/:id',
    (req, res) => {
        const sqlQry = 'delete from editora where idEditora = ?';
        const values = [parseInt(req.params.id)];

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

//Metodo HTTP PUT/PATCH
router.patch('/:id',
    (req, res) => {
        const sqlQry = 'update editora set nome = ?, cnpj = ? where idEditora = ?';
        const values = [req.body.nome , req.body.cnpj ,parseInt(req.params.id)];

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
