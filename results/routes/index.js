var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var db = require ("../public/javascripts/db.js");
var fs = require('fs');
var class_sheet='';
var major_class_sheet_1='';
var major_class_sheet_2='';
var major_class_sheet_3='';
var major_class_sheet_4='';
var post_select=[];
var 입학연도 = '';
var 단과대학 = '';
var 학과 = '';
var userClass = [];
// function major_study_list_1(){
//   db.query(`SELECT * FROM class_sheet WHERE 개설대학=? AND 개설학과전공=? limit 2`,[단과대학, 학과], function(err, sheet1){
    

//     console.log(sheet1)


//  });
// }
// function major_study_list_2(){
//   db.query(`SELECT * FROM class_sheet WHERE 개설대학=? AND 개설학과전공=? AND '학년(학기)'=2   `,[단과대학, 학과], function(err, sheet2){
//      console.log(sheet2)
//  });
// }
// function major_study_list_3(){
//   db.query(`SELECT * FROM class_sheet WHERE 개설대학=? AND 개설학과전공=? AND replace(학년\\n(학기),'\r\\n','') = '3'  `,[단과대학, 학과], function(err, sheet3){
//      console.log(sheet3)
//   });
// }
// function major_study_list_4(){
//   db.query(`SELECT * FROM class_sheet WHERE 개설대학=? AND 개설학과전공=? AND 학년\\n(학기) = '4'  LIMIT 1 `,[단과대학, 학과], function(err, sheet4){
//      console.log(sheet4)
//  });

async function study_list(req){
 await db.query(`SELECT * FROM class_sheet where 교과목명 like '${req}%'`, function (error, sheet) {

   //console.log(class_sheet);
  });
}

async function major_study_list_1(){
  await db.query(`SELECT DISTINCT 교과목명 FROM class_sheet WHERE 개설대학=? AND 개설학과전공=? AND year='1' `,[단과대학,학과], function(err, sheet){
    major_class_sheet_1 = JSON.parse(JSON.stringify(sheet));
  });
  console.log(major_class_sheet_1)
}
async function major_study_list_2(){
  await db.query(`SELECT DISTINCT 교과목명 FROM class_sheet WHERE 개설대학=? AND 개설학과전공=? AND year='2' `,[단과대학,학과], function(err, sheet){
    major_class_sheet_2 = (JSON.parse(JSON.stringify(sheet)));
  });
}
async function major_study_list_3(){
  await db.query(`SELECT DISTINCT 교과목명 FROM class_sheet WHERE 개설대학=? AND 개설학과전공=? AND year='3' `,[단과대학,학과], function(err, sheet){
    major_class_sheet_3 = (JSON.parse(JSON.stringify(sheet)));
    
  });
}
async function major_study_list_4(){
  await db.query(`SELECT DISTINCT 교과목명 FROM class_sheet WHERE 개설대학=? AND 개설학과전공=? AND year='4' `,[단과대학,학과], function(err, sheet){
    major_class_sheet_4 = (JSON.parse(JSON.stringify(sheet)));
  });
}

function show_list(length,num){
  i = length.length;
  var list =[];
  for (j =0; j< i; j++){
  list[j] = major_class_sheet[j].교과목명;

  }
  return list[num];
}

function show_major_list_1(length,num){
  i = length.length;
  var list =[];
  for (j =0; j< i; j++){
  list[j] = major_class_sheet_1[j].교과목명;
  }
  return list[num];
}
function show_major_list_2(length,num){
  i = length.length;
  var list =[];
  for (j =0; j< i; j++){
  list[j] = major_class_sheet_2[j].교과목명;
  }
  return list[num];
}

function show_major_list_3(length,num){
  i = length.length;
  var list =[];
  for (j =0; j< i; j++){
  list[j] = major_class_sheet_3[j].교과목명;
  }
  return list[num];
}

function show_major_list_4(length,num){
  i = length.length;
  var list =[];
  for (j =0; j< i; j++){
  list[j] = major_class_sheet_4[j].교과목명;
  }
  return list[num];
}

function show_major_list_5(length,num){
  i = length.length;
  var list =[];
  for (j =0; j< i; j++){
  list[j] = post_select[j];
  }
  return list[num];
}









/* GET home page. */

