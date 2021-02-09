module.exports = {
  HTML:function(title, form){
    return `
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" type="text/css" href="./stylesheets/form_style.css">
    </head>
    <body>
      <div class="select_box">
        <div class="header">
          <h1> ${title} </h1>
          ${form}
        </div>
        <div class="lv.1">
          <div class="item">
            <span class="icon">A</span>
            <span class="name">Apple</span>
          </div>
    
          <div class="item">
            <span class="icon">O</span>
            <span class="name">Orange</span>
          </div>
    
          <div class="item">
            <span class="icon">M</span>
            <span class="name">Mandarin</span>
          </div>
    
          <div class="item">
            <span class="icon">S</span>
            <span class="name">Strawberry</span>
          </div>
    
          <div class="item">
            <span class="icon">W</span>
            <span class="name">Watermelon</span>
          </div>
    
          <div class="item">
            <span class="icon">G</span>
            <span class="name">Grape</span>
          </div>
    
          <div class="item">
            <span class="icon">P</span>
            <span class="name">Pear</span>
          </div>
    
          <div class="item">
            <span class="icon">C</span>
            <span class="name">Cherry</span>
          </div>
        </div>
      </div>
    </body>
    
    </html>
    `;
  }
}
