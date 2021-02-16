var express = require("express");
var router = express.Router();
var template = require("../lib/template.js");
var db = require("../public/javascripts/db.js");
var class_sheet = "";
var major_class_sheet_1 = [];
var major_class_sheet_2 = [];
var major_class_sheet_3 = [];
var major_class_sheet_4 = [];
var post_select = [];
var 입학연도 = "";
var 단과대학 = "";
var 학과 = "";

async function study_list(req) {
  await db.query(
    `SELECT * FROM class_sheet where 교과목명 like '${req}%'`,
    function (error, sheet) {
      class_sheet = JSON.parse(JSON.stringify(sheet));
      //console.log(class_sheet);
    }
  );
}

async function major_study_list_1() {
  await db.query(
    `SELECT * FROM class_sheet WHERE 개설대학='전자정보공학대학' AND 개설학과전공='전자정보통신공학과' AND 학년='1' `,
    function (err, sheet) {
      major_class_sheet_1 = JSON.parse(JSON.stringify(sheet));
    }
  );
}
async function major_study_list_2() {
  await db.query(
    `SELECT * FROM class_sheet WHERE 개설대학='전자정보공학대학' AND 개설학과전공='전자정보통신공학과' AND 학년='2' `,
    [단과대학, 학과],
    function (err, sheet) {
      major_class_sheet_2 = JSON.parse(JSON.stringify(sheet));
    }
  );
}
async function major_study_list_3() {
  await db.query(
    `SELECT * FROM class_sheet WHERE 개설대학='전자정보공학대학' AND 개설학과전공='전자정보통신공학과' AND 학년='3' `,
    [단과대학, 학과],
    function (err, sheet) {
      major_class_sheet_3 = JSON.parse(JSON.stringify(sheet));
    }
  );
}
async function major_study_list_4() {
  await db.query(
    `SELECT * FROM class_sheet WHERE 개설대학='전자정보공학대학' AND 개설학과전공='전자정보통신공학과' AND 학년='4' `,
    [단과대학, 학과],
    function (err, sheet) {
      major_class_sheet_4 = JSON.parse(JSON.stringify(sheet));
    }
  );
}

function show_list(length, num) {
  i = length.length;
  var list = [];
  for (j = 0; j < i; j++) {
    list[j] = length[j].교과목명;
  }
  return list[num];
}

function show_major_list_1(length, num) {
  i = length.length;
  var list = [];
  for (j = 0; j < i; j++) {
    list[j] = length[j].교과목명;
  }
  return list[num];
}
function show_major_list_2(length, num) {
  i = length.length;
  var list = [];
  for (j = 0; j < i; j++) {
    list[j] = length[j].교과목명;
  }
  return list[num];
}

function show_major_list_3(length, num) {
  i = length.length;
  var list = [];
  for (j = 0; j < i; j++) {
    list[j] = length[j].교과목명;
  }
  return list[num];
}

function show_major_list_4(length, num) {
  i = length.length;
  var list = [];
  for (j = 0; j < i; j++) {
    list[j] = length[j].교과목명;
  }
  return list[num];
}

function show_major_list_5(length, num) {
  if (Array.isArray(length) === true) {
    const sml5 = new Set(length);
    const l5 = [...sml5];
    i = l5.length;
    var list = [];
    for (j = 0; j < i; j++) {
        list[j] = l5[j];
      }   
    return list[num];
  } else {
        return length;
    }   
  }

/* GET home page. */

