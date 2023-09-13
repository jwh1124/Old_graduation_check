var express = require('express');
var router = express.Router();
var db = require('../public/javascripts/db');


const condition = {
 전자정보통신공학과 : {
    
    y2017 : {
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
    y2018 : {
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
    y2019 : {
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
    y2020 : {
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
    y2021 : {
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
    y2017 : {
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
    y2018 : {
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
    y2019 : {
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
    y2020 : {
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

var 입학연도 = '';
var 단과대학 = '';
var 학과 = '';
var 학점계산 = {
    전필: 0,
    전선: 0,
    교선1: 0,
    교선2: 0,
    기교: 0,
    교필: 0,
    이수학점: 0
};
var userClass = [];

router.post('/selected', (req,res) => {
    var post = req.body;
    console.log(post)
    console.log(post)
    단과대학 = post.단과대학;
    학과 = post.학과;
    입학연도 = 'y'+post.입학연도;   
    
    res.redirect('/results/myclass');
})

// router.get('/myclass', (req,res) =>{
//     db.query(`SELECT * FROM class_sheet WHERE 개설대학=전자정보공학대학 AND 개설학과전공=전자정보통신공학과 `,[단과대학,학과], function(err, topic){
//         console.log(topic)

//         var html = `
//         <!doctype html>
//         <html>
//         <head>
//             <title>GRADUATION</title>
//             <meta charset="utf-8">
//         </head>
//         <body>
//             <h1><a href="/">Graduation-CHECK</a></h1>
//             <h1><a href="/results">결과</a></h1>
//                ${topic[1].교과목명}
//                 <form method="post" action="/results/myclass_process">
//                 <p>수강한 과목</p>
//                 <label><input type="checkbox" name="교과목명" value="${topic[0].교과목명}"> ${topic[0].교과목명}</label>
//                 <label><input type="checkbox" name="교과목명" value="${topic[1].교과목명}"> ${topic[1].교과목명}</label>
//                 <p><input type="submit" value="Submit"> <input type="reset" value="Reset"></p>
//                 </form>
                
            
//         </body>
//         </html>
//     `;
//     res.send(html);
//     })
// })
router.post('/myclass_process', (req,res) => {
    // if (Array.isArray(postClass.교과목명) === true){
    //     while (i<postClass.교과목명.length){
    //         userClass[i] = postClass.교과목명[i];
    //         i++;
    //     }
    // } else{
    //     userClass[0] = postClass.교과목명
    // }
    var i=0,j=0,k=0,l=0,a=0,b=0,c=0;
    
  console.log(req.body.FST);
  console.log(req.body.SND);
  console.log(req.body.TRD);
  console.log(req.body.TRD[0]);
  console.log(req.body.TRD[1]);
  console.log(req.body.TRD.length);
  console.log(req.body.FTH);
  console.log(req.body.LST);  


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
      console.log(userClass)
    db.query(`SELECT * FROM test WHERE  교과목명 IN (?) `,[userClass], function(err, search){
        console.log(search)
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

router.get('/', (req,res,next) =>{
    

    
 
    // var list = '<div>';
    // var i = 0;
    // while (i < something.length){
    //     list += `
    //     <div>
    //         <h2>전필</h2>
    //         <h4>${학점계산.전필}/${condition[학과][입학연도].전필}</h4>
    //     </div>
    //     `
    //     i++;
    // }
    // list = list + '</div>';
    
    var html = `
    <!doctype html>
    <html>
    <head>
        <title>GRADUATION</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1><a href="/">Graduation-CHECK</a></h1>
        <h2>중필 -> 교필, 중선 -> 교선1, 교양 -> 교선2</h2>
           

            <div></div>
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
        
        </body>
        </html>
    `;
    res.send(html);
    학점계산 = {
        전필: 0,
        전선: 0,
        교선1: 0,
        교선2: 0,
        기교: 0,
        교필: 0,
        이수학점: 0
    }

     })
  
    
    
   


module.exports = router;
