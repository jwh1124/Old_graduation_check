var mysql = require('mysql')
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'whdwk584859',
  database: 'db_jjj',
  multipleStatements: true
})

db.connect();

module.exports = db;