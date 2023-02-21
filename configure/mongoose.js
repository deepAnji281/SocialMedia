const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codialDevelopment');
const db=mongoose.connection;
db.on('error',console.error.bind('error connceting to mongodb'));
db.once('open',()=>{
    console.log('successfully connected to db');

})
module.exports=db;