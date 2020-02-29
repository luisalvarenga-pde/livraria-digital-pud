const express = require('express');
const bodyParser = require('body-parser');
const execSQLQuery = require('../BD/config');

//definindo as rotas
const router = express.Router();


//Rota Livro
// Metodo HTTP GET
router.get('/:id?',
    (req, res) => {
        let sqlQry = ' select lv.idLivro "livro.id"';
        sqlQry += ' , lv.nome "livro.nome"';
        sqlQry += ' , lv.descricao "livro.descricao"';
        sqlQry += ' , lv.edicao "livro.edicao"';
        sqlQry += ' , lv.ano_de_publicacao "livro.ano_de_publicacao"';
        sqlQry += ' , lv.livro_valor';
        sqlQry += ' , gn.idGenero "livro.genero.id"';
        sqlQry += ' , gn.nome "livro.genero.nome"';
        sqlQry += ' , ar.idAutor "livro.autor.id"';
        sqlQry += '  , ar.nome "livro.autor.nome"';
        sqlQry += ' from livro lv ';
        sqlQry += ' join autorlivro al ';
        sqlQry += '   on al.idLivro = lv.idLivro ';
        sqlQry += ' join autor ar';
        sqlQry += '   on ar.idAutor = al.idAutor';
        sqlQry += ' join genero gn';
        sqlQry += '   on lv.idGenero = gn.idGenero';

        let values = [];

        if (req.params.id) {
            sqlQry += 'WHERE idLivro = ?';
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

//Metodo POST - Livro
router.post('/',
    (req, res) => {
        const nome = req.body.nome;
        const descricao = req.body.descricao;
        const total_paginas = req.body.total_paginas;
        const livro_valor = req.body.livro_valor;
        const ano_de_publicacao = req.body.ano_de_publicacao;
        const edicao = req.body.edicao;

        const sqlQry = 'INSERT INTO pud_banco_03.livro (nome, decscricao, total_paginas, livro_valor, anode_de_publicacao, edicao) VALUES(?)';
        const values = [
            [nome, descricao, total_paginas, livro_valor, ano_de_publicacao, edicao]
        ];

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

// Metodo HTTP DELETE
router.delete('/:id',
    (req, res) => {
        const sqlQry = 'Delete From Livro Where idLivro = ?';
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

// Metodo HTTP PATCH
router.patch('/:id',
    (req, res) => {
        const sqlQry = 'UPDATE livro Set nome = ?, descricao = ?, total_paginas = ?, livro_valor = ?, ano_de_publicacao = ?, edicao = ? WHERE idLivro = ?';
        const values = [req.body.nome, req.body.descricao, req.body.total_paginas, req.body.total_paginas, req.body.livro_valor, req.body.ano_de_publicacao, req.body.edicao, parseInt(req.params.id)];

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
