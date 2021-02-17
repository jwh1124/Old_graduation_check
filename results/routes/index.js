var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');
var db = require ("../public/javascripts/db.js");
var fs = require('fs');


const condition = {
  전자정보통신공학과 : {
     
     "2017" : {
         교필 : 11,
         교필_과목: [
             'English Listening Practice 1 -2',
             'English Reading Practice 1 -2',
             '문제해결을위한글쓰기와발표 -2',
             '서양철학:쟁점과토론 -2',
             '대학생활과진로설계 -1',
             '세종사회봉사1 -1',
             '취업역량개발론(->취창업과진로설계) -1'
         ],
         교선1 : 15,
         교선1_영역 : [
             '사상과역사',
             '사회와문화',
             '융합과창업',
             '자연과과학기술',
             '세계와지구촌'
         ],
         기교 : 18,
         기교_과목 : [
             '일변수미적분학',
             '공업수학1',
             '공업수학2',
             '일반물리학및실험1',
             '일반물리학및실험2',
             '일반화학',
         ],
         전필 : 42,
         전선 : 30,
         졸업학점 : 130
 
         },
     "2018" : {
         교필 : 13,
         교필_과목: [
             'English Listening Practice 1 -2',
             'English Reading Practice 1 -2',
             '문제해결을위한글쓰기와발표 -3',
             '서양철학:쟁점과토론 -3',
             '대학생활과진로설계 -1',
             '세종사회봉사1 -1',
             '취업역량개발론(->취창업과진로설계) -1'
         ],
         교선1 : 21,
         교선1_영역 : [
             '사상과역사',
             '사회와문화',
             '융합과창업',
             '자연과과학기술',
             '세계와지구촌'
         ],
         기교 : 18,
         기교_과목 : [
             '일변수미적분학',
             '공업수학1',
             '공업수학2',
             '일반물리학및실험1',
             '일반물리학및실험2',
             '일반화학',
         ],
         전필 : 42,
         전선 : 30,
         졸업학점 : 130
     },
     "2019" : {
         교필 : 14,
         교필_과목: [
             'English Listening Practice 1 -2',
             'English Reading Practice 1 -2',
             '문제해결을위한글쓰기와발표 -3',
             '서양철학:쟁점과토론 -3',
             '대학생활과진로설계 -1',
             '세종사회봉사1 -1',
             '창업과기업가정신1 -1',
             '취업역량개발론(->취창업과진로설계) -1'
         ],
         교선1 : 21,
         교선1_영역 : [
             '사상과역사',
             '사회와문화',
             '융합과창업',
             '자연과과학기술',
             '세계와지구촌'
         ],
         기교 : 18,
         기교_과목 : [
             '일변수미적분학',
             '공업수학1',
             '공업수학2',
             '일반물리학및실험1',
             '일반물리학및실험2',
             '일반화학',
         ],
         전필 : 42,
         전선 : 30,
         졸업학점 : 130
     },
     "2020" : {
         교필 : 14,
         교필_과목: [
             'English Listening Practice 1 -2',
             'English Reading Practice 1 -2',
             '문제해결을위한글쓰기와발표 -3',
             '서양철학:쟁점과토론 -3',
             '대학생활과진로설계 -1',
             '신입생세미나 -1',
             '창업과기업가정신1 -1',
             '취업역량개발론(->취창업과진로설계) -1'
         ],
         교선1 : 21,
         교선1_영역 : [
             '사상과역사',
             '사회와문화',
             '융합과창업',
             '자연과과학기술',
             '세계와지구촌'
         ],
         기교 : 18,
         기교_과목 : [
             '일변수미적분학',
             '공업수학1',
             '공업수학2',
             '일반물리학및실험1',
             '일반물리학및실험2',
             '일반화학',
         ],
         전필 : 42,
         전선 : 30,
         졸업학점 : 130
     },
     "2021" : {
         교필 : 14,
         교필_과목: [
             'English Listening Practice 1 -2',
             'English Reading Practice 1 -2',
             '문제해결을위한글쓰기와발표 -3',
             '서양철학:쟁점과토론 -3',
             '대학생활과진로탐색 -1',
             '신입생세미나 -1',
             '창업과기업가정신1 -1',
             '취업역량개발론(->취창업과진로설계) -1'
         ],
         교선1 : 21,
         교선1_영역 : [
             '사상과역사',
             '사회와문화',
             '융합과창업',
             '자연과과학기술',
             '세계와지구촌'
         ],
         기교 : 18,
         기교_과목 : [
             '일변수미적분학',
             '공업수학1',
             '공업수학2',
             '일반물리학및실험1',
             '일반물리학및실험2',
             '일반화학',
         ],
         전필 : 42,
         전선 : 30,
         졸업학점 : 130
     }
 
 
 
 },
  공통인증 : {
     영어졸업인증 : '인증완료',
     고전독서인증 : null
 },
 
  공학인증 : {
     "2017" : {
         전문교양 : 16,
         전문교양_과목 : [
             'English Listening Practice 1',
             'English Listening Practice 2',
             'English Reading Practice 1',
             'English Reading Practice 2',
             '문제해결을위한글쓰기와발표',
             '세종사회봉사1',
             '서양철학:쟁점과토론',
             '세계사:인간과문명',
         ],
         MSC : 30,
         MSC_과목 : [
             '일변수미적분학',
             '공업수학1',
             '공업수학2',
             '선형대수',
             '확률및랜덤변수',
             '일반물리학및실험1',
             '일반물리학및실험2',
             '일반화학',
             '고급프로그래밍입문-C',
             '프로그래밍',
         ],
         전공 : 54,
         전공조건 : [
             '설계: 기초설계 -> 요소설계 (2과목 이수) -> 캡스톤 A or B',
             '실험 1과목 이상 이수',
             '일반영역 교과목 24학점 이상 이수',
             '선후수 지정 교과목 이수체계 준수'
         ],
         인증최소이수학점 : 100
     },
     "2018" : {
         전문교양 : 16,
         전문교양_과목 : [
             'English Listening Practice 1',
             'English Reading Practice 1',
             'English Reading Practice 2',
             '문제해결을위한글쓰기와발표',
             '세종사회봉사1',
             '서양철학:쟁점과토론',
             '세계사:인간과문명',
         ],
         MSC : 30,
         MSC_과목 : [
             '일변수미적분학',
             '공업수학1',
             '공업수학2',
             '선형대수',
             '확률및랜덤변수',
             '일반물리학및실험1',
             '일반물리학및실험2',
             '일반화학',
             '고급프로그래밍입문-C',
             '프로그래밍',
         ],
         전공 : 54,
         전공조건 : [
             '설계: 기초설계 -> 요소설계 (2과목 이수) -> 캡스톤 A or B',
             '실험 1과목 이상 이수',
             '일반영역 교과목 24학점 이상 이수',
             '선후수 지정 교과목 이수체계 준수'
         ],
         인증최소이수학점 : 100
     },
     "2019" : {
         전문교양 : 14,
         전문교양_과목 : [
             'English Listening Practice 1',
             'English Reading Practice 1',
             '문제해결을위한글쓰기와발표',
             '세종사회봉사1',
             '서양철학:쟁점과토론',
             '세계사:인간과문명',
         ],
         MSC : 30,
         MSC_과목 : [
             '일변수미적분학',
             '공업수학1',
             '공업수학2',
             '선형대수',
             '확률및랜덤변수',
             '일반물리학및실험1',
             '일반물리학및실험2',
             '일반화학',
             '고급프로그래밍입문-C',
             '프로그래밍',
         ],
         전공 : 54,
         전공조건 : [
             '설계: 기초설계 -> 요소설계 (2과목 이수) -> 캡스톤 A or B',
             '실험 1과목 이상 이수',
             '일반영역 교과목 24학점 이상 이수',
             '선후수 지정 교과목 이수체계 준수'
         ],
         인증최소이수학점 : 100
     },
     "2020" : {
         전문교양 : 14,
         전문교양_과목 : [
             'English Listening Practice 1',
             'English Reading Practice 1',
             '문제해결을위한글쓰기와발표',
             '세종사회봉사1',
             '서양철학:쟁점과토론',
             '세계사:인간과문명',
         ],
         MSC : 30,
         MSC_과목 : [
             '일변수미적분학',
             '공업수학1',
             '공업수학2',
             '선형대수',
             '확률및랜덤변수',
             '일반물리학및실험1',
             '일반물리학및실험2',
             '일반화학',
             '고급프로그래밍입문-C',
             '프로그래밍',
         ],
         전공 : 54,
         전공조건 : [
             '설계: 기초설계 -> 요소설계 (2과목 이수) -> 캡스톤 A or B',
             '실험 1과목 이상 이수',
             '일반영역 교과목 24학점 이상 이수',
             '선후수 지정 교과목 이수체계 준수'
         ],
         인증최소이수학점 : 100
     }
 }
 }
 

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
var 학점계산 = {
  전필: 0,
  전선: 0,
  교선1: 0,
  교선2: 0,
  기교: 0,
  교필: 0,
  이수학점: 0
};

