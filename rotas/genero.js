const express = require('express');
const bodyParser = require('body-parser');
const execSQLQuery = require('../bd/config');
 
//definindo as rotas
const router = express.Router();

//Rota Genero
//Metodo HTTP GET
router.get('/:id?',
    (req, res) => {
        let sqlQry = 'SELECT * FROM genero';
        let values = [];

        console.log (req.params.id);

        if(req.params.id){
            sqlQry += ' WHERE idGenero = ?';
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

        const sqlQry = 'INSERT INTO pud_banco_03.genero (nome) VALUES(?)';
        const values = [[nome]];

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
        const sqlQry = 'DELETE FROM genero WHERE idGenero = ?';
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
        const sqlQry = 'UPDATE genero Set nome = ? WHERE idGenero = ?';
        const values = [req.body.nome ,parseInt(req.params.id)];

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
