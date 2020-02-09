const mysql = require('mysql');

const uriConnection = {
    host: 'db4free.net',
    port: 3306,
    user: 'pud_aluno_03',
    password: '12345678',
    database: 'pud_banco_03'
};


function execSQLQuery(sqlQry, values, res) {

    const connection = mysql.createConnection(uriConnection);

    connection.query(sqlQry, values,
        function (error, results, fields) {
            if (error)
                res.json(error);
            else
                res.json(results);
            connection.end();
            console.log('Executou: [sqlQry = ' + sqlQry + '] - [values = ' + values + ']');
        }
    );
}

module.exports = execSQLQuery;