const express = require('express');
const bodyParser = require('body-parser');
const execSQLQuery = require('../bd/config');

//definindo as rotas 
const router = express.Router();


//Rota Livro
// Metodo HTTP GET
router.get('/:id?',
    (req, res) => {
        let = sqlQry ='SELECT * FROM livro ';
        let values = [];

        if(req.params.id){
            sqlQry += 'WHERE idLivro = ?';
            values = [parseInt(req.params.id)];
        }
        execSQLQuery(sqlQry, values, res);
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
    const values = [[nome, decscricao, total_paginas, livro_valor, anode_de_publicacao, edicao]];

    execSQLQuery(sqlQry, values, res);
    }
);

// Metodo HTTP DELETE
router.delete('/:id',
    (req, res) => {
        const sqlQry = 'Delete From Livro Where idLivro = ?';
        const values = [parseInt(req.params.id)];

        execSQLQuery(sqlQry, values, res);
    }
);

// Metodo HTTP PATCH
router.patch('/:id',
    (req, res) => {
        const sqlQry = 'UPDATE livro Set nome = ?, descricao = ?, total_paginas = ?, livro_valor = ?, ano_de_publicacao = ?, edicao = ? WHERE idLivro = ?'; 
        const values =   [req.body.nome, req.body.descricao, req.body.total_paginas, req.body.total_paginas, req.body.livro_valor, req.body.ano_de_publicacao, req.body.edicao, parseInt(req.params.id)];

        execSQLQuery(sqlQry, values, res);
    }
);


router.get('/livro/isbn/:id',
    (req, res) => {
        let = sqlQry ='SELECT * FROM livro where isbn = ?';
        let values = [];

        execSQLQuery(sqlQry, values, res);
        }
);

module.exports = router;
