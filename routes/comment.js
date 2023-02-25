const express=require('express');
const router=express.Router();
const commentCont=require('../controller/commentController');
router.post('/comment/create',commentCont.createComment);
module.exports=router;