const express=require('express');
const router=express.Router();
const usercont=require('../controller/userController');
router.get('/user/profile',usercont.profile);
module.exports=router;
