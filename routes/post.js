const express=require('express');
const router=express.Router();
const passport=require('passport')
const postCont=require('../controller/postController');
router.post('/post/create',passport.checkAuthentication,postCont.createPost);
module.exports=router;