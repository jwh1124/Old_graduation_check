var express = require('express');
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  var selectYear = '';
  var i = 0;
  var collegeOption = {
    y2017: ['인문과학대학','사회과학대학', '경영대학','호텔관광대학',
  '자연과학대학', '생명과학대학', '전자정보공학대학', '소프트웨어융합대학',
   '공과대학', '예체능대학', '법학전공']
  , y2018: ['인문과학대학','사회과학대학', '경영대학','호텔관광대학',
  '자연과학대학', '생명과학대학', '전자정보공학대학', '소프트웨어융합대학',
   '공과대학', '예체능대학', '법학전공']
  , y2019: ['인문과학대학','사회과학대학', '경영대학','호텔관광대학',
  '자연과학대학', '생명과학대학', '전자정보공학대학', '소프트웨어융합대학',
   '공과대학', '예체능대학', '법학전공', '연계융합전공']
  , y2020: ['인문과학대학','사회과학대학', '경영대학','호텔관광대학',
  '자연과학대학', '생명과학대학', '전자정보공학대학', '소프트웨어융합대학',
   '공과대학', '예체능대학', '법학전공', '연계융합전공']
  , y2021: ['인문과학대학','사회과학대학', '경영대학','호텔관광대학',
  '자연과학대학', '생명과학대학', '전자정보공학대학', '소프트웨어융합대학',
   '공과대학', '예체능대학', '법학전공', '연계융합전공']
  }
  var college = [];
  var selectCollege = '';
function select(year){
  console.log(year)
  if (year === '2017'){
    var college = collegeOption.y2017
    while (k < college.length){
    selectCollege += `<option value = "${college[k]}">${college[k]}</option>`
    k++
    return selectCollege
    }
  } else if (year === '2018'){
    var college = collegeOption.y2018
  } else if (year === '2019'){
    var college = collegeOption.y2019
  } else if (year === '2020'){
    var college = collegeOption.y2020
  } else if (year === '2021'){
    var college = collegeOption.y2021
  }
}


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
               <select class = "year-list" value = "name" name="입학연도" >
                ${selectYear}
               </select>
               
               <select class = "college" name="단과대학" >
               <option value = "전자정보공학대학">전자정보공학대학</option>
               </select>
               <select class = "major" name="학과">
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
