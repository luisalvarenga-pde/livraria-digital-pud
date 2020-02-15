const mysql = require('mysql');

const uriConnection = {
    connectionLimit: 100,
    host: 'db4free.net',
    port: 3306,
    user: 'pud_aluno_03',
    password: '12345678',
    database: 'pud_banco_03',
    debug: true
};

const pool = mysql.createpool(uriconnection);

function executeQuery(query, values, callback) {

    pool.getConnection(function(err, connection) {
        if (err) {
            return callback(err, null);
        } else if (connection) {
            connection.query(query, values, function(err, rows, fields) {
                connection.release();
                if (err) {
                    return callback(err, null);
                }
                return callback(null, rows);
            })
        } else {
            return callback(true, "No Connection");
        }
    });
}

/*
function execSQLQuery(sqlQry, values, res) {

    const connection = mysql.createConnection(uriConnection);

    connection.query(sqlQry, values,
        function(error, results, fields) {
            if (error)
                res.json(error);
            else
                res.json(results);
            connection.end();
            console.log('Executou: [sqlQry = ' + sqlQry + '] - [values = ' + values + ']');
        }
    );
}
*/

module.exports = executeQuery;
