const express=require('express');
const app=express();
const port=7000
const expressLayouts=require('express-ejs-layouts');
//linking of mongodb;
const db=require('./configure/mongoose');
// require cookies we need to cookie-parser
const cookieParser=require('cookie-parser');
// use of layouts
app.use(expressLayouts);
// use of static file
app.use(express.static('./assets'));
app.use(express.urlencoded());
// use of cookieParser
app.use(cookieParser());
// use of static file

// extracting style and scripts
  app.set('layout extractStyles',true);
  app.set('layout extractScripts',true);

// middleware
app.use('/',require('./routes'));
app.use('/',require('./routes/user'))
// setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,(err)=>{
    if(err)
    return
    console.log('server is running at port',port);
})
