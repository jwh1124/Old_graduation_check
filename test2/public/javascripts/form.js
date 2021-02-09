var student_sheet = require("./student_sheet.js");
var db = require("./db");
var qs = require("querystring");


function  show_class(){

  console.log('sc1');
  var value, item;
  item = document.getElementsByClassName("item");
  value = document.getElementById("value").value.toUpperCase();

  console.log('sc2');
  db.query(`SELECT * FROM class_sheet where 교과목명 like '${'사고와'}%'`, function (error, sheet) {
    console.log(sheet);
  });

  console.log('sc3');

  item = value;
  // for(var i=0; i<list.study_list.length; i++){
  //   var show_list = [];
  //   show_list[i];

  // }
}