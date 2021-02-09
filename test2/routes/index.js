var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var db = require ("../public/javascripts/db.js");
var name_of_index = '';

function study_list(req){
  db.query(`SELECT * FROM class_sheet where 교과목명 like '${req}%'`, function (error, sheet) {
    var class_sheet = [];
    class_sheet = sheet;
    console.log(class_sheet);
  });
}

/* GET home page. */
router.get('/', function(req, res) { 
  var class_name = name_of_index;
  var html = template.HTML('머하노',`<form action="/text_process" method="post">
  <p><input type="text" name="body" placeholder="과목입력"></p>
  <p>
    <input type="submit">
  </p>
</form>`);
  res.send(html);
  study_list(class_name);
});

router.post('/text_process',function(req,res){
  var post_name = req.body.body;
  
  name_of_index = post_name;
  console.log(post_name);
  res.redirect(`/`);
})

module.exports = router;
