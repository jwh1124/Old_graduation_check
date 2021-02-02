var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'whdwk584859',
  database: 'db_jjj'
})

connection.connect()

module.exports = db;