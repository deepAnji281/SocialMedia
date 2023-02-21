const express=require('express');
const app=express();
const port=7000
const expressLayouts=require('express-ejs-layouts');
// use of layouts
app.use(expressLayouts);

// use of static file
app.use(express.static('./assets'));

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
