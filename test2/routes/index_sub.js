var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var db = require ("../public/javascripts/db.js");
var class_sheet='';
var i = 0;

async function study_list(req){
 await db.query(`SELECT * FROM class_sheet where 교과목명 like '${req}%'`, function (error, sheet) {
   class_sheet = (JSON.parse(JSON.stringify(sheet)));
   console.log(class_sheet);
  });
}

function show_list(length,num){
  i = length.length;
  var list =[];
  for (j =0; j< i; j++){
  list[j] = JSON.stringify(class_sheet[j].교과목명);
  }
  return list[num];
}


/* GET home page. */
router.get('/', function(req, res) { 
  var html_m = template.HTML_main('과목선택창',
  `
  <form action='/search' method='get'>
  <p>
    <input type="submit">
  </p>
</form>
`
);
  res.send(html_m);
});


router.get('/search', function(req, res) { 
  var html_s = template.HTML_search('과목검색창',
  `
  <form action='/search_process' method='post'>
  <p>
  <input type="text" name="body" placeholder="과목입력">
  </p>
  <p>
    <input type="submit">
  </p>
  </form>
  `,`
  <form action="/" method="post">
    1학년<br>
    <input type='checkbox' name='1st' value = '${show_list(class_sheet,0)}'> ${show_list(class_sheet,0)}
    <br>
    <input type='checkbox' name='1st' value = '${show_list(class_sheet,1)}'> ${show_list(class_sheet,1)}
    <br>
    <input type='checkbox' name='1st' value = '${show_list(class_sheet,2)}'> ${show_list(class_sheet,2)}
    <br>
    <input type='checkbox' name='1st' value = '${show_list(class_sheet,3)}'> ${show_list(class_sheet,3)}
    <br>
    <input type='checkbox' name='1st' value = '${show_list(class_sheet,4)}'> ${show_list(class_sheet,4)}
    <p>
    <input type="submit">
    </p>
  </form>
  `);
  res.send(html_s);
});


router.post('/search_process',function(req,res){
  var post_name = req.body.body;
  study_list(post_name);
  res.redirect(`/search`);
})

module.exports = router;
