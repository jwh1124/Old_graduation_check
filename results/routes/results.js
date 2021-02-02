var express = require('express');
var router = express.Router();
// var db = require('../public/javascripts/db');


const conditionElectronic = {
    전필 : 42,
    전선 : 30,

}
const conditionCommon = {
    교필 : [
        'English Listening Practice1',
        'English Reading Practice1',
        '문제해결을위한글쓰기와발표',
        '서양철학:쟁점과토론',
        '대학생활과진로탐색',
        '신입생세미나',
        '창업과기업가정신1',
        '취창업과진로설계'
    ]



}
router.get('/results/:years/:major', (req, res, next) =>{
    
    console.log(conditionCommon);
    console.log(conditionElectronic);
    


})
module.exports = router;
