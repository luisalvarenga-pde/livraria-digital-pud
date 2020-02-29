const express = require('express');
const bodyParser = require('body-parser');
const execSQLQuery = require('../bd/config');

//definindo as rotas
const router = express.Router();


router.get('/livro/',
    (req, res) => {
        let sqlQry = 'SELECT * FROM livro WHERE nome LIKE ? ';
        let nome = '%' + req.query.nome + '%';
        let values = [nome];
        console.log(values);
        execSQLQuery(sqlQry, values,
            function(err, rows){
                if(err){
                    res.json(err);
                }else{
                    res.json(rows);
                }
            }
        );   
    }

);

router.get('')
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
        let sqlQry = 'SELECT  l.* , e.nome ';
        sqlQry += 'from editora as e ';
        sqlQry += 'inner join livro as l ';
        sqlQry += 'on l.idEditora = e.idEditora ';
        sqlQry += 'Where e.nome like ?';

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



module.exports = router;