router.get("/", function (req, res, next) {
  var selectYear = "";
  var i = 0;
  var year = [2017, 2018, 2019, 2020, 2021];
  while (i < year.length) {
    selectYear += `<option value = "${year[i]}">${year[i]}</option>`;
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
  res.send(html);
});

router.get("/select", function (req, res) {
  major_study_list_1();
  major_study_list_2();
  major_study_list_3();
  major_study_list_4();
  var list1 = [];
  var list2 = [];
  var list3 = [];
  var list4 = [];
  var list5 = [];
  var i = 0,
    j = 0,
    k = 0,
    l = 0,
    a = 0;

  while (i < major_class_sheet_1.length) {
    list1 += `<input type='checkbox' name='FST' value = '${show_major_list_1(
      major_class_sheet_1,
      i
    )}'>${show_major_list_1(major_class_sheet_1, i)}  `;
    i++;
  }

  while (j < major_class_sheet_2.length) {
    list2 += `<input type='checkbox' name='SND' value = '${show_major_list_2(
      major_class_sheet_2,
      j
    )}'>${show_major_list_2(major_class_sheet_2, j)}  `;
    j++;
  }
  while (k < major_class_sheet_3.length) {
    list3 += `<input type='checkbox' name='TRD' value = '${show_major_list_3(
      major_class_sheet_3,
      k
    )}'>${show_major_list_3(major_class_sheet_3, k)}  `;
    k++;
  }
  while (l < major_class_sheet_4.length) {
    list4 += `<input type='checkbox' name='FTH' value = '${show_major_list_4(
      major_class_sheet_4,
      l
    )}'>${show_major_list_4(major_class_sheet_4, l)}  `;
    l++;
  }
  if (Array.isArray(post_select) === true) {
    while (a < post_select.length) {
      list5 += `<input type='checkbox' name='LST' value = '${show_major_list_5(
        post_select,
        a
      )}'checked="checked">${show_major_list_5(post_select, a)}  `;
      a++;
    }
  } else {
    list5 = `<input type='checkbox' name='LST' value = '${show_major_list_5(
      post_select,
      a
    )}'checked="checked">${show_major_list_5(post_select, a)}  `;
  }
  var html = template.HTML_selected(
    "과목선택창",
    `
  <form action='/go_to_search' method='post'>
  <p>
    <input type="submit" value="전공 외 과목 검색">
  </p>
</form>
`,
    list1,
    list2,
    list3,
    list4,
    list5,
    `
<p>
  <input type="submit"value="다음">
  <input type="reset"> 
</p>
</form>
`
  );
  res.send(html);
});

router.get("/search", function (req, res) {
  var list = [];
  var list2 = [];
  var i = 0,
    a = 0;
  while (i < class_sheet.length) {
    list += `<input type='checkbox' name='First' value = '${show_list(
      class_sheet,
      i
    )}'>${show_list(class_sheet, i)}<br>`;
    i++;
  }

  if (Array.isArray(post_select) === true) {
    while (a < post_select.length) {
      list2 += `<input type='checkbox' name='First' value = '${show_major_list_5(
        post_select,
        a
      )}'checked="checked">${show_major_list_5(post_select, a)}<br>  `;
      a++;
    }
  } else {
    list2 = `<input type='checkbox' name='First' value = '${show_major_list_5(
      post_select,
      a
    )}'checked="checked">${show_major_list_5(post_select, a)}<br>  `;
  }
  var html_s = template.HTML_search(
    "과목검색창",
    `
  <form action='/search_process' method='post'>
  <p>
  <input type="text" name="body" placeholder="과목입력">
  </p>
  <p>
    <input type="submit" value="검색">
  </p>
  </form>
  `,
    `
  <form action="/select_process" method="post">
  <div class="selected">
  선택된 과목<br>
  ${list2}
  </div>
  ${list}
    <p>
    <input type="submit" value="나가기">
    </p>
  </form>
  `
  );
  res.send(html_s);
});

router.post("/search_process", function (req, res) {
  var post_name = req.body.body;
  study_list(post_name);
  res.redirect(`/search`);
});

router.post("/select_process", function (req, res) {
  if(Array.isArray(req.body.First) === true){
  const spf = new Set(req.body.First);
  const nF = [...spf];
  if (req.body.First === undefined) {
    req.body.First = [];
    post_select = nF;
  } else {
    post_select = nF;
  }
}else{
  if (req.body.First === undefined) {
    req.body.First = [];
    post_select = req.body.First;
  } else {
    post_select = req.body.First;
  }
}

  res.redirect(`/select`);
});

router.post("/go_to_search", function (req, res) {
  res.redirect(`/search`);
});

router.post("/go_to_select", function (req, res) {
  res.redirect(`/select`);
});

router.post("/checked_data", function (req, res) {
  const set5 = new Set(req.body.LST);
  const Fifth = [...set5];

  console.log(req.body.FST);
  console.log(req.body.SND);
  console.log(req.body.TRD);
  console.log(req.body.FTH);
  console.log(Fifth);
  res.redirect(`/`);
});

module.exports = router;
