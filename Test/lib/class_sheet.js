var db = require("./db");
var template = require("./template.js");
var url = require("url");
var qs = require("querystring");

exports.home = function (request, response){
    db.query(`SELECT *FROM class_sheet`, function(error, _class){
        var title = "졸업인증도우미";
        var description = "자신의 정보를 입력해주세요.";
        var list = template.list(_class);
        var html = template.HTML(
          title,
          list,
          `<h2>${title}</h2>${description}`,
          `<a href="/create">create</a>`
        );
        response.writeHead(200);
        response.end(html);
    });
}