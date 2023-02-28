const express=require('express');
const router=express.Router();
const passport=require('passport')
const postCont=require('../controller/postController');
router.post('/post/create',passport.checkAuthentication,postCont.createPost);
router.get('/post/destroy/:id',passport.checkAuthentication,postCont.destroy);

module.exports=router;