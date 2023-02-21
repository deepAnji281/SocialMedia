const express=require('express');
const app=express();
const port=7000
app.listen(port,(err)=>{
    if(err)
    return
    console.log('server is running at port',port);
})
