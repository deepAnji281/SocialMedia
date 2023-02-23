const express=require('express');
const router=express.Router();
const postCont=require('../controller/postController');
router.post('/post/create',postCont.createPost);
module.exports=router;