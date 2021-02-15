const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = JSDOM
module.exports = {
  select: function (){
      var yearList = dom.window.document.querySelector('.year-list')
console.log(yearList)
  yearList.onchange = function (){
    var college = dom.window.document.querySelector('.college')
    var mainoption = yearList.options[yearList.selectedIndex].innerText;
  }
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

switch (yearList){
  case '2017':
    var college = collegeOption.y2017;
    break;
  case '2018':
    var college = collegeOption.y2018;
    break;
  case '2019':
    var college = collegeOption.y2019;
    break;
  case '2020':
    var college = collegeOption.y2020;
    break;
  case '2021':
    var college = collegeOption.y2021;
    break;
}
college.option.length = 0;

for (var i = 0; i < collegeOption.length; i++){
  var option = dom.window.document.createElement('option');
  option.innerText = collegeOption[i];
  college.append(option);
}
  }
}
