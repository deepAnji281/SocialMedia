const express=require('express');
const passport = require('passport');
const router=express.Router();
const commentCont=require('../controller/commentController');
router.post('/comment/create',commentCont.createComment);
router.get('/comment/destroy/:id',passport.checkAuthentication,commentCont.destroy)
module.exports=router;