router.get('/', function(req, res, next) {
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
               <form action="/go_to_select" method = "post">
               <select name="입학연도">
                ${selectYear};
               </select>
               <select name="단과대학" title>
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


router.get('/select', function(req, res) { 
  major_study_list_1()
  major_study_list_2()
  major_study_list_3()
  major_study_list_4()



  var list1='';
  var list2='';
  var list3='';
  var list4='';
  var list5='';
  var i=0,j=0,k=0,l=0,a=0;
  while(i < major_class_sheet_1.length){
    list1 += `<input type='checkbox' name='FST' value = '${show_major_list_1(major_class_sheet_1,i)}'>${show_major_list_1(major_class_sheet_1,i)}  `
    i++;
  }
  while(j < major_class_sheet_2.length){
    list2 += `<input type='checkbox' name='SND' value = '${show_major_list_2(major_class_sheet_2,j)}'>${show_major_list_2(major_class_sheet_2,j)}  `
    j++;
  }
  while(k < major_class_sheet_3.length){
    list3 += `<input type='checkbox' name='TRD' value = '${show_major_list_3(major_class_sheet_3,k)}'>${show_major_list_3(major_class_sheet_3,k)}  `
    k++;
  }
  while(l < major_class_sheet_4.length){
    list4 += `<input type='checkbox' name='FTH' value = '${show_major_list_4(major_class_sheet_4,l)}'>${show_major_list_4(major_class_sheet_4,l)}  `
    l++;
  }
  while(a < post_select.length){
    list5 += `<input type='checkbox' name='LST' value = '${show_major_list_5(post_select,a)}'checked="checked">${show_major_list_5(post_select,a)}  `
    a++;
  }
  var html = template.HTML_selected('과목선택창',
  `
  <form action='/go_to_search' method='post'>
  <p>
    <input type="submit">
  </p>
</form>
`
,
list1
,
list2
,
list3
,
list4
,
list5
,  
`
<p>
  <input type="submit">
</p>
</form>
`
,
`<input type='reset' id='reset' value='Reset' name='reset' onclick="resetForm(this.form);"> `
);
  res.send(html);
});


router.get('/search', function(req, res) { 
  var list='';
  var list2= '';
  var i=0,a=0;
  while(i < class_sheet.length){
    list += `<input type='checkbox' name='First' value = '${show_list(class_sheet,i)}'>${show_list(class_sheet,i)}<br>`
    i++;
  }
  while(a < post_select.length){
    list2 += `<input type='checkbox' name='First' value = '${show_major_list_5(post_select,a)}'checked="checked">${show_major_list_5(post_select,a)}<br>  `
    a++;
  }
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
  <form action="/select_process" method="post">
  ${list2}
  ${list}
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

router.post('/select_process',function(req,res){
  post_select = req.body.First;
  res.redirect(`/select`);
})

router.post('/go_to_search',function(req,res){
  res.redirect(`/search`);
})

router.post('/go_to_select',function(req,res){
  var post = req.body;
  단과대학 = post.단과대학;
  학과 = post.학과;
  입학연도 = 'y'+post.입학연도; 

  res.redirect('/select');
})

router.post('/checked_data',function(req,res){
  console.log(req.body.FST);
  console.log(req.body.SND);
  console.log(req.body.TRD);
  console.log(req.body.FTH);
  console.log(req.body.LST);  
  if (Array.isArray(req.body.FST) === true){
    while (i<req.body.FST.length){
        userClass[i] = req.body.FST[i];
        i++;
    }
  } else{
    userClass.push(req.body.FST)
  }
  
  if (Array.isArray(req.body.SND) === true){
  while (i<req.body.SND.length){
      userClass[i] = req.body.SND[i];
      i++;
  }
  } else{

    userClass.push(req.body.SND)
  }

  if (Array.isArray(req.body.TRD) === true){
    while (i<req.body.TRD.length){
        userClass[i] = req.body.TRD[i];
        i++;
    }
  } else{
    userClass.push(req.body.TRD)
  }

  if (Array.isArray(req.body.FTH) === true){
    while (i<req.body.FTH.length){
        userClass[i] = req.body.FTH[i];
        i++;
    }
  } else{
    userClass.push(req.body.FTH)
  }

  if (Array.isArray(req.body.LST) === true){
    while (i<req.body.LST.length){
        userClass[i] = req.body.LST[i];
        i++;
    }
  } else{
    userClass.push(req.body.LST)
  } 
  db.query(`SELECT * FROM test WHERE  교과목명 IN (?) `,[userClass], function(err, search){
    while ( k < search.length) {
        if (search[k]['이수\n구분'] === "전공필수"){
            학점계산.전필 += search[k].학점
            학점계산.이수학점 += search[k].학점
            k ++;
        } else if (search[k]['이수\n구분'] === "전공선택"){
            학점계산.전선 += search[k].학점
            학점계산.이수학점 += search[k].학점
            k ++;
        } else if (search[k]['이수\n구분'] === "교양선택(1영역)"){
            학점계산.교선1 += search[k].학점
            학점계산.이수학점 += search[k].학점
            k ++;
        } else if (search[k]['이수\n구분'] === "교양선택(2영역)"){
            학점계산.교선2 += search[k].학점
            학점계산.이수학점 += search[k].학점
            k ++;
        } else if (search[k]['이수\n구분'] === "학문기초교양"){
            학점계산.기교 += search[k].학점
            학점계산.이수학점 += search[k].학점
            k ++;
        } else if (search[k]['이수\n구분'] === "교양필수"){
            학점계산.교필 += search[k].학점
            학점계산.이수학점 += search[k].학점
            k ++;
        } 
        }
    })





  res.redirect('/results');
})







module.exports = router;