async function study_list(req){
 await db.query(`SELECT * FROM class_sheet where 교과목명 like '${req}%'`, function (error, sheet) {

   //console.log(class_sheet);
  });
}

async function major_study_list_1(){
  await db.query(`SELECT DISTINCT 교과목명 FROM class_sheet WHERE 개설대학=? AND 개설학과전공=? AND year='1' `,[단과대학,학과], function(err, sheet){
    major_class_sheet_1 = JSON.parse(JSON.stringify(sheet));
  });

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
  <html lang= "ko">
   <head>
      <link rel="stylesheet" href="stylesheets/style.css" type="text/css">
      <title>GRADUATION</title>
      <meta charset="utf-8">
   </head>
  <body>
    <header>
      <h1><a href="/">Graduation-CHECK</a></h1>
      <h2>안내: 중필 -> 교필, 중선 -> 교선1, 교양 -> 교선2</h2>
    </header>

    <main>
     <div class="main-container">
       <div class="result-box box-1">
        <h2>전필</h2>
        <h4>40</h4>
       </div>
       <div class="result-box box-2">
        <h2>전선</h2>
        <h4>40</h4>
       </div>
       <div class="result-box box-3">
        <h2>교선1(=중선)</h2>
        <h4>40</h4>
       </div>
       <div class="result-box box-4">
        <h2>기교</h2>
        <h4>40</h4>
       </div>
       <div class="result-box box-5">
        <h2>교필</h2>
        <h4>40</h4>
       </div>
       <div class="result-box box-6">
        <h2>이수학점</h2>
        <h4>40</h4>
       </div>
       <div class="result-box box-7">
        <h2>봉사시간</h2>
        <h4>15/30</h4>
       </div>
       <div class="result-box box-8">
        <h2>영어인증</h2>
        <h4>40</h4>
       </div>
       <div class="result-box box-9">
        <h2>고전독서</h2>
        <h4>동양 동서양 서양 과학사</h4>
       </div>
       <div class="result-box box-10">
       <h2>공학인증</h2>
       <h4>완료</h4> 
       </div>
     </div>
    </main>
    <footer>하단</footer>
  </body>
</html>
  `;
  res.send(html);

  // var html = `
  //       <!doctype html>
  //       <html>
  //       <head>
  //       <link rel="stylesheet" href="stylesheets/style.css" type="text/css">
  //           <title>GRADUATION</title>
  //           <meta charset="utf-8">
  //       </head>
  //       <body>
  //           <h1><a href="/">Graduation-CHECK</a></h1>
  //              <form action="/go_to_select" method = "post">
  //              <select name="입학연도">
  //               ${selectYear};
  //              </select>
  //              <select name="단과대학" title>
  //              <option value = "전자정보공학대학">전자정보공학대학</option>
  //              </select>
  //              <select name="학과">
  //              <option value = "전자정보통신공학과">전자정보통신공학과</option>
  //              </select>
  //              <p>
  //               <input type="submit">
  //              </p>
  //              </form>
  //       </body>
  //       </html>
  //   `;
    major_study_list_1()
    major_study_list_2()
    major_study_list_3()
    major_study_list_4()
  res.send(html)
  
});


