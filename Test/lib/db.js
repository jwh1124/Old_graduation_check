var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'simpson5378',
    database:'db_jjj'
  });
  db.connect();
  module.exports=db;