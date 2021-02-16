module.exports = {
  HTML_search:function(title,form,list){
    return `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="./stylesheets/search_style.css">
    </head>
    <body>
      <div class="select_box">
        <div class="header">
          <h1> ${title} </h1>
          ${form}
        </div>
        <div class="lv.1">
        <div class="item">

          <span class="name">${list}</span>
          </div>
        </div>
      </div>
    </body>
    </html>

    `;
  },
  HTML_selected:function(title,search,f_list,s_list,t_list,l_list,other,next,reset){
    return`
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="./stylesheets/search_style.css">
    </head>
    <body>
      <div class="select_box">
        <div class="header">
          <h1> ${title} </h1>
          ${search}
        </div>
        <div class="names">
        1학년<br>
        <form action='/checked_data' method='post'>
        <div style="overflow:auto; width:1000px; height:100%; white-space:nowrap;">
          <span class="name1">${f_list}</span>
          </div>
          <br>
        2학년<br>
        <div style="overflow:auto; width:1000px; height:100%; white-space:nowrap;">
          <span class="name2">${s_list}</span>
          </div>
          <br>
        3학년<br>
        <div style="overflow:auto; width:1000px; height:100%; white-space:nowrap;">
          <span class="name3">${t_list}</span>
        </div>
          <br>
        4학년<br>
        <div style="overflow:auto; width:1000px; height:100%; white-space:nowrap;">
          <span class="name4">${l_list}</span>
          </div>
          <br>
        전공 외<br>
        <div style="overflow:auto; width:1000px; height:100%; white-space:nowrap;">
          <span class="name5">${other}</span>
          </div>
          <br>
          ${next} ${reset}
          </div>
        </div>
      </div>

    </body>
    
    </html>
    `
  }
}