router.get('/select', function(req, res) { 



  console.log(입학연도)
  var list1='';
  var list2='';
  var list3='';
  var list4='';
  var list5='';
  var i=0,j=0,k=0,l=0,a=0;
  while(i < major_class_sheet_1.length){
    list1 += `<label><input type='checkbox' name='FST' value = '${show_major_list_1(major_class_sheet_1,i)}'>${show_major_list_1(major_class_sheet_1,i)}</label>  `
    i++;
  }
  while(j < major_class_sheet_2.length){
    list2 += `<label><input type='checkbox' name='SND' value = '${show_major_list_2(major_class_sheet_2,j)}'>${show_major_list_2(major_class_sheet_2,j)}</label>   `
    j++;
  }
  while(k < major_class_sheet_3.length){
    list3 += `<label><input type='checkbox' name='TRD' value = '${show_major_list_3(major_class_sheet_3,k)}'>${show_major_list_3(major_class_sheet_3,k)}</label>   `
    k++;
  }
  while(l < major_class_sheet_4.length){
    list4 += `<label><input type='checkbox' name='FTH' value = '${show_major_list_4(major_class_sheet_4,l)}'>${show_major_list_4(major_class_sheet_4,l)}</label>   `
    l++;
  }
  while(a < post_select.length){
    list5 += `<label><input type='checkbox' name='LST' value = '${show_major_list_5(post_select,a)}'checked="checked">${show_major_list_5(post_select,a)}</label>   `
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


router.get('/results', (req,res,next) =>{

  var html = `
  <!doctype html>
  <html lang= "ko">
   <head>
      <link rel="stylesheet" href="stylesheets/style.css" type="text/css">
      <title>GRADUATION</title>
      <meta charset="utf-8">
   </head>
  <body>
    <header>
      <h1><a href="/">Graduation-CHECK</a></h1>
      <h2>중필 -> 교필, 중선 -> 교선1, 교양 -> 교선2</h2>
    </header>

    <main>
      <div>
         <h2>전필</h2>
         <h4>${학점계산.전필}/${condition[학과][입학연도].전필}</h4>
     </div>
     <div>
         <h2>전선</h2>
         <h4>${학점계산.전선}/${condition[학과][입학연도].전선}</h4>
     </div>
     <div>
         <h2>교선1(=중선)</h2>
         <h4>${학점계산.교선1}/${condition[학과][입학연도].교선1}</h4>
     </div>
     <div>
         <h2>기교</h2>
         <h4>${학점계산.기교}/${condition[학과][입학연도].기교}</h4>
     </div>
     <div>
         <h2>교필</h2>
         <h4>${학점계산.교필}/${condition[학과][입학연도].교필}</h4>
     </div>
     <div>
         <h2>이수학점</h2>
         <h4>${학점계산.이수학점}/${condition[학과][입학연도].졸업학점}</h4>
     </div>
     <div>
         <h2>봉사시간</h2>
         <h4>15/30</h4>
     </div>
     <div>
         <h2>영어인증</h2>
         <h4>${condition.공통인증.영어졸업인증}</h4>
     </div>
     <div>
         <h2>고전독서</h2>
         <h4>동양 동서양 서양 과학사</h4>
     </div>
     <div>
         <h2>공학인증</h2>
         <h4>완료</h4>
     </div>
     </main>
     <footer>하단</footer>
  </body>
</html>
  `;
  res.send(html);

 })

  
  
 
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
  입학연도 = post.입학연도; 
  
  res.redirect('/select');
})


router.post('/results_process', (req,res) => {

  var i=0,j=0,k=0,l=0,a=0,b=0,c=0;
  학점계산.전필 = 0
  학점계산.전선 = 0
  학점계산.교선1 = 0
  학점계산.교선2 = 0
  학점계산.기교 = 0
  학점계산.교필 = 0
  학점계산.이수학점 = 0
  
  if (Array.isArray(req.body.FST) === true){
      while (i<req.body.FST.length){
          userClass[c] = req.body.FST[i];
          i++;
          c++;
      }
    } else{
      userClass.push(req.body.FST)
      c++;
    }
    
  if (Array.isArray(req.body.SND) === true){
    while (j<req.body.SND.length){
        userClass[c] = req.body.SND[j];
        j++;
        c++;
    }
  } else{
    userClass.push(req.body.SND)
    c++;
  }

  if (Array.isArray(req.body.TRD) === true){
    while (k<req.body.TRD.length){
        userClass[c] = req.body.TRD[k];
        k++;
        c++;
    }
  } else{
    userClass.push(req.body.TRD)
    c++;
  }

  if (Array.isArray(req.body.FTH) === true){
    while (l<req.body.FTH.length){
        userClass[c] = req.body.FTH[l];
        l++;
        c++;
    }
  } else{
    userClass.push(req.body.FTH)
    c++;
  }

  if (Array.isArray(req.body.LST) === true){
    while (a<req.body.LST.length){
        userClass[c] = req.body.LST[a];
        a++;
        c++;
    }
  } else{
    userClass.push(req.body.LST)
    c++;
  } 

  db.query(`SELECT * FROM test WHERE  교과목명 IN (?) `,[userClass], function(err, search){

      while ( b < search.length) {
          if (search[b]['이수\n구분'] === "전공필수"){
              학점계산.전필 += search[b].학점
              학점계산.이수학점 += search[b].학점
              b ++;
          } else if (search[b]['이수\n구분'] === "전공선택"){
              학점계산.전선 += search[b].학점
              학점계산.이수학점 += search[b].학점
              b ++;
          } else if (search[b]['이수\n구분'] === "교양선택(1영역)"){
              학점계산.교선1 += search[b].학점
              학점계산.이수학점 += search[b].학점
              b ++;
          } else if (search[b]['이수\n구분'] === "교양선택(2영역)"){
              학점계산.교선2 += search[b].학점
              학점계산.이수학점 += search[b].학점
              b ++;
          } else if (search[b]['이수\n구분'] === "학문기초교양"){
              학점계산.기교 += search[b].학점
              학점계산.이수학점 += search[b].학점
              b ++;
          } else if (search[b]['이수\n구분'] === "교양필수"){
              학점계산.교필 += search[b].학점
              학점계산.이수학점 += search[b].학점
              b ++;
          } 
          }
      })


  i=0,j=0,k=0,l=0,a=0,b=0,c=0;
  userClass = []
  res.redirect('/results');
})







module.exports = router;
