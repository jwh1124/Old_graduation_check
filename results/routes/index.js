var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db');



/* GET home page. */
router.get('/', function(req, res, next) {
  var selectYear = '';
  var i = 0;
  
  var year = [2017, 2018, 2019, 2020, 2021];
  while(i < year.length){
    selectYear += `<option value = "${year[i]}">${year[i]}</option>`
    i++;
  }
  var html = `
        <!doctype html>
        <html>
        <head>
            <title>GRADUATION</title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1><a href="/">Graduation-CHECK</a></h1>

               <form action="/results/selected" method = "post">
               <select name="입학연도">
                ${selectYear};
               </select>
               
               <select name="단과대학">
               <option value = "전자정보공학대학">전자정보공학대학</option>
               </select>
               <select name="학과">
               <option value = "전자정보통신공학과">전자정보통신공학과</option>
               </select>
               <p>
                <input type="submit">
               </p>
               </form>
                
            
        </body>
        </html>
    `;
  res.send(html)
  
});

module.exports = router;
