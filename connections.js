var mysql_obj = require('mysql');

var db_connection = mysql_obj.createConnection({
    host     : '',
    user     : '',
    password : '',
    port: 3306, //port mysql
    database : ''
}, 'request');

db_connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
});

module.exports = db_connection;